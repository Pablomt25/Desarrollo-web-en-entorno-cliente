<script setup>
  import cabecera from './components/cabecera.vue';
  import cuerpo from './components/cuerpo.vue';
  import { ref } from 'vue';

  let notas = ref([]);

  function reciboNuevaNota(nota) {
    console.log('Recibo =' + nota);
    notas.value.push(nota);
  }
</script>

<template>
  <div>
    <h1>To Do List</h1>
    <cabecera @nuevanota="reciboNuevaNota"> </cabecera>
    <h4>Tienes tareas</h4>
    <cuerpo :listanotas="notas"> </cuerpo>
  </div>
</template>
