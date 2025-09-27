<template>
  <!-- 3. Home.vue: Pantalla de presentación y bienvenida básica -->
  <div class="flex flex-col items-center justify-center p-8 min-h-[calc(100vh-16rem)] text-center bg-gray-50">
    <div class="bg-white p-10 shadow-2xl rounded-xl max-w-4xl w-full">
      <h1 class="text-5xl font-extrabold text-indigo-600 mb-4 border-b-4 border-indigo-200 pb-3">
        Proyecto Parcial: Desarrollo con VueJS
      </h1>
      
      <p class="text-2xl text-gray-700 mb-8">
        Bienvenido a la implementación del examen parcial.
      </p>

      <div class="grid grid-cols-1 md:grid-cols-2 gap-6 text-left">
        <div class="p-6 bg-indigo-50 rounded-lg shadow-md">
          <h2 class="text-xl font-semibold text-indigo-800 mb-3">Datos del Estudiante</h2>
          <ul class="text-gray-600 space-y-2">
            <li><strong>Nombre:</strong> [EFRAIN CABRERA WSCALIER ]</li>
            <li><strong>Cédula/ID:</strong> [12846911]</li>
            <li><strong>Fecha:</strong> 26 de Septiembre de 2025</li>
          </ul>
        </div>
        
        <div class="p-6 bg-indigo-50 rounded-lg shadow-md">
          <h2 class="text-xl font-semibold text-indigo-800 mb-3">Asignatura y Requerimientos</h2>
          <ul class="text-gray-600 space-y-2">
            <li><strong>Asignatura:</strong> Desarrollo de Aplicaciones Web</li>
            <li><strong>Framework:</strong> VueJS 3 con Vite</li>
            <li><strong>Funcionalidad Clave:</strong> Vistas, Componentes, Router y Reactividad.</li>
          </ul>
        </div>
      </div>
      
      <p class="mt-8 text-lg text-gray-500">
        Usa el menú de navegación para ir a la vista de "Contador" y probar la reactividad.
      </p>
    </div>
  </div>
</template>

<script setup>
// Lógica de la vista Home (si es necesaria)
</script>

<style scoped>
/* Estilos de vista Home */
</style>
