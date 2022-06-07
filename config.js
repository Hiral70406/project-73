import firebase from "firebase";
require("@firebase/firestore");

const firebaseConfig = {
  apiKey: "AIzaSyAM4JYqIrbM4HHZOLVSKkGSlrD4XbGtZA0",
  authDomain: "e-cycle-682a8.firebaseapp.com",
  projectId: "e-cycle-682a8",
  storageBucket: "e-cycle-682a8.appspot.com",
  messagingSenderId: "129126715767",
  appId: "1:129126715767:web:5135bfb89f34264df39172"
};

firebase.initializeApp(firebaseConfig);

export default firebase.firestore();
