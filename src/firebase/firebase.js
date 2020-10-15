// const firebase = require('firebase');
import firebase from 'firebase/app'
import 'firebase/database'
// import  moment from 'moment';
//! The configuration setup
//! =======================

const firebaseConfig = {
    apiKey: "AIzaSyC2FbkSul47yxoErUCi6PHTJgGM03aiwqg",
    authDomain: "expensify-app-2d510.firebaseapp.com",
    databaseURL: "https://expensify-app-2d510.firebaseio.com",
    projectId: "expensify-app-2d510",
    storageBucket: "expensify-app-2d510.appspot.com",
    messagingSenderId: "883160945185",
    appId: "1:883160945185:web:79c1b2460e1e2b382c4960",
    measurementId: "G-H26Q9J4ZBY"
};

firebase.initializeApp(firebaseConfig)
const database = firebase.database()

export {database as default, firebase}
