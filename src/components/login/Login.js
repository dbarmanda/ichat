import { Button } from '@mui/material';
import React from 'react'
import "./login.css";
// import { auth, provider } from '../../firebase';

function Login() {

    

    // const signIn = ()=>{
    //     var google_provider = firebase.auth.GoogleAuthProvider();
    //     firebase.auth().signInWithPopup(google_provider)
    //         .then((re)=>{
    //             console.log(re);
    //         }) .catch((err)=>{
    //             console.log(err);
    //         })
    // }

    const signIn = ()=>{
        // history.push('/');
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
