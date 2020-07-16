import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'

// Your web app's Firebase configuration
 var firebaseConfig = {
  apiKey: "AIzaSyA3GVL4mcbSsNeBOvwdr0iiwE5QmH1x9dc",
  authDomain: "silvenleaf-reactfirebaseapp.firebaseapp.com",
  databaseURL: "https://silvenleaf-reactfirebaseapp.firebaseio.com",
  projectId: "silvenleaf-reactfirebaseapp",
  storageBucket: "silvenleaf-reactfirebaseapp.appspot.com",
  messagingSenderId: "228804134327",
  appId: "1:228804134327:web:e7c754ed24960721f05432",
  measurementId: "G-TMJ3JFRM8N"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

// firebase.firestore().settings({ timestampsInSnapshots: true })

export default firebase;