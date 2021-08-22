<template>
  <div class="container-fluid">
    <el-row class="flex">
      <el-col :span="12" :xs="24" :sm="24" :lg="12" class="bg-blue-login">
        <img src="../assets/img/bro.png" alt="Tested Lab" />
      </el-col>
      <el-col :span="12" :xs="24" :sm="24" :lg="12" class="position-form">
        <img src="../assets/img/logo2.svg" alt="Tested Lab">
        <div class="content-form mt-1">
          <h2 class="text-center">Iniciar sesión</h2>
          <el-form ref="form" :model="form" :rules="rules">
            <el-form-item label="Correo" prop="email">
              <el-input type="text" v-model="form.email"></el-input>
            </el-form-item>
            <el-form-item label="Contraseña" prop="password">
              <el-input type="password" autocomplete="off" v-model="form.password"></el-input>
            </el-form-item>
            <el-form-item label=" " prop="terms" class="mb-2">
              <el-checkbox v-model="form.terms">Acepto términos y condiciones</el-checkbox>
            </el-form-item>
            <el-button class="btn-blue rounded-full" @click="submitForm('form')" round>Iniciar sesión</el-button>
          </el-form>
          <nuxt-link to="/recovery-password" class="text-center">Olvidé mi contraseña</nuxt-link>
        </div>
      </el-col>
    </el-row>
  </div>
</template>

<script>
export default {
  data() {
    return {
      form: {
        email: "",
        password: "",
        terms: ''
      },
      rules: {
        email: [
          {
            required: true,
            message: "Correo requerido",
            trigger: "blur"
          },
          {
            type: "email",
            message: "Formato inválido",
            trigger: ["blur"]
          }
        ],
        password: [
          {
            required: true,
            message: "Contraseña requerida",
            trigger: "blur"
          }
        ],
        terms: [
          {
            required: true,
            message: "Es requerido aceptar términos y condiciones de uso y políticas de privacidad",
            trigger: "change"
          }
        ]
      }
    };
  },
  methods: {
    submitForm(formName) {
      this.$refs[formName].validate(valid => {
        console.log('valid ---->', valid)
        if (valid) {
          this.$auth.loginWith('local', { data: this.form })
          .then(resp => {
            this.$router.push('/home');
          })
          .catch(err => {
            console.log('error', )
            this.$message({
              showClose: true,
              message: err.response.data.message,
              type: 'error'
            })
          })
        }
      })
    }
  }
};
</script>
