function sendEmail(event) {
    event.preventDefault();

    const form = document.getElementById("contact-form");
    const button = form.querySelector("button");

    button.disabled = true;
    button.textContent = "Sending...";

    const SERVICE_ID = "service_moy734x";
    const TEMPLATE_ID = "template_tk5s0s8";
    const PUBLIC_KEY = "6CSR1CAXwOHcVmcbZ";

    emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, "#contact-form", PUBLIC_KEY)
        .then(() => {
            showPopup("Message sent successfully!", true);
            document.getElementById("contact-form").reset();
        })
        .catch((error) => {
            console.error("EmailJS Error:", error);
            showPopup("Failed to send message, Please try again!", false);
    })
    .finally(() => {
            button.disabled = false;
            button.textContent = "Send";
        });
}

function showPopup(message, success = true) {
    const popup = document.getElementById("popup");
    popup.textContent = message;
    popup.className = success ? "popup success" : "popup error";
    popup.style.display = "block";

    setTimeout(() => {
        popup.style.display = "none";
    }, 4000);
}

document.addEventListener("DOMContentLoaded", () => {
    const form = document.getElementById("contact-form");
    if (form) {
        form.addEventListener("submit", sendEmail);
    }
});
