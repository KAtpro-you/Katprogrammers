// forgot-password.js (modular)
import { auth } from './firebase-init.js';
import { sendPasswordResetEmail } from 'https://www.gstatic.com/firebasejs/9.22.2/firebase-auth.js';

document.getElementById("forgotPwdLink").addEventListener("click", function (e) {
    e.preventDefault();
    document.getElementById("forgotMsg").style.display = "none";
    document.getElementById("forgotEmail").value = "";
    document.getElementById("forgotBox").style.display = "block";
});

document.getElementById("closeForgot").addEventListener("click", function (e) {
    e.preventDefault();
    document.getElementById("forgotBox").style.display = "none";
});

document.getElementById("sendReset").addEventListener("click", async () => {
    const email = document.getElementById("forgotEmail").value.trim();
    const msg = document.getElementById("forgotMsg");
    msg.style.display = "block";

    if (email === "") {
        msg.textContent = "Email can’t be empty.";
        msg.style.color = "#ff6961";
        return;
    }

    try {
        await sendPasswordResetEmail(auth, email);
        console.log("Password reset email sent to", email);
        msg.textContent = "Reset link sent! Check your inbox or spam folder.";
        msg.style.color = "#76ff7a";
    } catch (err) {
        console.error("Reset error:", err);
        msg.textContent = err.message;
        msg.style.color = "#ff6961";
    }
});
