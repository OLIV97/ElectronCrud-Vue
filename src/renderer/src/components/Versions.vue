
<template>
  
  <div class="flex justify-center items-center h-screen">
      <form class="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
        <div class="mb-4">
          <label class="block text-gray-700 text-sm font-bold mb-2" for="Marca">
            Marca
          </label>
          <input v-model="inputMarca" id="marca" class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"  type="text" placeholder="Marca">
        </div>
        <div class="mb-4">
          <label class="block text-gray-700 text-sm font-bold mb-2" for="Precio paquete">
            Precio paquete
          </label>
          <input v-model="precioPaquete" id="precioPaquete" class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"  type="text" placeholder="precioPaquete">
        </div>
        <div class="mb-4">
          <label class="block text-gray-700 text-sm font-bold mb-2" for="Stock">
            Stock
          </label>
          <input v-model="stock" id="stock" class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"  type="text" placeholder="Stock">
        </div>
       
        <div class="flex items-center justify-between">
          <button v-on:click="logInputValue" id="btn" class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="button">
           Guardar
          </button>
          
        </div>
      </form>
    </div>
</template>
<script >
export default {
  data() {
    return {
      inputMarca: '',
      precioPaquete:'',
      stock:''
    };
  },
  methods: {
    logInputValue() {
      console.log(this.inputMarca);
      console.log(this.precioPaquete);
      console.log(this.stock);

      const e ={
        marca: this.inputMarca,
    precioPaquete: this.precioPaquete ,
    stock: this.stock
   }

  
    window.CRUD.post(e);
    }

    
  }
}

</script>
