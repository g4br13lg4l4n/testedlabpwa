<template>
  <nav class="menu mt-2 flex justify-between items-center">
    <ul class="flex">
      <li>
        <nuxt-link to="/home" class="item-menu">
          <span><i class="el-icon-s-home"></i>Inicio</span>
        </nuxt-link>
      </li>
      <li>
        <nuxt-link to="/profile" class="item-menu">
          <span><i class="el-icon-user"></i>Perfil</span>
        </nuxt-link>
      </li>
      <li>
        <nuxt-link to="/contact" class="item-menu">
          <span><i class="el-icon-service"></i>Contacto</span>
        </nuxt-link>
      </li>
    </ul>
    <button @click="closeSession = true" class="exit-btn flex">
      <img src="../assets/img/logout.svg" alt="salir" class="mr-1" />
      <span class="diplay-none-ipad">Cerrar sesión</span>
    </button>
    <el-dialog
      title="Aviso"
      :visible.sync="closeSession"
      width="420px"
      center
      class="text-center"
    >
      <span>¿Estás seguro que quieres cerrar sesión?</span>
      <span slot="footer" class="dialog-footer">
        <el-button type="primary" @click="exit()" round>Si</el-button>
        <el-button @click="closeSession = false" round>No</el-button>
      </span>
    </el-dialog>
  </nav>
</template>

<script>
import { Loading } from 'element-ui';
export default {
  data() {
    return {
      closeSession: false,
    };
  },
  methods: {
    exit() {
      const loading = Loading.service({ fullscreen: true });
      this.$auth.logout()
      .then(() => {
        this.closeSession = false;
        loading.close();
      })
      .catch(() => {
        this.closeSession = false;
        loading.close();
      });
    },
  },
};
</script>

<style>
nav.menu {
  height: 35px;
}
a.item-menu {
  height: 100%;
  color: #6b779a;
  font-family: Roboto;
  font-style: normal;
  font-weight: normal;
  font-size: 15px;
  line-height: 20px;
  margin-left: 16px;
  margin-right: 16px;
}
a.item-menu:first-child {
  margin-left: 0;
}
nav.menu a.nuxt-link-active {
  background-color: #0061AC;
  border: 1px solid #0061AC;
  border-radius: 15px;
  color: white;
  padding: 10px 26px;
}
.exit-btn {
  font-family: Roboto;
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 19px;
  text-align: center;
  letter-spacing: 0.486957px;
  color: #0061AC;
}
@media (max-width: 770px) {
  .diplay-none-ipad {
    display: none; 
  }
}
</style>