import React from 'react';
import Login from './Login';
import AdBoard from './AdBoard';

const Account = (props) => {
    let myAds = props.ads;
    myAds = myAds.filter((ad) => { return ad.username === props.currUser });
    return (
        <div>
            {/* IF LOGGEDIN where users can see their ads/acount info and edit them*/}
            {/* IF NOT LOGGEDIN show sign up stuff*/}
            {!props.isLoggedIn && <Login logUserIn={props.logUserIn} registerUser={props.registerUser}/>}
            {props.isLoggedIn && <div>
                    <AdBoard getSelectedAd={props.getSelectedAd} ads={myAds} title={"Your Ads"}/>
                    </div>
            }
        </div>
    )
}

export default Account;