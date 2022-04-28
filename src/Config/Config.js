import firebase from 'firebase'
import 'firebase/auth'
import 'firebase/firestore'
import 'firebase/storage'

const firebaseConfig = {
  apiKey: "AIzaSyA73mh5avbUrsAZu65fO3GijqaVq4-w6Mk",
  authDomain: "ecommerce-1bcfa.firebaseapp.com",
  projectId: "ecommerce-1bcfa",
  storageBucket: "ecommerce-1bcfa.appspot.com",
  messagingSenderId: "742884517357",
  appId: "1:742884517357:web:e4f886407ca9a2fd7af3e4"
};

firebase.initializeApp(firebaseConfig);

const auth = firebase.auth();
const fs = firebase.firestore();
const storage = firebase.storage();

export {auth,fs,storage}