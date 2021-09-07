<template>
  <div class="card-white bg-white rounded-3xl pb-6 my-2">
    <img src="../assets/img/covid-2.png" alt="prueba" class="m0-auto"/>
    <p class="number-test-text text-center py-1">{{ category.cantidad }}</p>
    <p class="text-gray text-center">{{ category.cveEstudio }}</p>
  </div>
</template>
<script>
export default {
  props: ['category']
}
</script>