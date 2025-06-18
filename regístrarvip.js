import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-app.js";
import {
  getAuth,
  createUserWithEmailAndPassword
} from "https://www.gstatic.com/firebasejs/10.12.2/firebase-auth.js";
import {
  getFirestore,
  doc,
  setDoc
} from "https://www.gstatic.com/firebasejs/10.12.2/firebase-firestore.js";

const firebaseConfig = {
  apiKey: "AIzaSyB8trNcvfkXBo6eMfQc85O5J1R-s8sF-rQ",
  authDomain: "sistem-86419.firebaseapp.com",
  projectId: "sistem-86419",
  storageBucket: "sistem-86419.firebasestorage.app",
  messagingSenderId: "370404958161",
  appId: "1:370404958161:web:4502f01d9a5b71961d0af0",
  measurementId: "G-PLNZV8YC4F"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

const form = document.getElementById("registerForm");

form.addEventListener("submit", async (e) => {
  e.preventDefault();

  const captchaResponse = grecaptcha.getResponse();
  if (!captchaResponse) {
    alert("Por favor, completa el reCAPTCHA.");
    return;
  }

  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();
  const password = document.getElementById("password").value;

  try {
    const userCredential = await createUserWithEmailAndPassword(auth, email, password);
    const uid = userCredential.user.uid;

    await setDoc(doc(db, "usuarios", uid), {
      nombre: name,
      email: email,
      fechaRegistro: new Date().toLocaleString(),
      estado: "pendiente"
    });

    alert("✅ Registro exitoso. Tu cuenta está en revisión.");
    window.location.href = "login.html";
  } catch (error) {
    alert("❌ Error: " + error.message);
  }
});