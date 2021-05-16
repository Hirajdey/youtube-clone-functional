import firebase from 'firebase/app';

import 'firebase/auth';

const firebaseConfig = {
    apiKey: "AIzaSyCktTJ2KbMD9erlW0rSkV66FLdpyihZvRE",
    authDomain: "clone-1992.firebaseapp.com",
    projectId: "clone-1992",
    storageBucket: "clone-1992.appspot.com",
    messagingSenderId: "969411806758",
    appId: "1:969411806758:web:3fe2ba016d1342c81b88e7"
};

firebase.initializeApp(firebaseConfig)

export default firebase.auth()

//npm install firebase 