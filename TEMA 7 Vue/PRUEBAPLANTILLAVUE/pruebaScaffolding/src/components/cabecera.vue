<!-- cabecera.vue -->
<script setup>
  import { ref } from 'vue';
  import { defineEmits } from 'vue';

  const lanzarEvento = defineEmits(['nuevanota']);
  let nota = ref('');

  function alta() {
    lanzarEvento('nuevanota', nota.value);
    console.log(nota.value);
    nota.value = '';
  }
</script>

<template>
  <div>
    <input type="text" v-model="nota" />
    <button @click="alta">Nueva Nota</button>
  </div>
</template>
