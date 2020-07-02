import React from 'react';

LoginPage = (props) => {
    return (
        <div>
            <h2>Sign In</h2>
            <form action="">
                <label htmlFor="username">Username</label>
                <input type="text" id="username" />
                <label htmlFor="password">Password</label>
                <input type="text" id="password" />
            </form>
        </div>
    )
}

export default LoginPage;