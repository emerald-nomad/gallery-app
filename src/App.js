import React, { Component } from 'react';
import {
  BrowserRouter,
  Route,
  Redirect
} from 'react-router-dom';

// App Components
import Header from './Header';
import Gallery from './Gallery';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="container">
          <Header />
          <Route exact path='/' render={() => <Redirect to='/cats' />} />
          <Route path='/:query' component={ Gallery }/>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;