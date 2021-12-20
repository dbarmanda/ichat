import { initializeApp } from "firebase/app";
// import { getAuth } from "firebase/auth"

// import firebase from "firebase"

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

// firebaseApp.initializeApp(firebaseConfig);
// firebase.initializeApp(firebasecConfig);

        // const auth = getAuth(firebaseApp);
const auth = firebaseApp.auth();
const db = firebaseApp.firestore();

// //magic happens
const provider = new firebaseApp.auth.GoogleAuthProvider();

//explicit export
export { auth, provider };
// export default db;
