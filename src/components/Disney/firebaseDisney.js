import firebase from 'firebase/compat'

const firebaseConfig = {
  apiKey: "AIzaSyBtEDYhIdrUeZCAl88uPCj3FqMK9Yh3TDE",
  authDomain: "disneymovies-d67f4.firebaseapp.com",
  projectId: "disneymovies-d67f4",
  storageBucket: "disneymovies-d67f4.appspot.com",
  messagingSenderId: "938150094821",
  appId: "1:938150094821:web:70a6f64b50b08d6a7eb10c",
  measurementId: "G-Z69KQJ8XPG"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();
const storage = firebase.storage();

export { auth, provider, storage };
export default db;
