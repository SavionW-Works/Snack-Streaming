import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';

const app  = firebase.initializeApp( {
    apiKey: "AIzaSyBXk1upTAb6p0AiMD2sscDyY56C2SVE0k0",
    authDomain: "snack-streaming.firebaseapp.com",
    projectId: "snack-streaming",
    storageBucket: "snack-streaming.appspot.com",
    messagingSenderId: "465720188089",
    appId: "1:465720188089:web:04b1abe39f767f77310f68",
    measurementId: "G-EGVPZPQ0DS"
  })


  export const auth = app.auth()
  export default app
