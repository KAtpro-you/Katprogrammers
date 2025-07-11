// firebase-init.js  –– load this FIRST, exactly once
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.22.2/firebase-app.js";
import { getAuth }      from "https://www.gstatic.com/firebasejs/9.22.2/firebase-auth.js";

// 1️⃣  Your project config
export const firebaseConfig = {
  apiKey: "AIzaSyD-gCHlAYiX3zJiAeSSSNbQ1qhXJMHLeSQ",
  authDomain: "katprogrammers-1e30e.firebaseapp.com",
  projectId: "katprogrammers-1e30e",
  storageBucket: "katprogrammers-1e30e.appspot.com",
  messagingSenderId: "20873434906",
  appId: "1:20873434906:web:9f78f7f25768fb73f37ea3",
  measurementId: "G-9KXJPD09QZ"
};

// 2️⃣  Initialise Firebase once and export auth
const app  = initializeApp(firebaseConfig);
export const auth = getAuth(app);
