
    import React, { useContext, useState } from 'react';
    import firebase from "firebase/app";
    import "firebase/auth";
    import firebaseConfig from './firebaseConfig';
    // import { UserContext } from '../../App';
    // import { useHistory, useLocation } from 'react-router';
   import './Login.css'


    if (!firebase.apps.length) {
        firebase.initializeApp(firebaseConfig);
    }else {
        firebase.app(); // if already initialized, use that one
    }
    const Login = () => {
        
        const [user, setUser] = useState({
            isSignedIn: false,
            name: '',
            email: '',
            password: '',
            photo: '',
        })
        
        const provider = new firebase.auth.GoogleAuthProvider();
        const handleGoogleSignIn =() =>{
            firebase.auth()
        .signInWithPopup(provider)
        .then((result) => {
            var credential = result.credential;
            var token = credential.accessToken;
            var user = result.user;
            console.log(user);
            setUser(user);
        }).catch((error) => {
            var errorCode = error.code;
            var errorMessage = error.message;
            var email = error.email;
            var credential = error.credential;
            console.log(errorCode, errorMessage,email);
        });
        
        }

        const handleChange = (e) => {
            console.log(e.target.name, e.target.value );

            let isFieldValid = true;
            if (e.target.name === 'email'){
            isFieldValid = /\S+@\S+\.\S+/.test(e.target.value);
    
            }
            if(e.target.name === 'password'){
            const isPasswordValid = e.target.value.length > 6;
            //   console.log(isPasswordValid);
            const passwordHasNumber = /\d{1}/.test(e.target.value);
            isFieldValid = isPasswordValid && passwordHasNumber;
            }
            if (isFieldValid){
            const newUserInfo = {...user};
            newUserInfo[e.target.name] = e.target.value;
            newUserInfo[e.target.email] =e.target.value;
            newUserInfo[e.target.password]= e.target.value;
            setUser(newUserInfo);
            }

            
        }

        const handleSubmit =(e) =>{
    // console.log(user.email, user.password);
    if (user.email && user.password){
        firebase.auth().createUserWithEmailAndPassword(user.email, user.password)
        .then(res => {
        // Signed in 
        const newUserInfo ={...user};
        newUserInfo.error ='';
        console.log(res);
        setUser(newUserInfo);
        // ...
        })
        .catch((error) => {
        const newUserInfo ={...user};
        newUserInfo.error =error.message;
        setUser(newUserInfo);
        // ..
        });    

    }
    e.preventDefault()
        }
        
        return (
            <div className="text-center">
            
                <h1> Log In:</h1>
                <div className="form-section">
                <form  onSubmit={handleSubmit} >
                <input  name="name" type="text" onBlur={handleChange}  style={{width:'300px'}} placeholder="your name" required/>
            
            <br />
        <input  type="text" name="email"onBlur={handleChange} style={{width:'300px'}} placeholder="Your Email Address" required/>

        <br/>
        <input  type="password" name="password" onBlur={handleChange} style={{width:'300px'}} placeholder="Your Password" required/>
    
        <br />
        
        <br/>
        <button type="submit" value="Submit" style={{ backgroundColor: 'orange',border:'none',width:'300px'}} > LogIn </button>
        
        <br />
        <p>Or</p>
        <button  className= "signIn" onClick={handleGoogleSignIn} style={{ backgroundColor: 'orange',border:'none',width:'300px'}}> Sign In Using Google </button>
                </form>
                </div>
            <p style={{color :'red'}}>{user.error}</p>
            </div>
        );
    };

    export default Login;