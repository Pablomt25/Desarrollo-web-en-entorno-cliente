<script setup>
import { ref } from 'vue';
import { getAuth } from 'firebase/auth';
import { signInWithPopup, GoogleAuthProvider, FacebookAuthProvider } from 'firebase/auth';
import { signOut } from 'firebase/auth';

const auth = getAuth();
const usuario = ref(null);

function iniciaSesion() {
  const provider = new GoogleAuthProvider();
  signInWithPopup(auth, provider)
    .then((result) => {
      const user = result.user;
      usuario.value = user.displayName; 
    })
    .catch((error) => {
      console.error('Error al iniciar sesión:', error.message);
    });
}

function iniciaSesionFacebook() {
  const provider2 = new FacebookAuthProvider();
  signInWithPopup(auth, provider2)
    .then((result) => {
      const user = result.user;
      usuario.value = user.displayName;
    })
    .catch((error) => {
      console.error('Error al iniciar sesión:', error.message);
    });
}

function cerrarSesion() {
  signOut(auth)
    .then(() => {
      usuario.value = null; 
    })
    .catch((error) => {
      console.error('Error al cerrar sesión:', error.message);
    });
}
</script>

<template>
  <div>
    <p v-if="usuario">¡Bienvenido, {{ usuario }}!</p>
    <p v-else>PÁGINA DE INICIO</p>
    <button @click="iniciaSesion"><img src="../assets/google.jpg" alt=""></button>
    <button @click="iniciaSesionFacebook"><img src="../assets/facebook.png" alt=""></button>
    <button @click="cerrarSesion">Cerrar sesión</button>
  </div>
</template>
