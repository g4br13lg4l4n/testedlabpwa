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
    <form-search />
    <div>
      <div class="options-test">
        <el-button :type="flagTest === 'completed' ? 'primary' : ''" @click="listTest('completed')" round>Completados</el-button>
        <el-button :type="flagTest === 'no-completed' ? 'primary' : ''" @click="listTest('no-completed')" round>Pendientes</el-button>
      </div>
      <div class="mt-2 container-test flex content-between flex-wrap" v-if="flagTest === 'completed'">
        <card-test v-for="test in details.estudiosCompletos" :key="test.folio" :test="test" type="complated"/>
      </div>
      <div class="mt-2 container-test flex content-between flex-wrap" v-else>
          <card-test v-for="test in details.estudiosPendientes" :key="test.folio" :test="test" type="pending"/>
        </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';
import CardTest from '../../components/CardTest';
import FormSearch from '../../components/FormSearch';
export default {
  components: { 
    CardTest,
    FormSearch
  },
  layout: "main",
  data() {
    return {
      flagTest: 'completed',
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
    }
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