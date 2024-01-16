import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'
import { VueFire, VueFireAuth } from 'vuefire'
import { firebaseApp } from './firebase'

import privada from './components/privada.vue' 
import inicio from './components/inicio.vue'
import administrador from './components/administrador.vue'
import {createRouter,createWebHistory } from 'vue-router'
import { getAuth, onAuthStateChanged } from "firebase/auth";

const routes = [
  { path: '/', component: inicio },
  { path: '/privada', component: privada },
  { path: '/administrador', component: administrador },
]

const router = createRouter({
  // 4. Provide the history implementation to use. We are using the hash history for simplicity here.
  history: createWebHistory(),
  routes, // short for `routes: routes`
})

router.beforeEach((to,from) =>{
  if(to.path=="/privada" && !estasIdentificado)
    return false;
  else
  return true;
})

router.beforeEach((to,from) =>{
  if(to.path=="/administrador" && !estasIdentificado)
    return false;
  else
  return true;
})

let estasIdentificado=false;

const auth = getAuth();
onAuthStateChanged(auth, (user) => {
  if (user) {
    // User is signed in, see docs for a list of available properties
    // https://firebase.google.com/docs/reference/js/auth.user
    const uid = user.uid;
    console.log('se ha iniciado sesion');
    estasIdentificado = true;
    // ...
  } else {
    console.log('se ha cerrado sesion');
    // User is signed out
    // ...
    estasIdentificado = false;
  }
});


const app = createApp(App)
app.use(router);
app.use(VueFire, {
  // imported above but could also just be created here
  firebaseApp,
  modules: [
    // we will see other modules later on
    VueFireAuth(),
  ],
})

app.mount('#app')


