<template>
  <el-form
    label-position="top"
    ref="form"
    :inline="true"
    :model="form"
    :rules="rules"
    class="mt-1 flex items-end">
    <el-form-item label="Categoría">
      <el-select v-model="form.filter" placeholder="Seleccionar" prop="filter">
        <el-option
          v-for="item in categoriasEstudios"
          :key="item.cveEstudio"
          :label="item.cveEstudio"
          :value="item.cveEstudio">
        </el-option>
      </el-select>
    </el-form-item>
    <el-button class="mb-2" type="warning" @click="onSubmit('form')" round>Realizar búsqueda</el-button>
  </el-form>
</template>

<script>
import { mapGetters } from 'vuex';
export default {
  data() {
    return {
      form: {
        filter: '',
      },
      rules: {
        filter: [
          {
            required: true,
            message: 'Opción requerida',
            trigger: 'change'
          }
        ]
      }
    };
  },
  computed: {
    ...mapGetters(['categoriasEstudios', 'auth']),
  },
  mounted() {
    this.$store.dispatch("get_categories", this.auth.user.cvePaciente);
  },
  methods: {
    onSubmit(formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          this.$store.dispatch('get_test_by_category', {
            cvePaciente: this.auth.user.cvePaciente,
            category: this.form.filter
          });
        }
      });
    },
  },
};
</script>