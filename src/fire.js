import firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyChJWs7vjQwg4_1g4yIlo0bS8jvDyok7Rk",
    authDomain: "reactlogin-f20db.firebaseapp.com",
    projectId: "reactlogin-f20db",
    storageBucket: "reactlogin-f20db.appspot.com",
    messagingSenderId: "965964252715",
    appId: "1:965964252715:web:573115b48d9b8f3fae4c6e"
};

// Initialize Firebase
const fire = firebase.initializeApp(firebaseConfig);
export default fire;