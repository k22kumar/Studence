import React, {useState, useEffect} from 'react'
import Navigation from './components/Navigation';
import AdBoard from './components/AdBoard';
import './App.scss';

function App() {
  // state variables
  const [users,setUsers] = useState([]);
  // mock data
  let mockUsers = { 
    Kajanth : {
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
    George: {
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
    Susan: {
      password: "pass",
      itemsForSale: []
    }
  };

  // component did mount, go and update the users state
  useEffect(()=>{
    let newUsers = [];
    // gor through
    for (let user in mockUsers) {
      newUsers.push(mockUsers[user]);
    }
    setUsers(newUsers);
  }, []);

  return (
    <div className="App">
      <Navigation/>
      <AdBoard ads={users}/>
    </div>
  );
}

export default App;
