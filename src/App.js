import React, {useState, useEffect} from 'react';
import './App.css';
import fire from './fire';
import { Login } from './Login';
import Home from './Home';
function App() {
  const [user, setUser] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [emailError, setemailError] = useState("");
  const [passwordError, setpasswordError] = useState("");
  const [hasAccount, sethasAccount] = useState(false);
  

  const clearInputs =() =>{
    setEmail("");
    setPassword("");
  }
  const clearError = () =>{
    setemailError("");
    setpasswordError("");
  }
  const handlelogin = () =>{
    clearError();
    fire
      .auth()
      .signInWithEmailAndPassword(email,password)
      .catch((err) =>{
        switch (err.code){
          case "auth/invalid-email":
          case "auth/user-disabled":
          case "auth/user-not-defined":
            setemailError(err.message);
            break;
          case "auth/wrong-password":
            setpasswordError(err.message);
        }
      });
  }
  const handleSignup =() => {
    clearError();
    fire
      .auth()
      .createUserWithEmailAndPassword(email,password)
      .catch((err) =>{
        switch (err.code){
          case "auth/email-already-in-use":
          case "auth/invalid-email":
            setemailError(err.message);
            break;
          case "auth/weak-password":
            setpasswordError(err.message);
        }
      });
  }
  const handlelogout = () =>{
    fire.auth().signOut();
  }
  const authListener =() =>{
    fire.auth().onAuthStateChanged((user) =>{
      if(user){
        clearInputs();
        setUser(user);
      }
      else{
        setUser("");
      }
    })
  }
  useEffect(() => {
    authListener();
  }, [])
  return (
    <div className="App">
      {user ? (
        <Home handlelogout = {handlelogout} email = {email}/>
      ): (
        <Login 
        email = {email}
        setEmail = {setEmail}
        password = {password}
        setPassword = {setPassword}
        handlelogin = {handlelogin}
        handleSignup = {handleSignup}
        hasAccount = {hasAccount}
        sethasAccount = {sethasAccount}
        emailError = {emailError}
        passwordError = {passwordError}
      />
      )}
     
    </div>
    
  );
}

export default App;
