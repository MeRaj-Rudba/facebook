import React from 'react';
import logo from '../../images/logo.png';
import './Header.css';

const Header = () => {
    return (
        <div className='header'>
            <img src={logo} alt=""/>
            <h1 className='text-1'>Facebook Simple</h1>
            <nav>
                <a href="/friend">Friends</a>
                <a href="/profile">Profile</a>
                <a href="/home">Home</a>
            </nav>

        </div>
    );
};

export default Header;