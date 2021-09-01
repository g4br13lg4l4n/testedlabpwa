<template>
  <nav class="menu mt-2 flex justify-between items-center">
    <ul class="flex">
      <li>
        <nuxt-link  to="/home" class="item-menu">
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
    <button @click="exit" class="exit-btn flex">
      <img src="../assets/img/logout.svg" alt="salir" class="mr-1"> 
      <span>Cerrar sesión</span>
    </button>
  </nav>
</template>

<script>
export default {
  methods: {
    exit() {
      this.$auth.logout();
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
    color: #6B779A;
    font-family: Roboto;
    font-style: normal;
    font-weight: normal;
    font-size: 15px;
    line-height: 20px;
    margin-left: 16px;
    margin-right: 16px;
  }
  a.item-menu:first-child{
    margin-left: 0;
  }
  nav.menu a.nuxt-link-active {
    background-color: #3E64FF;
    border: 1px solid #3E64FF;
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
    color: #3E64FF;
  }
</style>