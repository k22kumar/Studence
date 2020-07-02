import React, {useState, useEffect} from 'react';

const Login = (props) => {

    // set usernames and password to empty strings
    const [signInUsername, setSignInUsername] = useState("");
    const [signInPassword, setSignInPassword] = useState("");
    const [registerUsername, setRegisterUsername] = useState("");
    const [registerPassword, setRegisterPassword] = useState("");

    const updateText = (e, specificState) => {
        if (specificState === "signInUsername"){
            setSignInUsername(e.target.value);
        } else if (specificState === "signInPassword") {
            setSignInPassword(e.target.value);
        } else if (specificState === "registerUsername") {
            setRegisterUsername(e.target.value);
        } else if (specificState === "registerPassword") {
            setRegisterPassword(e.target.value);
        } else {}
    }

    return (
        <ul>
            <li>
                <h2>Sign In</h2>
                <form action="">
                    <label htmlFor="username">Username</label>
                    <input type="text" id="username" onChange={(e) => { updateText(e, "signInUsername")}}/>
                    <label htmlFor="password">Password</label>
                    <input type="text" id="password" onChange={(e) => { updateText(e, "signInPassword")}}/>
                </form>
                    <button onClick={() => props.logUserIn(signInUsername, signInPassword)}>Sign In</button>
            </li>
            <li>
                <h2>Register</h2>
                <form action="">
                    <label htmlFor="newUsername">Username</label>
                    <input type="text" id="newUsername" onChange={(e) => {updateText(e, "registerUsername")}}/>
                    <label htmlFor="newPassword">Password</label>
                    <input type="text" id="newPassword" onChange={(e) => { updateText(e, "registerPassword")}}/>
                </form>
            </li>
        </ul>
    )
}

export default Login;