import * as firebase from 'firebase/app';
import 'firebase/storage';
import 'firebase/firestore'

var firebaseConfig = {
  apiKey: "AIzaSyC-FH21Ns99TTqgvxogBTJq3FKqC47paSQ",
  authDomain: "photo-gallery-37e07.firebaseapp.com",
  databaseURL: "https://photo-gallery-37e07.firebaseio.com",
  projectId: "photo-gallery-37e07",
  storageBucket: "photo-gallery-37e07.appspot.com",
  messagingSenderId: "740102157557",
  appId: "1:740102157557:web:f9d61dda9bb6454d7041bc",
  measurementId: "G-N41KNV1W7Q"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const projectStorage = firebase.storage();
const projectFireStore = firebase.firestore();
const timestamp = firebase.firestore.FieldValue.serverTimestamp;

export {projectStorage, projectFireStore, timestamp}