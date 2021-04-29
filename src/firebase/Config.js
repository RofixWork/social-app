import firebase from "firebase";
const firebaseConfig = {
  apiKey: "AIzaSyA4DSSDpwwCi1zeuZecz3F3mDP3bVxSiFA",
  authDomain: "social-ef1f4.firebaseapp.com",
  projectId: "social-ef1f4",
  storageBucket: "social-ef1f4.appspot.com",
  messagingSenderId: "548307215097",
  appId: "1:548307215097:web:7510be693e9a5d702b7828",
};

firebase.initializeApp(firebaseConfig);
const auth = firebase.auth();
const db = firebase.firestore();
const storage = firebase.storage();
export { auth, db, storage };
