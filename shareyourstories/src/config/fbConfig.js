import firebase from 'firebase/app';
import 'firebase/firestore'
import 'firebase/auth'

var firebaseConfig = {
  apiKey: "AIzaSyAlyNyTRUYUCUWpcjLEsKXLI9upt6i1zG0",
  authDomain: "silvenleaf-shareyourstories.firebaseapp.com",
  databaseURL: "https://silvenleaf-shareyourstories.firebaseio.com",
  projectId: "silvenleaf-shareyourstories",
  storageBucket: "silvenleaf-shareyourstories.appspot.com",
  messagingSenderId: "84463940250",
  appId: "1:84463940250:web:a66c2fbfee23ed4bb4e523",
  measurementId: "G-6JEKVVKJ6G"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

firebase.firestore().settings({
  timestampsInSnapshots: true
});

export default firebase

