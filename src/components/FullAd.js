import React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

const FullAd = (props) => {
    const {selectedAd} = props;

    return (
        <div>
            <h2>{selectedAd.title}</h2>
            {
                // if ther is no pic than put default no image available
                selectedAd.picture === "" ?
                    <img src={require("../assets/noImageAvailable.jpg")} alt={selectedAd.title} /> :
                    <img src={selectedAd.picture} alt={selectedAd.title} />
            }
            <p>{selectedAd.price}</p>
            <p>{selectedAd.description}</p>
            <p>Sold by: {selectedAd.username}</p>
            <div>
                <button onClick={() => props.addToCart(selectedAd)}>Add to Cart</button>
                <Link to={`/cart`} onClick={() => props.addToCart(selectedAd)}>Buy</Link>
            </div>
        </div>
    )
}

export default FullAd;