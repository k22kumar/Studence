import React from 'react';
import Ad from './Ad';

const AdBoard = (props) => {
    return (
        <div>
            {
                props.ads.map((ad, index) => {
                    return <Ad key={index} ad={ad} getSelectedAd={props.getSelectedAd}/>;
                })
            }
        </div>
    )
}

export default AdBoard;