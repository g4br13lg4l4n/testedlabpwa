<template>
  <div class="container-fluid">
    <el-row class="flex flex-none-mobile">
      <el-col :span="12" :xs="24" :sm="24" :lg="12" class="bg-blue-login diplay-none-mobile">
        <img src="../../assets/img/img-password.png" alt="Tested Lab" />
      </el-col>
      <el-col :span="12" :xs="24" :sm="24" :lg="12" class="position-form">
        <div class="flex-mobile">
          <img src="../../assets/img/logo2.svg" alt="Tested Lab" class="center"/>
          <h2 class="text-center">Recuperar contraseña</h2>
        </div>
        <img src="../../assets/img/img-password.png" alt="Tested Lab" class="hidden show-mobile mb-2 w-10/12"/>
        <div class="content-form mt-2">
          <p class="text-center mt-1" v-if="!flag">
            Escribe tu correo electrónico con el que estés dado de alta en
            Tested LAb
          </p>
          <p class="text-center mt-1 mb-2" v-if="flag">Te hemos enviado un correo con tu nueva contraseña</p>
          <el-form ref="form" :model="form" :rules="rules" v-if="!flag" class="mb-2">
            <el-form-item label="Correo" prop="email">
              <el-input type="text" v-model="form.email"></el-input>
            </el-form-item>
            <el-button class="btn-blue rounded-full" @click="submitForm('form')" round>Enviar</el-button>
          </el-form>
          <el-button class="btn-blue" @click="$router.push('/')" v-if="flag" round>Aceptar</el-button>
        </div>
      </el-col>
    </el-row>
  </div>
</template>

<script>
export default {
  auth: false,
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
            message: "Usuario requerido",
            trigger: "blur",
          },
          {
            type: "email",
            message: "Correo inválido",
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
          this.flag = true; 
        }
      });
    },
  },
};
</script>

<style>
  .center {
    margin: 0 auto;
  }
</style>