import Rebase from 're-base';
import firebase from 'firebase';


const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyDMQzw-h5bzFSeXtA_Q5z347U7rp6mv0Yo",
    authDomain: "catch-of-the-day-7dace.firebaseapp.com",
    databaseURL: "https://catch-of-the-day-7dace.firebaseio.com",
  });

  const base = Rebase.createClass(firebaseApp.database());

  // This is a named export
  export { firebaseApp };

  // This is a default export
  export default base;