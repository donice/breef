// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBC3lcRKoa0PTIDvNXJ57m0AEXaJuJzpAA",
  authDomain: "breef-01.firebaseapp.com",
  projectId: "breef-01",
  storageBucket: "breef-01.appspot.com",
  messagingSenderId: "623727083475",
  appId: "1:623727083475:web:c03ed02237f2c40a31f926",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);
// export default app;

export default app;
