import React from 'react';
import Ad from './Ad';

const AdBoard = (props) => {
    return (
        <ul>
            {
                props.ads.map((ad, index) => {
                    console.log("the ad ", ad);
                    return <Ad key={index} ad={ad} />;
                })
            }
        </ul>
    )
}

export default AdBoard;