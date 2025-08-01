// login.js
import { auth } from "./firebase-init.js";
import { signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/9.22.2/firebase-auth.js";

document.getElementById("loginForm").addEventListener("submit", async (e) => {
  e.preventDefault();

  const email    = document.getElementById("loginEmail").value.trim();
  const password = document.getElementById("loginPassword").value.trim();
  const errorBox = document.getElementById("error");

  try {
    await signInWithEmailAndPassword(auth, email, password);

    // Set sessionStorage flag AFTER successful login
    sessionStorage.setItem("userLoggedIn", "true");

    // Redirect to home page
    window.location.href = "home.html";
  } catch (err) {
    errorBox.textContent = "❌ " + err.message;
    errorBox.style.display = "block";
    console.error(err);
  }
});
