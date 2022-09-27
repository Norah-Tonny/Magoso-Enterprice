// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAjXNdWBApGM6tDb0MF21-f8kJXB_1ddc0",
  authDomain: "magoso-enterprice.firebaseapp.com",
  projectId: "magoso-enterprice",
  storageBucket: "magoso-enterprice.appspot.com",
  messagingSenderId: "61432889396",
  appId: "1:61432889396:web:b7cf3502fce7441ef7ca61",
  measurementId: "G-JEL0GGZMQ3"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);