import React, {useState} from 'react';

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
        (signInPassword !== "" && signInUsername !== "") ? 
            enable("signIn") :
            disable("signIn");
        (registerPassword !== "" && registerUsername !== "") ?
            enable("register") :
            disable("register");
    }

    // function to disable upload button for wrong input
    const enable = (buttonID) => {
        document.getElementById(buttonID).classList.remove("disabled");
    }
    const disable = (buttonID) => {
        document.getElementById(buttonID).classList.add("disabled");
    }

    return (
        <ul className="loginContainer">
            <li className="flexParent flexColumn loginForm">
                <h2>Sign In</h2>
                <form action="" className="flexParent flexColumn">
                    <div className="inputLabel">
                        <label htmlFor="username">Username</label>
                        <input type="text" id="username" placeholder="Enter Username"
                        onChange={(e) => { updateText(e, "signInUsername") }} />
                    </div>
                    <div className="inputLabel">
                        <label htmlFor="password">Password</label>
                        <input type="text" id="password" placeholder="Enter Password"
                        onChange={(e) => { updateText(e, "signInPassword") }} />
                    </div>
                </form>
                    <button className="siteButton disabled" id="signIn" onClick={() => props.logUserIn(signInUsername, signInPassword)}>Sign In</button>
            </li>
            <li className="flexParent flexColumn registerForm">
                <h2>Register</h2>
                <form action="" className="flexParent flexColumn">
                    <div className="inputLabel">
                        <label htmlFor="newUsername">Username</label>
                        <input type="text" id="newUsername" placeholder="Enter Username"
                        onChange={(e) => { updateText(e, "registerUsername") }} />
                    </div>
                    <div className="inputLabel">
                        <label htmlFor="newPassword">Password</label>
                        <input type="text" id="newPassword" placeholder="Enter Password"
                        onChange={(e) => { updateText(e, "registerPassword") }} />
                    </div>
                    <button className="siteButton disabled" id="register" onClick={(e) => props.registerUser(registerUsername, registerPassword, e)}>Register</button>
                </form>
            </li>
        </ul>
    )
}

export default Login;