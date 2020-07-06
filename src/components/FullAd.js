import React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

const FullAd = (props) => {
    const {selectedAd} = props;

    return (
        <ul className="flexParent flexColumn fullAdContainer">
            <li className="poster" id="poster">
                <h2>{selectedAd.title}</h2>
                <div className="posterImg">
                    {
                        // if ther is no pic than put default no image available
                        selectedAd.picture === "" ?
                            <img src={require("../assets/noImageAvailable.jpg")} alt={selectedAd.title} /> :
                            <img src={selectedAd.picture} alt={selectedAd.title} />
                    }
                </div>
                <p className="price">${selectedAd.price}</p>
                <p>{selectedAd.description}</p>
                <p>Sold by: {selectedAd.username}</p>
            </li>
            <li>
                <button className="siteButton" onClick={() => props.addToCart(selectedAd)}>Add to Cart</button>
                <Link className="siteButton buy" to={`/cart`} onClick={() => props.addToCart(selectedAd)}>Buy</Link>
            </li>
            <li>
                <button className="siteButton" onClick={() => props.download()}>Download Poster</button>
            </li>
        </ul>
    )
}

export default FullAd;