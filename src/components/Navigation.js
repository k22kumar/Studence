import React, {useState, useEffect} from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import Account from './Account';

const Navigation = () => {
    return (
        <nav className="flexParent mainMenu">
            <Link exact to="/Studence"><h1>Studence</h1></Link>
            <Link className="postAdNav" to="/postAd">Post Ad</Link>
            <Link className="account" to="/account">Account <i class="fas fa-user-circle"></i></Link>
            <Link className="cart" to="/cart">
            <i aria-label="Click to view cart" class="fas fa-shopping-cart"></i>
            </Link>
        </nav>
    )
}

export default Navigation;