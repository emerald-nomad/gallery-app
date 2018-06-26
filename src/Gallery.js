import React, { Component } from 'react';
import axios from 'axios';
import apiKey from './config.js';
import Photo from './Photo';
import NotFound from './NotFound';

class Gallery extends Component {
    state = {
        photos: [],
    }

    getPhotos = query => {
        axios.get(`https://api.flickr.com/services/rest/?method=flickr.photos.search&api_key=${apiKey}&tags=${query}&per_page=16&format=json&nojsoncallback=1`)
            .then(data => {
                let photos = data.data.photos.photo;
                this.setState({
                    loading: false,
                    photos: photos,
                })
            })
            .catch(err => console.log(err));
    }

    componentDidMount() {
        this.getPhotos("cats");
    }

    componentDidUpdate(prevProps) {
        if (prevProps.match.params.query !== this.props.match.params.query) {
            this.getPhotos(this.props.match.params.query);
        }
    }

    render () {
        let photos;
        if (this.state.photos.length > 0) {
            photos = this.state.photos.map(photo => <Photo farmId={photo.farm} serverId={photo.server} id={photo.id} secret={photo.secret} key={photo.id}/>);
        }
        else {
            photos = <NotFound />
        }
        
        return (
            <div className="photo-container">
                <h2>{this.props.match.params.query} Photos</h2>
                <ul>
                    {photos}
                </ul>
            </div>
        );
    }
};

export default Gallery;