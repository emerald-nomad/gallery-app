import React from 'react';
import Search from './Search';
import Nav from './Nav';
import { Route } from 'react-router-dom';

const Header = () => {
        return(
            <div>
                <Route component={ Search } />
                <Nav />
            </div>
        );
    
}

export default Header;