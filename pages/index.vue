<template>
  <div class="container-fluid">
    <el-row class="flex flex-none-mobile">
      <el-col :span="12" :xs="24" :sm="12" :lg="12" class="bg-blue-login diplay-none-mobile">
        <img src="../assets/img/bro-desk.svg" alt="Tested Lab" class="w-2/3"/>
      </el-col>
      <el-col :span="12" :xs="24" :sm="12" :lg="12" class="position-form">
        <div class="flex-mobile">
          <img src="../assets/img/logo2.svg" alt="Tested Lab">
          <h2 class="text-center mt-1">Iniciar sesión</h2>
        </div>
        <img src="../assets/img/bro.svg" alt="Tested Lab" class="hidden show-mobile mb-2 w-10/12"/>
        <div class="content-form mt-2">
          <el-form ref="form" :model="form" :rules="rules" class="text-center">
            <el-form-item label="Usuario" prop="user">
              <el-input type="text" v-model="form.user" placeholder="nombreddmmyyyy"></el-input>
            </el-form-item>
            <el-form-item label="Contraseña" prop="password">
              <el-input type="password" autocomplete="off" v-model="form.password"></el-input>
            </el-form-item>
            <el-form-item label=" " prop="terms" class="mb-2">
              <el-checkbox v-model="form.terms">Acepto términos y condiciones</el-checkbox>
            </el-form-item>
            <el-button class="btn-blue rounded-full" @click="submitForm('form')" round>Iniciar sesión</el-button>
          </el-form>
          <nuxt-link to="/recovery-password" class="text-center mb-2">Olvidé mi contraseña</nuxt-link>
        </div>
      </el-col>
    </el-row>
  </div>
</template>

<script>
export default {
  name: 'logIn',
  data() {
    return {
      form: {
        user: "",
        password: "",
        terms: ''
      },
      rules: {
        user: [
          {
            required: true,
            message: "Usuario requerido",
            trigger: "blur"
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
        if (valid) {
          this.$auth.loginWith('local', { data: this.form })
          .then(resp => {
            //this.$router.push('/home');
          })
          .catch(err => {
            console.log('error', err);
            this.$message({
              showClose: true,
              message: err.response?.data?.message,
              type: 'error'
            })
          })
        }
      })
    }
  }
};
</script>