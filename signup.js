// signup.js
import { auth } from "./firebase-init.js";
import { createUserWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/9.22.2/firebase-auth.js";

document.querySelector('.form2 input[type="submit"]').addEventListener('click', async (event) => {
    event.preventDefault();

    const email = document.getElementById("signupEmail").value.trim();
    const password = document.getElementById("signupPassword").value.trim();
    const confirmPassword = document.getElementById("signupConfirm").value.trim();

    if (!email) {
        alert("Email is required.");
        return;
    }

    if (!password) {
        alert("Password is required.");
        return;
    }

    if (password !== confirmPassword) {
        alert("Passwords do not match.");
        return;
    }

    try {
        await createUserWithEmailAndPassword(auth, email, password);
        alert("🎉 Account created! You can now log in.");
        closeform(); // function already in index.html
    } catch (error) {
        console.error(error);
        alert("❌ Error: " + error.message);
    }
});
