<script setup>
import { useCollection } from 'vuefire'
import { collection, addDoc, updateDoc, deleteDoc, where } from 'firebase/firestore'
import { doc } from "firebase/firestore";
import { useFirestore } from 'vuefire';
import { getStorage, ref, uploadBytes, getDownloadURL } from 'firebase/storage';
import { query } from 'firebase/database';

let db = useFirestore(); 
const todos = useCollection(collection(db, 'todos'))

let contenidoNota = "";
let file = "";

let coleccion = Collection(db, 'list');
let uid = null;
const list = useCollection(query(coleccion, where("idUsuario", "==", "dvsdvsdvv")));

function altaNota(){
  const storage = getStorage();
  const storageRef = ref(storage, file.name);
  
  uploadBytes(storageRef, file).then(snapshot => {
    return getDownloadURL(snapshot.ref);
  }).then(DownloadURL => {
    console.log('URL de descarga', DownloadURL);
    const docRef = addDoc(collection(db, "todos"), {
      texto: contenidoNota,
      prioridad: "baja",
      adjunto: DownloadURL
    }).then((e) => console.log(e.id));
  });

  console.log(contenidoNota);
}

function eliminarNota(id){
  deleteDoc(doc(db, "todos", id));
}

function subirPrioridadNota(id){
  updateDoc(doc(db, "todos", id), {
    prioridad: "alta"
  });
}

function subirAdjunto(e){
    file = e.target.files[0];
}

</script>

<template>
  <div>
    <input type="text" v-model="contenidoNota">

    <label for="subirArchivo">Adjuntar Archivo</label>
    <input type="file" id="subirArchivo" multiple @change="subirAdjunto">

    <button @click="altaNota">Nueva nota</button> 

    <ul>
      <li v-for="todo in todos" :key="todo.id">
        <span>{{ todo.texto }} - {{ todo.prioridad }} - {{ todo.adjunto }}</span>
        <button @click="eliminarNota(todo.id)">Eliminar</button>
        <button @click="subirPrioridadNota(todo.id)">Subir prioridad</button>
      </li>
    </ul>
  </div>
</template>
