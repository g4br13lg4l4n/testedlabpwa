<template>
  <nav>
    <div class="mobile-menu">
      <div class="logo-menu">
        <img src="../assets/img/logo-mobile.svg" alt="TestedLab">
      </div>
      <div class="circle" :class="{ expand: isOpen }"></div>
      <div class="menu">
        <ul>
          <li :class="{ animate: isOpen }">
            <img
              src="../assets/img/logo.svg"
              alt="TestedLab"
              class="logo-mobile-center"
            />
          </li>
          <li :class="{ animate: isOpen }">
            <span
              ><i class="el-icon-s-home"></i>
              <nuxt-link to="home">Inicio</nuxt-link>
            </span>
          </li>
          <li :class="{ animate: isOpen }">
            <span
              ><i class="el-icon-user"></i>
              <nuxt-link to="nosotros">Perfil</nuxt-link>
            </span>
          </li>
          <li :class="{ animate: isOpen }">
            <span
              ><i class="el-icon-service"></i>
              <nuxt-link to="galeria">Contacto</nuxt-link>
            </span>
          </li>
          <li :class="{ animate: isOpen }">
            <el-divider></el-divider>
          </li>
          <li :class="{ animate: isOpen }">
            <button @click="exit" class="exit-btn flex close-sesion-mobile">
              <img src="../assets/img/logout.svg" alt="salir" class="mr-1" />
              <span>Cerrar sesión</span>
            </button>
          </li>
        </ul>
      </div>
      <div class="burger" @click="open" :class="{ open: isOpen }">
        <div class="x" :class="burguerX"></div>
        <div class="y" :class="burguerY"></div>
        <div class="z" :class="burguerZ"></div>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  props: ["active"],
  data() {
    return {
      isOpen: false,
      burguerX: "",
      burguerY: "",
      burguerZ: "",
    };
  },
  methods: {
    exit() {
      this.$router.push("/");
    },
    open() {
      this.isOpen = !this.isOpen;
      if (this.isOpen === true) {
        this.burguerX = "collapse";
        this.burguerY = "collapse";
        this.burguerZ = "collapse";
        setTimeout(() => {
          this.burguerY = "hidden";
          this.burguerX = "rotate30 collapse";
          this.burguerZ = "rotate150 collapse";
        }, 70);
        setTimeout(() => {
          this.burguerX = "rotate45 collapse";
          this.burguerZ = "rotate135 collapse";
        }, 120);
      } else {
        this.burguerX = "";
        this.burguerY = "";
        this.burguerZ = "";
      }
    },
  },
};
</script>
<style>
.logo-mobile-center {
  position: absolute;
  left: calc(50% - 50px);
  top: -60px;
}
.close-sesion-mobile {
  position: absolute;
  left: calc(50% - 69px);
  top: 0;
}
.logo-menu {
  position: absolute;
  top: 18px;
  left: 12px;
}
</style>