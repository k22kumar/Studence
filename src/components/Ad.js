import React from 'react';

const Ad = (props) => {
    console.log("we got", props);
    return (
        <ul>
            <li>
                <img src={props.ad.picture} alt=""/>
            </li>
            <li>
                <h3>Title: {props.ad.title}</h3>
                <p>Price: {props.ad.price}</p>
            </li>
        </ul>
    )
}

export default Ad;