import React from 'react';
import Login from './Login';

const Account = (props) => {
    return (
        <div>
            {/* IF LOGGEDIN where users can see their ads/acount info and edit them*/}
            {/* IF NOT LOGGEDIN show sign up stuff*/}
            {!props.isLoggedIn && <Login logUserIn={props.logUserIn}/>}
            {props.isLoggedIn && <h3>HIII</h3>}
        </div>
    )
}

export default Account;