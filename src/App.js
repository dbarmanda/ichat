import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import './App.css';
import Imessage from './components/imessage/Imessage'
import Login from './components/login/Login';
import { selectUser, login, logout } from './features/userSlice';

import {auth} from './components/login/firebase'



function App() {
  
  //import user (default: null)
  const user = useSelector(selectUser);

  const dispatch = useDispatch();

  useEffect(() => {
    auth.onAuthStateChanged(authUser => {
      if(authUser) {
        //user logged in
        dispatch(login({
          uid: authUser.uid,
          photo: authUser.photoURL,
          email: authUser.email,
          displayName: authUser.displayName
        }));
      } else {
        //user logged out
        dispatch(logout());
      }
    })
  }, []);

  return (
    //BEM naming convention
    <div className="app">

      {user? (<Imessage/>) : (  <Login/> )}
      
    </div>
  );
}

export default App;
