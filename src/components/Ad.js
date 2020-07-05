import React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

const Ad = (props) => {

    console.log("we got", props);
    return (
        <Link to={`/fullAd/${props.ad.id}`} onClick={() => props.getSelectedAd(props.ad)}>
            <div>
                <img src={props.ad.picture} alt=""/>
            </div>
            <div>
                <h3>Title: {props.ad.title}</h3>
                <p>Price: {props.ad.price}</p>
            </div>
        </Link>
    )
}

export default Ad;