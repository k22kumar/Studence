import React, {useState, useEffect} from 'react'
import {BrowserRouter as Router, Route, Link} from 'react-router-dom';
import Navigation from './components/Navigation';
import AdBoard from './components/AdBoard';
import Account from './components/Account';
import PostAd from './components/PostAd';
import firebase from './components/firebase';
import FullAd from './components/FullAd';
import Cart from './components/Cart';
import './App.scss';

function App() {
  // state variables
  // all posted ads on database
  const [ads,setAds] = useState([]);
  // boolean check on whether user is logged in
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  // grab username of current user
  const [currUser, setCurrUser] = useState("");
  // the ad that has been clicked on
  const [selectedAd, setSelectedAd] = useState({});
  // the cart of the currentUser
  const [cart, setCart] = useState([]);
  

  // component did mount, add a listener to Firebase database and listen for changes on ads
  useEffect(()=>{
    const dbRef = firebase.database().ref();
    dbRef.on("value", (snapshot) => {
      const data = snapshot.val().itemsForSale;
      const updatedAds = [];
      for(let key in data) {
        updatedAds.push(data[key]);
      };
      // sort by latest posted ad
      updatedAds.sort((a, b) => b.id - a.id);
      setAds(updatedAds);
    });
  }, []);

  //function to verify login
  const logUserIn = (username, password) => {
    const dbRef = firebase.database().ref().once('value', (snapshot) => {
      // in the data go to the users key
      const data = snapshot.val().users;
      for (let key in data) {
        if (username === data[key].username && password === data[key].password) {
          setCurrUser(username);
          setIsLoggedIn(true);
          return true;
        }
      }
    });
  }

  // function to register new users with unique usernames
  const registerUser = (username, password, e) => {
    e.preventDefault();
    let usernameTaken = false;
    const dbRef = firebase.database().ref().once('value', (snapshot) => {
      // in the data go to the users key
      const data = snapshot.val().users;
      for (let key in data) {
        // since ther is no ignoreCase method in javaScript use upper instead 
        if (username.toUpperCase() === data[key].username.toUpperCase()) {
          usernameTaken = true;
          break;
        }
      }
      if (usernameTaken === false) {
        const dbRef2 = firebase.database().ref('users/');
        dbRef2.push({
          username: username,
          password: password
        });
        setCurrUser(username);
        setIsLoggedIn(true);
      }
    });
  }

  // function that allows a user to post an ad
  const postAd = (title, price, picture, bigPicture, description, e) => {
    e.preventDefault();
    let newAd = {};
    const dbRef = firebase.database().ref().once('value', (snapshot) => {
    const data = snapshot.val().itemsForSale;
    newAd = {
      id: Object.keys(data).length + 1,
      username: currUser,
      title: title,
      price: price,
      picture: picture,
      bigPicture: bigPicture,
      description: description
    }
    });
    const itemsForSale = firebase.database().ref('itemsForSale/');
    itemsForSale.push(newAd);
    document.getElementById("adPost").reset();
  }

  // function that is passed to the Ad component and returns the ad the user clicked on to
  // display full information
  const getSelectedAd = (adObject) => {
    setSelectedAd(adObject);
  }

  const addToCart = (ad) => {
    let newCart = cart;
    newCart.push(ad);
    setCart(newCart);
  }

  const confirmPurchase = () => {
    setCart([]);
  }

  const download = () => {
    this.printWindow();
  }

  return (
    <Router>
      <div className="App wrapper">
        <Navigation cart={cart}/>
        <Route path='/Studence' render={() => <AdBoard getSelectedAd={getSelectedAd} title={"Listings"} ads={ads}/>}/>
        <Route path="/account" render={() => <Account getSelectedAd={getSelectedAd} isLoggedIn={isLoggedIn} logUserIn={logUserIn} registerUser={registerUser} ads={ads}
          currUser={currUser}/>}/>
        <Route path="/postAd" render={() => <PostAd isLoggedIn={isLoggedIn} logUserIn={logUserIn} registerUser={registerUser} postAd={postAd}/>} />
        <Route path="/fullAd/:id" render={() => <FullAd download={download} addToCart={addToCart} selectedAd={selectedAd} />} />
        <Route path="/cart/" render={() => <Cart cart={cart} confirmPurchase={confirmPurchase} />} />
      </div>
    </Router>  
  );
}

export default App;
