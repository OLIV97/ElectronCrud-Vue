
<template>
  <div class=" bg-gray-800 flex items-center justify-between h-16 rounded-b ">
    <div>
      <h1 class="mx-2 text-white  font-bold tracking-widest uppercase text-2xl">
        ELECTRON CRUD
      </h1>
    </div>
    <div class=" flex gap-2 text-white  font-bold mx-2  ">
      <input v-on:click="agregar" type="button" value="Agregar">
      <input v-on:click="mostrar" type="button" value="Mostrar Datos">
    </div>
  </div>

  <div>
    <Versions v-if="vistaAgregar"></Versions>
    <Products v-if="vistaMostrar"></Products>
  </div>
</template>

<script setup>
import Versions from './components/Versions.vue'
import Products from './components/Products.vue'
import './assets/css/output.css'
import { ref } from 'vue'

const vistaAgregar = ref(true)
const vistaMostrar = ref(false)

const agregar = () => {
  vistaAgregar.value = true;
  vistaMostrar.value = false;
}

const mostrar = () => {
  vistaAgregar.value = false;
  vistaMostrar.value = true;
}
</script>