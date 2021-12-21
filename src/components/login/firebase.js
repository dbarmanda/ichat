// import firebase from "firebase";
// import { getAuth } from "firebase/auth"
import {initializeApp} from "firebase/app";
import { getAuth } from 'firebase/auth';
// import 'firebase/auth';
// import 'firebase/firestore';

// import firebase from 'firebase';


const firebaseConfig = {
  apiKey: "AIzaSyD5hWGZu_agb0tz-59J141tWLsuUS6lKco",
  authDomain: "ichat-rr.firebaseapp.com",
  projectId: "ichat-rr",
  storageBucket: "ichat-rr.appspot.com",
  messagingSenderId: "829471663763",
  appId: "1:829471663763:web:c2ad32e251710e7f744f66",
  measurementId: "G-6VZG7CCLSR",
};

const firebaseApp = initializeApp(firebaseConfig);

// const auth = firebaseA.auth();
const auth = getAuth(firebaseApp);


//explicit export
export { auth };
