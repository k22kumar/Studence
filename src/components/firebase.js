import firebase from 'firebase/app';
import "firebase/database";

const firebaseConfig = {
    apiKey: "AIzaSyCmJo2qZ6oG27sE46q7bTwshnyUAEJwTdg",
    authDomain: "studence-61105.firebaseapp.com",
    databaseURL: "https://studence-61105.firebaseio.com",
    projectId: "studence-61105",
    storageBucket: "studence-61105.appspot.com",
    messagingSenderId: "625737292006",
    appId: "1:625737292006:web:8dbc42e7b45e9abcb5c327"
}

  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

export default firebase;