<script setup>
defineProps(['listanotas']);
let contador = 0;
</script>
    
<template>
    <div>
        <ul>
            <li v-for="(nota, index) in listanotas" :key="index">{{ nota }}</li>
        </ul>
    </div>
</template>
