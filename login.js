// login.js
import { auth } from "./firebase-init.js";
import { signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/9.22.2/firebase-auth.js";
firebase.auth().signInWithEmailAndPassword(email, password)
  .then((userCredential) => {
    // Login successful
    sessionStorage.setItem("userLoggedIn", "true"); // Set flag
    window.location.href = "home.html";            // Redirect to home
  })
  .catch((error) => {
    // Handle login errors here
    alert(error.message);
  });

document.getElementById("loginForm").addEventListener("submit", async (e) => {
  e.preventDefault();

  const email    = document.getElementById("loginEmail").value.trim();
  const password = document.getElementById("loginPassword").value.trim();
  const errorBox = document.getElementById("error");

  try {
    await signInWithEmailAndPassword(auth, email, password);
    window.location.href = "home.html";
  } catch (err) {
    errorBox.textContent = "❌ " + err.message;
    errorBox.style.display = "block";
    console.error(err);
  }
});
