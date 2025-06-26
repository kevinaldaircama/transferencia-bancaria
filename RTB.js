import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-app.js";
  import { getAuth, sendPasswordResetEmail } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-auth.js";

  const firebaseConfig = {
    apiKey: "AIzaSyBMw3Zbb-rcXoOXlT1U-WWN1N4L4bk1aCk",
      authDomain: "sistema-27b31.firebaseapp.com",
      projectId: "sistema-27b31",
      storageBucket: "sistema-27b31.appspot.com",
      messagingSenderId: "32031316083",
      appId: "1:32031316083:web:32cef8736c5a77fbb9f206",
      measurementId: "G-JSXX8PF8BC"
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
