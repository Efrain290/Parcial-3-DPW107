<template>
  <!-- 2. Navbar.vue: Menú de navegación con router-link -->
  <nav class="bg-indigo-600 shadow-lg sticky top-0 z-10">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="flex justify-between h-16">
        <div class="flex">
          <div class="flex-shrink-0 flex items-center">
            <h1 class="text-white text-xl font-bold">Vue Parcial</h1>
          </div>
          <div class="hidden sm:ml-6 sm:flex sm:space-x-8">
            <ul class="flex space-x-4">
              <li class="flex items-center">
                <!-- El menú debe tener dos router-link que apunten a las rutas de las vistas -->
                <router-link to="/" class="text-white hover:bg-indigo-700 px-3 py-2 rounded-md text-sm font-medium transition duration-150 ease-in-out">
                  Inicio (Home)
                </router-link>
              </li>
              <li class="flex items-center">
                <router-link to="/contador" class="text-white hover:bg-indigo-700 px-3 py-2 rounded-md text-sm font-medium transition duration-150 ease-in-out">
                  Contador
                </router-link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </nav>
</template>

<script setup>
// El script setup es la sintaxis moderna y concisa para componentes
</script>

<style scoped>
/* Opcionalmente implemente estilos css en cada componente usados sólo en cada componente. */
/* Estilos adicionales de navegación si fueran necesarios */
.router-link-active {
  background-color: #4338ca; /* Indigo-700 para la ruta activa */
  font-weight: 600;
}
</style>
