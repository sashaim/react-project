// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore";


// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyCErqmBtqZqRLmywbOSDbclt1kB-S3zRHI",
    authDomain: "backend-react-proyect.firebaseapp.com",
    projectId: "backend-react-proyect",
    storageBucket: "backend-react-proyect.appspot.com",
    messagingSenderId: "162825432811",
    appId: "1:162825432811:web:24c3dde7d31f1a6c0dd8ae"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);