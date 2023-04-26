// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
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


// chatgpt

  
  //firebase.initializeApp(firebaseConfig);
  
  // Get a reference to the authentication service
  var auth = firebase.auth();
  
  // Attach an event listener to the login form
  var form = document.querySelector('.form-signin');
  form.addEventListener('submit', function(e) {
    e.preventDefault();
  
    // Get the user's email and password from the form
    var email = form.user_name.value;
    var password = form.password.value;
  
    // Sign in the user with Firebase Authentication
    auth.signInWithEmailAndPassword(email, password)
      .then(function(user) {
        // Redirect the user to the home page
        window.location.href = "home.html";
      })
      .catch(function(error) {
        // Display an error message to the user
        var errorMessage = error.message;
        alert(errorMessage);
      });
  });
  