// Import the functions you need from the SDKs you need
import firebase from "firebase/app";
import "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA6nj2RG5AnCCKeyNx-KHudzIdP4xkLcUo",
  authDomain: "carros-react-img.firebaseapp.com",
  projectId: "carros-react-img",
  storageBucket: "carros-react-img.appspot.com",
  messagingSenderId: "1059727449123",
  appId: "1:1059727449123:web:dda6bda4b646ef25e1a596",
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
export { firebase };
