<template>
  <div class="mt-1">
    <h1 class="title">Perfil</h1>
    <div class="card-white bg-white rounded-3xl py-6 px-5 my-2 shadow w-96">
      <el-button round class="float-right round-primary" size="small" @click="dialogFormVisible = true">Editar</el-button>
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
    <div class="card-white bg-white rounded-3xl py-6 px-5 my-2 shadow w-96">
      <p class="sub-title mb-0.5">Dirección</p>
      <p>
        Calle Olmo Col. Adolfo López Mateos CP: 70123 Delegación Vasco de
        Quiroga CDMX
      </p>
    </div>
    <el-dialog title="Shipping address" :visible.sync="dialogFormVisible">
      <el-form :model="form">
        <el-form-item label="Promotion name" :label-width="formLabelWidth">
          <el-input v-model="form.name" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="Zones" :label-width="formLabelWidth">
          <el-select v-model="form.region" placeholder="Please select a zone">
            <el-option label="Zone No.1" value="shanghai"></el-option>
            <el-option label="Zone No.2" value="beijing"></el-option>
          </el-select>
        </el-form-item>
      </el-form>
      <span slot="footer" class="dialog-footer">
        <el-button @click="dialogFormVisible = false">Cancel</el-button>
        <el-button type="primary" @click="dialogFormVisible = false"
          >Confirm</el-button
        >
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
      dialogFormVisible: false,
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