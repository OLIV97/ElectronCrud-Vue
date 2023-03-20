<template>
    <div class="flex flex-col">
  <div class="overflow-x-auto sm:-mx-6 lg:-mx-8">
    <div class="inline-block min-w-full py-2 sm:px-6 lg:px-8">
      <div class="overflow-hidden">
        <table class="min-w-full text-center text-sm font-light">
          <thead
            class="border-b bg-neutral-800 font-medium text-white dark:border-neutral-500 dark:bg-neutral-900">
            <tr>
           
              <th scope="col" class=" px-6 py-4">Marca</th>
              <th scope="col" class=" px-6 py-4">Precio Paquete</th>
              <th scope="col" class=" px-6 py-4">Stock</th>
            </tr>
          </thead>
          <tbody v-for="(message, index) in messageList" :key="index" >
            <tr class="border-b dark:border-neutral-500">
           
              <td class="whitespace-nowrap  px-6 py-4">
                {{ message.marca }}
              </td>
              <td class="whitespace-nowrap  px-6 py-4">{{ message.precioPaquete }}</td>
              <td class="whitespace-nowrap  px-6 py-4">{{ message.stock }}</td>
            </tr>
            
          </tbody>
        </table>
      </div>
    </div>
  </div>
</div>
    <!--
  <div class="container mx-auto flex flex-col justify-center items-center text-sm text-left text-gray-500 dark:text-gray-400">
    <div class="container mx-auto flex flex-grow  align-middle  w-full items-center text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400 ">
    <div class="w-1/3 flex  justify-center px-6 py-3 " ><h2 class="text-sm text-left text-gray-500 dark:text-gray-400">Marca</h2></div>
    <div class="w-1/3 flex justify-center px-6 py-3 "><p class="    text-sm text-left text-gray-500 dark:text-gray-400">Precio Paquete</p></div>
    <div class="w-1/3 flex justify-center px-6 py-3"><p class="text-sm text-left text-gray-500 dark:text-gray-400">Stock</p></div>
  </div>
  <div class="container mx-auto flex flex-grow  align-middle  w-full items-center " v-for="(message, index) in messageList" :key="index">
    <div class="w-1/3 flex  justify-center px-6 py-4 bg-yellow-100 "><h2 class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-black">{{ message.marca }}</h2></div>
    <div class="w-1/3 flex justify-center px-6 py-4 bg-red-100  "><p class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-black">{{ message.precioPaquete }}</p></div>
    <div class="w-1/3 flex justify-center px-6 py-4 bg-red-100  "><p class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-black">Stock: {{ message.stock }}</p></div>
  </div>
</div>
-->


 </template>
 
 <script>
 export default {
   data() {
     return {
       messageList: [] // Inicializamos la lista vacía
     }
   },
   mounted() {
     console.log('El componente se ha montado en el DOM');
     // Llamar a la función que deseas ejecutar
     this.myFunction();
   },
   methods: {
     async myFunction() {
         const respuesta = await window.CRUD.get()
         console.log(respuesta)
         this.messageList = respuesta; // Asignamos la respuesta directamente a la lista
     }
   }
 }
 </script>
 