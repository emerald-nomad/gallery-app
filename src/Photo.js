import React from 'react';
import PropTypes from 'prop-types';

const Photo = props => (
    <li>
        <img src={`https://farm${props.farmId}.staticflickr.com/${props.serverId}/${props.id}_${props.secret}.jpg`} alt="" />
    </li>
                
);

Photo.propTypes = {
    farmId: PropTypes.number.isRequired,
    serverId: PropTypes.string.isRequired,
    id: PropTypes.string.isRequired,
    secret: PropTypes.string.isRequired,
}

export default Photo;