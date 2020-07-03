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
  const [users,setUsers] = useState([]);
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

  // component did mount, go and update the users state
  useEffect(()=>{
    let newUsers = [];
    console.log("use", mockUsers)
    // gor through
    for (let user in mockUsers) {
      newUsers.push(mockUsers[user]);
    }
    setUsers(newUsers);

    const dbRef = firebase.database().ref();
    dbRef.on("value", (snapshot) => {
      const data = snapshot.val();
      // console.log(data['users']);
    });
  }, []);

  //function to verify login
  const logUserIn = (username, password) => {
    users.map((user) => {
      if(username === user.username && password === user.password){
        setCurrUser(username);
        setIsLoggedIn(true);
        console.log("user attempt: ", user.username, username);
        console.log("pass attempt: ", user.password, password);
        return true;
      }
      else{
        console.log("fail");
      }
    });
  }

  // function that allows a user to post an ad
  const postAd = (title, price, picture, description) => {
    users.map((user) => {
      if(user.username === currUser) {
        console.log(user.itemsForSale);
        // logic to post ad here
        return true;
      }
    })
  }

  // function to register new users with unique usernames
  const registerUser = (username, password, e) => {
    e.preventDefault();
    let usernameTaken = false;
    const dbRef = firebase.database().ref().once('value').then( (snapshot) => {
      const data = snapshot.val();
      for(let key in users) {
        // since ther is no ignoreCase method in javaScript use upper instead 
        if (username.toUpperCase() === users[key].username.toUpperCase()){
          usernameTaken=true;
          console.log("comparing: " + username.toUpperCase() + " " + users[key].username.toUpperCase());
          console.log("username is taken!!");
          break;
        }
      }
      if(!usernameTaken){
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

  return (
    <Router>
      <div className="App">
        <Navigation/>
        <Route exact path='/' render={(props) => <AdBoard  ads={users}/>}/>
        <Route path="/account" render={(props) => <Account isLoggedIn={isLoggedIn} logUserIn={logUserIn} registerUser={registerUser}/>}/>
        <Route path="/postAd" render={(props) => <PostAd isLoggedIn={isLoggedIn} logUserIn={logUserIn} registerUser={registerUser} postAd={postAd}/>} />
      </div>
    </Router>  
  );
}

export default App;
