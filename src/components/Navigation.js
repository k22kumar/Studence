import React from 'react';

const Navigation = (props) => {
    return (
        <nav>
            <h1>Studence</h1>
            <button>Post Ad</button>
            {!props.isLogggedIn && <button>Account</button>}
            {props.isLogggedIn && <button>Sign In</button>}
            <button>Cart</button>
        </nav>
    )
}

export default Navigation;