<template>
  <!-- 2. Footer.vue: Pie de página tradicional -->
  <footer class="bg-gray-800 text-white mt-auto">
    <div class="max-w-7xl mx-auto py-8 px-4 sm:px-6 lg:px-8">
      <div class="grid grid-cols-1 md:grid-cols-3 gap-8 text-center md:text-left">
        <!-- Acerca de -->
        <div>
          <h3 class="text-lg font-semibold mb-3 text-indigo-400">Acerca de</h3>
          <p class="text-sm text-gray-400">Este sitio web fue elaborado como parte de un parcial utilizando VueJS 3, Vite y Vue Router.</p>
        </div>
        
        <!-- Enlaces a redes sociales (Mock) -->
        <div>
          <h3 class="text-lg font-semibold mb-3 text-indigo-400">Redes Sociales</h3>
          <ul class="space-y-2">
            <li><a href="#" class="text-gray-400 hover:text-indigo-300 transition duration-150 ease-in-out">Facebook</a></li>
            <li><a href="#" class="text-gray-400 hover:text-indigo-300 transition duration-150 ease-in-out">Twitter</a></li>
            <li><a href="#" class="text-gray-400 hover:text-indigo-300 transition duration-150 ease-in-out">LinkedIn</a></li>
          </ul>
        </div>
        
        <!-- Copyright -->
        <div class="md:text-right">
          <h3 class="text-lg font-semibold mb-3 text-indigo-400">Copyright</h3>
          <p class="text-sm text-gray-400">&copy; {{ currentYear }} [Nombre del Estudiante]. Todos los derechos reservados.</p>
        </div>
      </div>
    </div>
  </footer>
</template>

<script setup>
import { ref } from 'vue';

// Calcula el año actual para el copyright
const currentYear = ref(new Date().getFullYear());
</script>

<style scoped>
/* Opcionalmente implemente estilos css en cada componente usados sólo en cada componente. */
/* Estilos del Footer */
footer {
  box-shadow: 0 -2px 5px rgba(0, 0, 0, 0.1);
}
</style>
