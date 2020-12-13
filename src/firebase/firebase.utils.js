import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';


const config = {
    apiKey: "AIzaSyBBCZt1w6i7f1uUmOrW4l97Kycd9L0c9pg",
    authDomain: "json-clothing.firebaseapp.com",
    projectId: "json-clothing",
    storageBucket: "json-clothing.appspot.com",
    messagingSenderId: "652852677179",
    appId: "1:652852677179:web:821140fdec1bba26aaaa1e"
}

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;