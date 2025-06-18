// Importar Firebase desde CDN
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-app.js";
import { getAuth, onAuthStateChanged } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-auth.js";

// Tu configuración de Firebase (reemplaza con tus datos)
const firebaseConfig = {
  apiKey: "AIzaSyB8trNcvfkXBo6eMfQc85O5J1R-s8sF-rQ",
      authDomain: "sistem-86419.firebaseapp.com",
      projectId: "sistem-86419",
      storageBucket: "sistem-86419.firebasestorage.app",
      messagingSenderId: "370404958161",
      appId: "1:370404958161:web:4502f01d9a5b71961d0af0",
      measurementId: "G-PLNZV8YC4F"
    };

// Inicializar Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

// Verificar sesión
onAuthStateChanged(auth, (user) => {
  if (user) {
    // Mostrar contenido si hay sesión
    document.getElementById("content").style.display = "block";
  } else {
    // Redirigir si no hay sesión
    window.location.href = "loginvip.html";
  }
});