import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyBWJZwE5CB9m0VPX4d35T15tpq7uva339c",
    authDomain: "firenote-app-456af.firebaseapp.com",
    projectId: "firenote-app-456af",
    storageBucket: "firenote-app-456af.appspot.com",
    messagingSenderId: "856730540811",
    appId: "1:856730540811:web:cfd3858893074df2f5e00e",
    measurementId: "G-QVVYHN8YER"
};

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);