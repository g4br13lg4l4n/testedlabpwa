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
        <el-button :type="flagTest === 'completed' ? 'primary' : 'info'" @click="listTest('completed')" round>Completados</el-button>
        <el-button :type="flagTest === 'no-completed' ? 'primary' : 'info'" @click="listTest('no-completed')" round>Pendientes</el-button>
      </div>
      <div class="mt-2 container-test flex content-between flex-wrap" v-if="flagTest === 'completed'">
        <card-test v-for="test in details.estudiosCompletos" :key="test.folio" :test="test"/>
      </div>
      <div class="mt-2 container-test flex content-between flex-wrap" v-else>
          <card-test v-for="test in details.estudiosPendiente" :key="test.folio" :test="test"/>
        </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';
import CardTest from '../../components/CardTest';
export default {
  components: { 
    CardTest
  },
  layout: "main",
  data() {
    return {
      flagTest: 'completed',
      form: {
        filter: ''
      },
      cardTestData: [],
      options: [
        {
          value: "Test COVID-19",
          label: "Test COVID-19",
        },
      ],
    };
  },
  computed: {
    ...mapGetters(['details', 'auth']),
  },
  mounted() {
    this.$store.dispatch('get_details', this.auth.user.cvePaciente);
  },
  methods: {
    listTest(flag) {
      this.flagTest = flag;
    },
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
  @media (max-width: 480px) {
    .options-test {
      width: 100%;
      display: flex;
      justify-content: center;
    }
    .options-test button {
      width: 50%;
    }
  }
</style>