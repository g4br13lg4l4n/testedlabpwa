<template>
  <div class="mt-1">
    <ResumenMobile class="hidden show-mobile "/>
    <h1 class="title">Exámenes</h1>
    <h2 class="sub-title mt-1">Sobre tus exámenes</h2>
    <p class="text-gray mt-1">
      Cada uno de tus examenes contiene un QR el cual ayudará a tu doctor a
      <br />
      cargar rápidamente tus resultados.
    </p>
    <h2 class="sub-title mt-2">Filtros de búsqueda</h2>
    <el-form label-position="top" :inline="true" :model="form" class="mt-1 flex items-end ">
      <el-form-item label="Categoría">
        <el-select v-model="form.filter" placeholder="Seleccionar">
          <el-option
            v-for="item in options"
            :key="item.value"
            :label="item.label"
            :value="item.value"
          >
          </el-option>
        </el-select>
      </el-form-item>
      <el-button class="mb-2" type="warning" @click="onSubmit" round>Realizar búsqueda</el-button>
    </el-form>
    <div>
      <div class="options-test">
        <el-button type="primary" @click="onSubmit" round>Completados</el-button>
        <el-button type="info" @click="onSubmit" round>Pendientes</el-button>
      </div>
      <div class="mt-2 container-test flex content-between flex-wrap">
        <CardTest />
        <CardTest />
        <CardTest />
        <CardTest />
        <CardTest />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  layout: "main",
  data() {
    return {
      form: {
        filter: ""
      },
      options: [
        {
          value: "Test COVID-19",
          label: "Test COVID-19",
        },
      ],
    };
  },
  methods: {
    onSubmit() {
      console.log("submit!");
    },
  },
};
</script>

<style>
  .options-test {
    border: 1px solid #F1F1F1;
    padding: 3px;
    box-sizing: border-box;
    border-radius: 20px;
    width: 273px;
  }
</style>