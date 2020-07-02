import React, {useState, useEffect} from 'react'
import {BrowserRouter as Router, Route, Link} from 'react-router-dom';
import Navigation from './components/Navigation';
import AdBoard from './components/AdBoard';
import Account from './components/Account';
import './App.scss';

function App() {
  // state variables
  const [users,setUsers] = useState([]);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
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
  }, []);

  //function to verify login
  const logUserIn = (username, password) => {
    users.map((user) => {
      if(username === user.username && password === user.password){
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

  return (
    <Router>
      <div className="App">
        <Navigation/>
        <Route exact path='/' render={(props) => <AdBoard  ads={users}/>}/>
        <Route path="/account" render={(props) => <Account isLoggedIn={isLoggedIn} logUserIn={logUserIn}/>}/>
      </div>
    </Router>  
  );
}

export default App;
