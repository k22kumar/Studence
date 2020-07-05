import React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import Account from './Account';

const Navigation = (props) => {
    let welcome = "";
    props.isLogggedIn ?
        welcome = "Account" :
        welcome = "Sign In";
    return (
        <nav>
            <Link exact to="/"><h1>Studence</h1></Link>
            <Link to="/postAd">Post Ad</Link>
            <Link to="/account">{welcome}</Link>
            <button>Cart</button>
        </nav>
    )
}

export default Navigation;