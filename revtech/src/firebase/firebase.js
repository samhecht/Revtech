import firebase from "firebase/app";
import "firebase/database";
import "firebase/auth";

const config = {
  apiKey: process.env.REACT_APP_API_KEY,
  authDomain: process.env.REACT_APP_AUTH_DOMAIN,
  databaseURL: process.env.REACT_APP_DATABASE_URL,
  projectId: process.env.REACT_APP_PROJECT_ID,
  storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_MESSAGING_SENDER_ID
};

firebase.initializeApp(config);
export async function signIn({ email, pwd }) {
  await firebase
    .auth()
    .setPersistence(
        firebase.auth.Auth.Persistence.LOCAL
    );
  await firebase.auth().signInWithEmailAndPassword(email, pwd);
}

export async function signUp({ email, pwd }) {
  await firebase
    .auth()
    .setPersistence(
        firebase.auth.Auth.Persistence.LOCAL
    );
  await firebase.auth().createUserWithEmailAndPassword(email, pwd);
}

export async function signOut() {
  await firebase.auth().signOut();
  console.log("logged out")
}

export default firebase;