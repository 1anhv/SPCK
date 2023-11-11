import { auth } from "./config.js";
import { onAuthStateChanged } from "https://www.gstatic.com/firebasejs/10.3.1/firebase-auth.js";
loginBtn = document.getElementById("login")
regBtn = document.getElementById("register")
onAuthStateChanged(auth, (user) => {
    if (user) {
        loginBtn.textContent = "";
        regBtn.textContent = "";
    }
  });