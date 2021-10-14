<template>
  <div class="mt-1">
    <h1 class="title">Perfil</h1>
    <div class="card-white bg-white rounded-3xl py-6 px-5 my-2 shadow w-96 card-profile">
      <el-button round class="float-right round-primary" size="small" @click="formUpdate = true">Editar</el-button>
      <p class="sub-title mb-0.5">{{ auth.user.nombreCompleto }}</p>
      <p>
        <i class="el-icon-date"></i>
        {{ auth.user.fechaNacimiento | date}}
      </p>
      <p>
        <i class="el-icon-message"></i>
        {{ auth.user.email }}
      </p>
      <p>
        <i class="el-icon-mobile"></i>
        {{ auth.user.celular }}
      </p>
    </div>
    <div class="card-white bg-white rounded-3xl py-6 px-5 my-2 shadow w-96 card-profile">
      <p class="sub-title mb-0.5">Dirección</p>
      <p>
        {{ auth.user.domicilio === '' ? 'Sin dirección registrada' : auth.user.domicilio }}
      </p>
    </div>
    <el-dialog title="Editar datos" :visible.sync="formUpdate" center class="with-modal">
      <el-form :model="form">
        <el-form-item label="Fecha de nacimiento">
          <el-date-picker
            class="picker-full morado-background"
            v-model="form.date"
            type="date"
            format="dd-MM-yyyy"
            placeholder="Fecha de nacimiento"
            autocomplete="off">
          </el-date-picker>
        </el-form-item>
        <el-form-item label="Correo">
          <el-input v-model="form.email" autocomplete="off" class="morado-background"></el-input>
        </el-form-item>
        <el-form-item label="Teléfono">
          <el-input v-model="form.phone" autocomplete="off" class="morado-background"></el-input>
        </el-form-item>
        <el-form-item label="Domicilio">
          <el-input v-model="form.domicilio" autocomplete="off" class="morado-background"></el-input>
        </el-form-item>
      </el-form>
      <span slot="footer" class="dialog-footer">
        <el-button type="primary" @click="update()" class="w-full btn-blue" round :loading="loading" :disabled="loading">Aceptar</el-button>
      </span>
    </el-dialog>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';
import moment from 'moment';
export default {
  layout: "main",
  name: "profile",
  data() {
    return {
      loading: false,
      formUpdate: false,
      form: {}
    };
  },
  computed: {
    ...mapGetters(["auth"]),
  },
  mounted() {
    let date = '';
    if(this.auth?.user?.fechaNacimiento && this.auth?.user?.fechaNacimiento !== '') {
      date = new Date(moment(this.auth?.user?.fechaNacimiento, 'YYYY-MM-DD'));
    }
    this.form = {
        date: date,
        email: this.auth?.user?.email,
        phone: this.auth?.user?.celular,
        domicilio: this.auth?.user?.domicilio
      };
  },
  methods: {
    update() {
      const data = {
        celular: this.form.phone,
        email: this.form.email,
        fecha_nacimiento: moment(this.form.date, 'DD/MMMM/YYYY').format('YYYY-MM-DD'),
        domicilio: this.form.domicilio
      };
      this.loading = true;
      this.$axios.put('perfil', data)
      .then(resp => {
        this.$store.dispatch('get_profile');
        this.loading = false;
        this.formUpdate = false;
        this.$message({
          showClose: true,
          message: resp.data.message,
          type: 'success'
        });
      })
      .catch(err => {
        this.loading = false;
        this.formUpdate = false;
        this.$message({
          showClose: true,
          message: err.response.data.message,
          type: 'error'
        });
      })
    }
  }
};
</script>
<style>
.shadow {
  box-shadow: 0px 10px 60px rgba(107, 119, 154, 0.1);
}
</style>