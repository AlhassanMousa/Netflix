import firebase from "firebase";


const firebaseConfig = {
    apiKey: "AIzaSyAhz2SQl0fQbtWIzP3aq5S5f-4MllyVX8w",
    authDomain: "xoshelf.firebaseapp.com",
    projectId: "xoshelf",
    storageBucket: "xoshelf.appspot.com",
    messagingSenderId: "821990135557",
    appId: "1:821990135557:web:a027051302472bd210096c",
    measurementId: "G-VEJ6L6H7C5"
};

firebase.initializeApp(firebaseConfig);
const storage = firebase.storage();
export default storage;