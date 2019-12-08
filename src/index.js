import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import firebase from 'firebase';

firebase.initializeApp({
    apiKey: "AIzaSyDPIyymStGaSf_1B6k2AU8bZC1AWoML9J8",
    authDomain: "rieno-c0fd1.firebaseapp.com",
    databaseURL: "https://rieno-c0fd1.firebaseio.com",
    projectId: "rieno-c0fd1",
    storageBucket: "rieno-c0fd1.appspot.com",
    messagingSenderId: "364131985819",
    appId: "1:364131985819:web:357d336349c26359d6d93e",
    measurementId: "G-VSKSPHV45T"
})

ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
