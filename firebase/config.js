  // Import the functions you need from the SDKs you need

  import { initializeApp } from "https://www.gstatic.com/firebasejs/10.3.1/firebase-app.js";

  import { getAuth } from "https://www.gstatic.com/firebasejs/10.3.1/firebase-auth.js";

  import { getAnalytics } from "https://www.gstatic.com/firebasejs/10.3.1/firebase-analytics.js";

  // TODO: Add SDKs for Firebase products that you want to use

  // https://firebase.google.com/docs/web/setup#available-libraries


  // Your web app's Firebase configuration

  // For Firebase JS SDK v7.20.0 and later, measurementId is optional

  const firebaseConfig = {

    apiKey: "AIzaSyBJwRuCkFguuIG2grYAgFDnlXAPC-7f0Hg",
  
    authDomain: "spck-612c9.firebaseapp.com",
  
    projectId: "spck-612c9",
  
    storageBucket: "spck-612c9.appspot.com",
  
    messagingSenderId: "891870144644",
  
    appId: "1:891870144644:web:15f5ea22ac76328d0a7ad1",
  
    measurementId: "G-LPFFCKCTWK"
  
  };
  

  // Initialize Firebase

  const app = initializeApp(firebaseConfig);

  const analytics = getAnalytics(app);

export  const auth = getAuth(app);
