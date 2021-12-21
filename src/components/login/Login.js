import { Button } from '@mui/material';
import React from 'react'
import "./login.css";

// import { auth, provider } from '../../firebase';
import { auth } from './firebase';
import { signInWithPopup, GoogleAuthProvider } from 'firebase/auth'

function Login() {

    const signIn = ()=>{
        // history.push('/');
        const provider = new GoogleAuthProvider();
        signInWithPopup(auth, provider)
            .then( (res) =>{
                console.log(res);
            })
            .catch((err)=>{
                console.log(err);
            })
    }
   
    return (
        <div className="login">
            <div className="login_logo">
                <img src="https://png.pngtree.com/element_our/png_detail/20181229/vector-chat-icon-png_302635.jpg" alt="" />
                <h1>iChat</h1>
            </div>

            <Button onClick={signIn} >Sign In</Button>
        </div>
    )
};

export default Login;
