import firebase from "firebase/app";

const firebaseConfig = {
    apiKey: "AIzaSyAB2dWEHLhMwbiehiNJHevpwuY7wAbglIg",
    authDomain: "amzn-nxtapp.firebaseapp.com",
    projectId: "amzn-nxtapp",
    storageBucket: "amzn-nxtapp.appspot.com",
    messagingSenderId: "161954521498",
    appId: "1:161954521498:web:7acd92ca5ea26190ad9a23"
  };

  const app = !firebase.apps.length
  ? firebase.initializeApp(firebaseConfig) 
  : firebase.app();

  // const app = firebase.initializeApp(firebaseConfig);
  const db = app.firestore();

  export default db;