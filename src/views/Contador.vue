<template>
  <!-- 3. Contador.vue: Vista que inserta el componente HelloWorld.vue -->
  <div class="p-8 min-h-[calc(100vh-16rem)] text-center bg-gray-100">
    <h1 class="text-4xl font-bold text-gray-800 mb-10">Página de Contador</h1>
    
    <!-- Inserción del componente creado por defecto src/components/HelloWorld.vue -->
    <HelloWorld msg="Controlador de Pares" />
  </div>
</template>

<script setup>
import HelloWorld from '../components/HelloWorld.vue'; // Importa el componente modificado
// Lógica de la vista Contador (si es necesaria)
</script>

<style scoped>
/* Estilos de vista Contador */
</style>
