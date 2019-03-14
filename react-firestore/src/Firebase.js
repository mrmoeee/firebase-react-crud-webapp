import * as firebase from 'firebase';
// import firestore from 'firebase/firestore';

const settings = {timestampsInSnapshots: true}

const config = {
  apiKey: "AIzaSyDgEUWmowWSmwqIqZmgxbhL_bdpeT4R1A4",
  authDomain: "react-crud-cbfd4.firebaseapp.com",
  databaseURL: "https://react-crud-cbfd4.firebaseio.com",
  projectId: "react-crud-cbfd4",
  storageBucket: "react-crud-cbfd4.appspot.com",
  messagingSenderId: "881668539111"
};
firebase.initializeApp(config);

firebase.firestore().settings(settings);

export default firebase;