import { createRouter, createWebHistory } from 'vue-router';
// Importamos las vistas (componentes que representan páginas completas)
import Home from '../views/Home.vue';
import Contador from '../views/Contador.vue';

// 3. Define las rutas de la aplicación
const routes = [
  {
    // Ruta de la página de inicio
    path: '/',
    name: 'Home',
    component: Home, // Carga la vista Home.vue
  },
  {
    // Ruta de la página del contador
    path: '/contador',
    name: 'Contador',
    component: Contador, // Carga la vista Contador.vue
  },
];

// Crea el objeto router para que Vue pueda usarlo
const router = createRouter({
  // Usamos createWebHistory() para URLs limpias (ej: /contador en lugar de /#contador)
  history: createWebHistory(),
  routes,
});

export default router;
