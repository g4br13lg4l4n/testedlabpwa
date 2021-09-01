<template>
  <div class="card-white flex bg-white rounded-3xl py-6 my-2">
    <img src="../assets/img/covid.png" alt="prueba" />
    <div class="test-resumen ml-1 flex items-center">
      <p class="mr-1 number-test-text">{{ category.cantidad }}</p>
      <p class="text-gray">{{ category.cveEstudio }}</p>
    </div>
  </div>
</template>
<script>
export default {
  props: ['category']
}
</script>