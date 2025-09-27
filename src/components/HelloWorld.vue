<template>
  <!-- 3. Modifique el componente helloWorld.vue para el contador -->
  <div class="p-6 bg-white shadow-xl rounded-xl max-w-md mx-auto my-8">
    <h1 class="text-3xl font-extrabold text-indigo-700 mb-4">{{ msg }}</h1>

    <!-- Valor actual del contador -->
    <p class="text-5xl font-mono text-gray-800 my-6 p-4 border-2 border-indigo-200 bg-indigo-50 rounded-lg shadow-inner">
      Contador: <span class="font-black text-6xl">{{ count }}</span>
    </p>

    <!-- 3. Agregue un segundo botón que reduzca el valor de contador de 2 en 2 -->
    <div class="flex justify-center space-x-4">
      <button 
        type="button" 
        @click="decrement" 
        class="flex-1 bg-red-500 hover:bg-red-600 text-white font-bold py-3 px-6 rounded-lg transition duration-300 transform hover:scale-105 shadow-md">
        Reducir (-2)
      </button>
      
      <!-- Modificado: el contador se incremte de 2 en 2 -->
      <button 
        type="button" 
        @click="increment" 
        class="flex-1 bg-green-500 hover:bg-green-600 text-white font-bold py-3 px-6 rounded-lg transition duration-300 transform hover:scale-105 shadow-md">
        Incrementar (+2)
      </button>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';

// Define las props, incluyendo el mensaje
defineProps({
  msg: {
    type: String,
    required: true,
    default: 'Componente de Contador',
  }
});

// Inicializa el estado reactivo
const count = ref(0);

// Función para incrementar de 2 en 2
const increment = () => {
  count.value += 2;
};

// Función para decrementar de 2 en 2
const decrement = () => {
  count.value -= 2;
};
</script>

<style scoped>
/* Estilos específicos para el componente de contador, si es necesario */
</style>
