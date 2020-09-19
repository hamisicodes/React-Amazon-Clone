import firebase from 'firebase';

const firebaseConfig = {
  apiKey: "AIzaSyD0D-al_OmChL3g9ZVUv495WaOMwvcEeXA",
  authDomain: "clone-6a95a.firebaseapp.com",
  databaseURL: "https://clone-6a95a.firebaseio.com",
  projectId: "clone-6a95a",
  storageBucket: "clone-6a95a.appspot.com",
  messagingSenderId: "917476144299",
  appId: "1:917476144299:web:0aea4ed1025f15bfdeb3ee"
};

// initialize the app with firebase config
const firebaseApp = firebase.initializeApp(firebaseConfig);

// initialize the database
// firestore is the real time db in firebase
const db = firebaseApp.firestore()

const auth = firebase.auth();

export { db,auth};
