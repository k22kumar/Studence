import React from 'react';
import Ad from './Ad';

const AdBoard = (props) => {
    return (
        <div className="flexParent flexColumn adBoard">
            <h2>Listings</h2>
            {
                props.ads.map((ad, index) => {
                    return <Ad key={index} ad={ad} getSelectedAd={props.getSelectedAd}/>;
                })
            }
        </div>
    )
}

export default AdBoard;