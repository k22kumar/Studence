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
            setPhotoResults(response.data.photos);
        })
    }

    return(
        <div className="adPostContainer">
            {!props.isLoggedIn && <Login logUserIn={props.logUserIn} registerUser={props.registerUser}/>}
            {props.isLoggedIn && 
            <form action="" id="adPost" className="flexParent flexColumn">
                <div className="inputLabel">
                    <label htmlFor="title">Title</label>
                    <input required type="text" id="title" onChange={(e) => { updateText(e, "title") }} />
                </div>
                <div className="inputLabel">
                    <label htmlFor="price">Price</label>
                    <input required type="text" id="price" onChange={(e) => { updateText(e, "price") }} />
                </div>
                <div className="inputLabel">
                    <label htmlFor="searchPic">Search for Picture</label>
                    <input type="text" id="searchPic" onChange={(e) => { updateText(e, "searchPic") }} />
                </div>
                <button className="siteButton" onClick={(e)=> {searchPicture(e)}}>Search Picture</button>
                {picture === "" && <p>It is recommended you provide a picture!</p>}
                <div className="picGallery flexParent flexWrap">
                    {photoResults.map((photo, id) => {
                        return <button key={id} className="picChoice" onClick={() => { setPicture(photo.src.small)}} >
                                    <img src={photo.src.small} alt=""/>
                                </button>
                    })
                    }
                </div>
                <label htmlFor="description">Description</label>
                <textarea required name="description" id="description" id="description" onChange={(e) => { updateText(e, "description") }} cols="30" rows="10"></textarea>
                <button className="siteButton" onClick={(e) => {
                    props.postAd(title, price, picture, description, e);
                    setPhotoResults([]);
                }} >Upload Ad</button>
            </form>}
        </div>
    )
}

export default PostAd;