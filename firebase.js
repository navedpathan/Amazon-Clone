import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';


const firebaseConfig = {
    apiKey: "AIzaSyAB2dWEHLhMwbiehiNJHevpwuY7wAbglIg",
    authDomain: "amzn-nxtapp.firebaseapp.com",
    projectId: "amzn-nxtapp",
    storageBucket: "amzn-nxtapp.appspot.com",
    messagingSenderId: "161954521498",
    appId: "1:161954521498:web:7acd92ca5ea26190ad9a23"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const db = firebaseApp.firestore();


  // const app = firebase.initializeApp(firebaseConfig);
  // const db = getFirestore();

  export default db;