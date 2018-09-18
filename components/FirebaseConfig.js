import * as firebase from 'firebase';

var config = {
    apiKey: "AIzaSyAlCkpqr-90TII5dXhMCQBVHIIjdeijOHs",
    authDomain: "mymessengerrn.firebaseapp.com",
    databaseURL: "https://mymessengerrn.firebaseio.com",
    projectId: "mymessengerrn",
    storageBucket: "",
    messagingSenderId: "7052138113"
  };
export const firebaseConfig = firebase.initializeApp(config);