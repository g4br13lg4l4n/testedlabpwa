<template>
  <div class="mt-1">
    <h1 class="title">Perfil</h1>
    <div class="card-white bg-white rounded-3xl py-6 px-5 my-2 shadow w-96 card-profile">
      <el-button round class="float-right round-primary" size="small" @click="formUpdate = true">Editar</el-button>
      <p class="sub-title mb-0.5">Alejandra Hernández López</p>
      <p>
        <i class="el-icon-date"></i>
        alejandra.hl@mail.com
      </p>
      <p>
        <i class="el-icon-message"></i>
        alejandra.hl@mail.com
      </p>
      <p>
        <i class="el-icon-mobile"></i>
        5512345678
      </p>
    </div>
    <div class="card-white bg-white rounded-3xl py-6 px-5 my-2 shadow w-96 card-profile">
      <p class="sub-title mb-0.5">Dirección</p>
      <p>
        Calle Olmo Col. Adolfo López Mateos CP: 70123 Delegación Vasco de
        Quiroga CDMX
      </p>
    </div>
    <el-dialog title="Editar datos" :visible.sync="formUpdate" center class="with-modal">
      <el-form :model="form">
        <el-form-item label="Fecha de nacimiento">
          <el-date-picker
            class="picker-full morado-background"
            v-model="form.date"
            type="date"
            format="dd/MM/yy"
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
      </el-form>
      <span slot="footer" class="dialog-footer">
        <el-button type="primary" @click="formUpdate = false" class="w-full btn-blue" round>Aceptar</el-button>
      </span>
    </el-dialog>
  </div>
</template>

<script>
export default {
  layout: "main",
  name: "profile",
  data() {
    return {
      formUpdate: false,
      form: {}
    };
  },
};
</script>
<style>
.shadow {
  box-shadow: 0px 10px 60px rgba(107, 119, 154, 0.1);
}
</style>