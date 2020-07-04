import React, {useState, useEffect} from 'react'
import {BrowserRouter as Router, Route, Link} from 'react-router-dom';
import Navigation from './components/Navigation';
import AdBoard from './components/AdBoard';
import Account from './components/Account';
import PostAd from './components/PostAd';
import firebase from './components/firebase';
import './App.scss';

function App() {
  // state variables
  const [ads,setAds] = useState([]);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [currUser, setCurrUser] =useState("");
  

  // mock data
  let mockUsers = [ 
     {
      username: "Kajanth",
      password: "pass",
      itemsForSale: [
        {
          name: 'pencil',
          price: 40,
          picture: 'picture',
          description: 'alkjdflas jdfkasdj fl adf'
        },
        {
          name: 'eraser',
          price: 20,
          picture: 'picture',
          description: 'alk afds asd fakasdj fl adf'
        },
      ]
    },
  {
        username: "George",
        password: "pass",
        itemsForSale: [
          {
            name: 'zoo trip',
            price: 40,
            picture: 'picture',
            description: 'alkjdflas jdfkasdj fl adf'
          },
          {
            name: 'eraser',
            price: 30,
            picture: 'https://en.wikipedia.org/wiki/Eraser#/media/File:Office-pink-erasers.jpg',
            description: 'alk afds asd fakasdj fl adf'
          },
        ]
    },
    {
      username: "Susan",
      password: "pass",
      itemsForSale: []
    }
  ];

  // component did mount, add a listener to Firebase database and listen for changes on ads
  useEffect(()=>{
    const dbRef = firebase.database().ref();
    dbRef.on("value", (snapshot) => {
      const data = snapshot.val().itemsForSale;
      // console.log(data['users']);
      const updatedAds = [];
      for(let key in data) {
        console.log(data[key]);
        updatedAds.push(data[key]);
      };
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
          console.log("user attempt: ", data[key].username, username);
          console.log("pass attempt: ", data[key].password, password);
          return true;
        }
        else {
          console.log("fail");
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
        console.log(data[key].username);
        // since ther is no ignoreCase method in javaScript use upper instead 
        if (username.toUpperCase() === data[key].username.toUpperCase()) {
          usernameTaken = true;
          console.log("comparing: " + username.toUpperCase() + " " + data[key].username.toUpperCase());
          console.log("username is taken!!");
          break;
        }
        console.log(usernameTaken);
      }
      console.log("final", usernameTaken);
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
  const postAd = (title, price, picture, description, e) => {
    e.preventDefault();
    let newAd = {};
    const dbRef = firebase.database().ref().once('value', (snapshot) => {
      const data = snapshot.val().itemsForSale;
      console.log("len", Object.keys(data).length);
    
    newAd = {
      id: Object.keys(data).length + 1,
      username: currUser,
      title: title,
      price: price,
      picture: picture,
      description: description
    }
    console.log(newAd);
    });
    const itemsForSale = firebase.database().ref('itemsForSale/');
    itemsForSale.push(newAd);
  }

  return (
    <Router>
      <div className="App">
        <Navigation/>
        <Route exact path='/' render={(props) => <AdBoard  ads={ads}/>}/>
        <Route path="/account" render={(props) => <Account isLoggedIn={isLoggedIn} logUserIn={logUserIn} registerUser={registerUser}/>}/>
        <Route path="/postAd" render={(props) => <PostAd isLoggedIn={isLoggedIn} logUserIn={logUserIn} registerUser={registerUser} postAd={postAd}/>} />
      </div>
    </Router>  
  );
}

export default App;
