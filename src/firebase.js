import * as firebase from "firebase/app";
import "firebase/firestore";

const toDoConfig = {
  apiKey: "AIzaSyDPtcW_fEduKJHz6F0VxSPkLW0KJ1jZsXY",
  authDomain: "to-do-352c0.firebaseapp.com",
  databaseURL: "https://to-do-352c0.firebaseio.com",
  projectId: "to-do-352c0",
  storageBucket: "to-do-352c0.appspot.com",
  messagingSenderId: "1061199064963",
  appId: "1:1061199064963:web:7a7eb60aea281b85d450b6",
  measurementId: "G-NH315QGJKL"
};

firebase.initializeApp(toDoConfig);

export const firestore = firebase.firestore();

export default firebase;
