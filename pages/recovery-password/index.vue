<template>
  <div class="container-fluid">
    <el-row class="flex">
      <el-col :span="12" :xs="24" :sm="24" :lg="12" class="bg-blue-login">
        <img src="../../assets/img/img-password.png" alt="Tested Lab" />
      </el-col>
      <el-col :span="12" :xs="24" :sm="24" :lg="12" class="position-form">
        <img src="../../assets/img/logo.png" alt="Tested Lab" />
        <div class="content-form mt-2">
          <h2 class="text-center">Recuperar contraseña</h2>
          <p class="text-center mt-1" v-if="!flag">
            Escribe tu correo electrónico con el que estés dado de alta en
            Tested LAb
          </p>
          <p class="text-center mt-1 mb-2" v-if="flag">Te hemos enviado un correo con tu nueva contraseña</p>
          <el-form ref="form" :model="form" :rules="rules" v-if="!flag">
            <el-form-item label="Correo" prop="email">
              <el-input type="text" v-model="form.email"></el-input>
            </el-form-item>
            <el-button class="btn-blue rounded-full" @click="submitForm('form')">Enviar</el-button>
          </el-form>
          <el-button class="btn-blue" @click="$router.push('/')" v-if="flag">Aceptar</el-button>
        </div>
      </el-col>
    </el-row>
  </div>
</template>

<script>
export default {
  data() {
    return {
      flag: false,
      form: {
        email: "",
      },
      rules: {
        email: [
          {
            required: true,
            message: "Correo requerido",
            trigger: "blur",
          },
          {
            type: "email",
            message: "Formato inválido",
            trigger: ["blur"],
          },
        ],
      },
    };
  },
  methods: {
    submitForm(formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          this.$auth
            .loginWith("local", { data: this.form })
            .then((resp) => {
              this.flag = true;
            })
            .catch((err) => {
              console.log("error");
              this.$message({
                showClose: true,
                message: err.response.data.message,
                type: "error",
              });
            });
        }
      });
    },
  },
};
</script>
