template>
  <!-- 2. Inserte estos 2 componentes en el componente principal src/App.vue -->
  
  <!-- Navbar (Menú de navegación) -->
  <Navbar />

  <!-- Contenido principal: Aquí se renderizan las vistas (Home o Contador) -->
  <main class="flex-grow">
    <!-- El router-view se encarga de mostrar el componente de la vista actual -->
    <router-view />
  </main>
<  
  <!-- Footer (Pie de página) -->
  <Footer />
</template>

<script setup>
// 2. Inserte estos 2 componentes
import Navbar from './components/Navbar.vue';
import Footer from './components/Footer.vue';

// Importa estilos de Tailwind CSS (Asumido en el entorno)
</script>

<style>
/* Estilos base de la aplicación. En un proyecto real, el index.html cargaría Tailwind. */
/* Aseguramos que el cuerpo o el elemento que contiene App.vue use flexbox para que el footer se quede abajo */
#app {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  font-family: 'Inter', sans-serif;
}
/* Estilos para el router-view y main para asegurar que el contenido se estire */
main {
  flex-grow: 1;
}
</style>
