import React, {useEffect, useState} from 'react';
import Login from './Login';

const PostAd = (props) => {
    // set usernames and password to empty strings
    const [title, setTitle] = useState("");
    const [price, setPrice] = useState(0);
    const [picture, setPicture] = useState("");
    const [description, setDescription] = useState("");

    const updateText = (e, specificState) => {
        if (specificState === "title") {
            setTitle(e.target.value);
        } else if (specificState === "price") {
            setPrice(e.target.value);
        } else if (specificState === "picture") {
            setPicture(e.target.value);
        } else if (specificState === "description") {
            setDescription(e.target.value);
        } else { }
    }

    return(
        <div>
            {!props.isLoggedIn && <Login logUserIn={props.logUserIn} registerUser={props.registerUser}/>}
            {props.isLoggedIn && 
            <form action="" >
                <label htmlFor="title">Title</label>
                <input required type="text" id="title" onChange={(e) => { updateText(e, "title")}}/>
                <label htmlFor="price">Price</label>
                <input required type="text" id="price" onChange={(e) => { updateText(e, "price")}}/>
                <label htmlFor="picture">Picture</label>
                <input type="text" id="picture" onChange={(e) => { updateText(e, "picture")}}/>
                <label htmlFor="description">Description</label>
                <input required type="text" id="description" onChange={(e) => { updateText(e, "description")}}/>
                <button onClick={e => props.postAd(title, price, picture, description, e)} >Upload Ad</button>
            </form>}
        </div>
    )
}

export default PostAd;