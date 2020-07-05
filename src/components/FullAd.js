import React from 'react';

const FullAd = (props) => {
    const {selectedAd} = props;
    return (
        <div>
            <h2>{selectedAd.title}</h2>
            <img src={selectedAd.picture} alt=""/>
            <p>{selectedAd.price}</p>
            <p>{selectedAd.description}</p>
            <p>Sold by: {selectedAd.username}</p>
            <button>buy</button>
        </div>
    )
}

export default FullAd;