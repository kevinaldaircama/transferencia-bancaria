import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-app.js";
  import { getAuth, sendPasswordResetEmail } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-auth.js";

  const firebaseConfig = {
    apiKey: "AIzaSyB8trNcvfkXBo6eMfQc85O5J1R-s8sF-rQ",
    authDomain: "sistem-86419.firebaseapp.com",
    projectId: "sistem-86419",
    storageBucket: "sistem-86419.appspot.com",
    messagingSenderId: "370404958161",
    appId: "1:370404958161:web:4502f01d9a5b71961d0af0",
    measurementId: "G-PLNZV8YC4F"
  };

  const app = initializeApp(firebaseConfig);
  const auth = getAuth(app);

  window.enviarCorreo = async () => {
    const email = document.getElementById('email').value;
    const estado = document.getElementById('estado');
    estado.textContent = "";
    estado.classList.remove("error");

    try {
      await sendPasswordResetEmail(auth, email);
      estado.textContent = "📧 Si tiene cuenta le le ha enviado un enlace para restablecer tu contraseña.";
    } catch (error) {
      estado.textContent = "⚠️ Error: " + error.message;
      estado.classList.add("error");
    }
  };