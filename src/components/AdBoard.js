import React from 'react';
import Ad from './Ad';

const AdBoard = (props) => {
    return (
        <ul>
        {console.log(props.ads)}
            {
                forEach thing in props.ad {
                    return <Ad />
                }
                
            }
        </ul>
    )
}

export default AdBoard;