import { createApp } from 'vue';
// Importamos el componente principal (App.vue) que actúa como nuestro layout base
import App from './App.vue';
// Importamos la configuración de las rutas (router) que creamos en src/router/index.js
import router from './router'; 

// 1. Crear la instancia de la aplicación Vue
const app = createApp(App);

// 2. Usar el router para habilitar la navegación en la aplicación
app.use(router);

// 3. Montar la aplicación en el elemento <div id="app"> del archivo index.html
app.mount('#app');

// Puedes quitar este console.log si lo deseas, solo sirve para confirmar la carga
console.log("Aplicación Vue inicializada y router registrado.");
