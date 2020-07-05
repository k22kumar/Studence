import React, {useEffect, useState} from 'react';
import Login from './Login';
import axios from 'axios';

const PostAd = (props) => {
    // set usernames and password to empty strings
    const [title, setTitle] = useState("");
    const [price, setPrice] = useState(0);
    const [searchPic, setSearchPic] = useState("");
    const [picture, setPicture] = useState("");
    const [description, setDescription] = useState("");
    const [photoResults, setPhotoResults] = useState([]); 

    const updateText = (e, specificState) => {
        if (specificState === "title") {
            setTitle(e.target.value);
        } else if (specificState === "price") {
            setPrice(e.target.value);
        } else if (specificState === "searchPic") {
            setSearchPic(e.target.value);
        } else if (specificState === "description") {
            setDescription(e.target.value);
        } else { }
    }

    const searchPicture = (e) => {
        e.preventDefault();
        axios({
            url: 'https://api.pexels.com/v1/search',
            method: 'GET',
            responseType: 'json',
            headers: {
                Authorization: '563492ad6f917000010000016fbbfe29d1004ae7b7d31d9dab75aed7'
            },
            params: {
                query: searchPic,
                total_results: 10
            }            
        }).then((response) => {
            // turn on picture results components
            // for each picture make it a clickable square component
            // when its clicked put a border around it and add the string to picture
            // while the state is blank put a message to recommend choosing a photo
            console.log(response.data.photos);
            setPhotoResults(response.data.photos);
        })
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
                <label htmlFor="searchPic">Search for Picture</label>
                <input type="text" id="searchPic" onChange={(e) => { updateText(e, "searchPic")}}/>
                <button onClick={(e)=> {searchPicture(e)}}>Search Picture</button>
                <div>
                    {photoResults.map((photo, id) => {
                        return <button key={id} className="picChoice" onClick={() => { setPicture(photo.src.small)}} >
                                    <img src={photo.src.original} alt=""/>
                                </button>
                    })
                    }
                </div>
                <label htmlFor="description">Description</label>
                <input required type="text" id="description" onChange={(e) => { updateText(e, "description")}}/>
                <button onClick={(e) => {
                    props.postAd(title, price, picture, description, e);
                }} >Upload Ad</button>
            </form>}
        </div>
    )
}

export default PostAd;