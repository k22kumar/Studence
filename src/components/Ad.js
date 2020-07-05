import React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

const Ad = (props) => {
    return (
        <Link to={`/fullAd/${props.ad.id}`} onClick={() => props.getSelectedAd(props.ad)}>
            <div>
                {
                    // if ther is no pic than put default no image available
                    props.ad.picture === "" ?
                    <img src={require("../assets/noImageAvailable.jpg")} alt={props.ad.title} /> :
                    <img src={props.ad.picture} alt={props.ad.title} />
                }
            </div>
            <div>
                <h3>Title: {props.ad.title}</h3>
                <p>Price: ${props.ad.price}</p>
            </div>
        </Link>
    )
}

export default Ad;