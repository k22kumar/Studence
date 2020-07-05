import React, {useState, useEffect} from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import Account from './Account';

const Navigation = () => {
    return (
        <nav>
            <Link exact to="/"><h1>Studence</h1></Link>
            <Link to="/postAd">Post Ad</Link>
            <Link to="/account">Account</Link>
            <Link to="/cart">Cart</Link>
        </nav>
    )
}

export default Navigation;