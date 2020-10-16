import firebase from 'firebase';

const firebaseConfig = {
  apiKey: "AIzaSyAWzt8WflJ1mA1X6EnRC_SMTk1uiy5XI7E",
  authDomain: "twitter-clone-90830.firebaseapp.com",
  databaseURL: "https://twitter-clone-90830.firebaseio.com",
  projectId: "twitter-clone-90830",
  storageBucket: "twitter-clone-90830.appspot.com",
  messagingSenderId: "961645438607",
  appId: "1:961645438607:web:e82d1ad973b0205d5ef2fa",
  measurementId: "G-K8T402LQHB",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();

export default db;
