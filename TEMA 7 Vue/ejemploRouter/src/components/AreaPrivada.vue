<script setup>
    import { useRouter, useRoute } from 'vue-router';

    const Router = useRouter();
    const ruta = useRoute();

    console.log("Recibo nombre" + ruta.params.nombreUsuario)
    console.log("Recibo usuario" + ruta.params.idUsuario)

    function cerrarSesion(){
        Router.push({ path: '/' })
    }
</script>

<template>
    Componenete area privada
    <button @click="cerrarSesion">Cerrar sesion</button>
</template>
