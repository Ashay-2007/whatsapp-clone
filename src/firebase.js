import firebase from "firebase";
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
//GET Below Settings from Firebase > Project Overview > Settings > General > Your apps > Firebase SDK snippet > Config
const firebaseConfig = {
    apiKey: "AIzaSyCUhWzhnsIGSD7oTKQJ3tjpD0KZYjJTxWI",
    authDomain: "whatsapp-clone-820ae.firebaseapp.com",
    projectId: "whatsapp-clone-820ae",
    storageBucket: "whatsapp-clone-820ae.appspot.com",
    messagingSenderId: "895360926404",
    appId: "1:895360926404:web:f4d28c05eca9ccecf7ff91",
    measurementId: "G-TJKZDP4NWF"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const db = firebaseApp.firestore(); 
  const auth = firebaseApp.auth();
  const provider = new firebase.auth.GoogleAuthProvider();

  export {auth,provider};
  export default db;