import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-app.js";
import {
  getAuth,
  signInWithEmailAndPassword
} from "https://www.gstatic.com/firebasejs/10.12.2/firebase-auth.js";
import {
  getFirestore,
  doc,
  getDoc
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

const modal = document.getElementById("estadoModal");
const mensaje = document.getElementById("modalMensaje");
const continuarBtn = document.getElementById("continuarBtn");

const mostrarModal = (texto, redireccion) => {
  mensaje.textContent = texto;
  modal.style.display = "flex";
  continuarBtn.onclick = () => window.location.href = redireccion;
};

document.getElementById("loginForm").addEventListener("submit", async (e) => {
  e.preventDefault();

  const captchaResponse = grecaptcha.getResponse();
  if (!captchaResponse) {
    alert("Por favor, completa el reCAPTCHA.");
    return;
  }

  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;

  try {
    const result = await signInWithEmailAndPassword(auth, email, password);
    const uid = result.user.uid;
    const docRef = doc(db, "usuarios", uid);
    const docSnap = await getDoc(docRef);

    if (docSnap.exists()) {
      const estado = docSnap.data().estado;
      switch (estado) {
        case "aprobado":
          mostrarModal("Tu cuenta fue aprobada.", "menu.html");
          break;
        case "rechazado":
          mostrarModal("Tu cuenta fue rechazada.", "rechazado.html");
          break;
        case "eliminado":
          mostrarModal("Tu cuenta fue eliminada.", "eliminado.html");
          break;
        default:
          mostrarModal("Tu cuenta está en revisión.", "revision.html");
      }
    } else {
      alert("No se encontró información de usuario.");
    }
  } catch (error) {
    alert("Error: " + error.message);
  }
});