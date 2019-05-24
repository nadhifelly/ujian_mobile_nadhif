import firebase from 'firebase'

var firebaseConfig = {
  apiKey: "AIzaSyDn3L3ZfhzOsMfyCnbWIpYKCkB_mhlNPVU",
    authDomain: "nadhif-mobile.firebaseapp.com",
    databaseURL: "https://nadhif-mobile.firebaseio.com",
    projectId: "nadhif-mobile",
    storageBucket: "nadhif-mobile.appspot.com",
    messagingSenderId: "593606528984",
    appId: "1:593606528984:web:e584cc5e2f4de9d6"

};
  // Initialize Firebase
  export const Fire = firebase.initializeApp(firebaseConfig);