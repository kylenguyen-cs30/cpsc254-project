// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyCMrvvgAcAYIOa54pgh994-HUFgWx3-1dc",
    authDomain: "notess-48462.firebaseapp.com",
    projectId: "notess-48462",
    storageBucket: "notess-48462.appspot.com",
    messagingSenderId: "257451363072",
    appId: "1:257451363072:web:147c32157e293564d581e5",
    measurementId: "G-GB3FJ2DSVJ"
  };
  
  // Initialize Firebase

  const app = initializeApp(firebaseConfig);
  const analytics = getAnalytics(app);

//const form = document.getElementById('signup-form');
const form = document.getElementById('form-signup');
  form.addEventListener('submit', (event) => {
    event.preventDefault();
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    signUp(email, password);
  });



  
  function signUp() {
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
  
    auth.createUserWithEmailAndPassword(email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        console.log(user);
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorCode, errorMessage);
      });
}

  // const form = document.getElementById('signup-form');
  // form.addEventListener('submit', (event) => {
  //   event.preventDefault();
  //   const email = document.getElementById('email').value;
  //   const password = document.getElementById('password').value;
  //   signUp(email, password);
  // });

//   const form = document.getElementById('signup-form');
// form.addEventListener('submit', (event) => {
//   event.preventDefault();
//   const email = document.getElementById('email').value;
//   const password = document.getElementById('password').value;
//   signUp(email, password);
// });