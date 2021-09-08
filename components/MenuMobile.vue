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
          <li :class="{ animate: isOpen }" @click="open">
            <span>
              <nuxt-link to="/home" class="flex justify-center item-center">
                <img src="../assets/img/home.svg" alt="home" class="mr-1.5"><span>Inicio</span>
              </nuxt-link>
            </span>
          </li>
          <li :class="{ animate: isOpen }" @click="open">
            <span>
              <nuxt-link to="/profile" class="flex justify-center item-center">
                <img src="../assets/img/user.svg" alt="User" class="mr-1.5"> <span>Perfil</span>
              </nuxt-link>
            </span>
          </li>
          <li :class="{ animate: isOpen }" @click="open">
            <span>
              <nuxt-link to="/contact" class="flex justify-center item-center">
                <img src="../assets/img/headphones.svg" alt="headphones" class="mr-1.5"> <span>Contacto</span>
              </nuxt-link>
            </span>
          </li>
          <li :class="{ animate: isOpen }">
            <el-divider></el-divider>
          </li>
          <li :class="{ animate: isOpen }">
            <button @click="closeSession = true" class="exit-btn flex close-sesion-mobile">
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
    <el-dialog
      title="Aviso"
      :visible.sync="closeSession"
      width="280px"
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
export default {
  props: ["active"],
  data() {
    return {
      closeSession: false,
      isOpen: false,
      burguerX: "",
      burguerY: "",
      burguerZ: "",
    };
  },
  methods: {
    exit() {
      this.$auth.logout()
      .then(() => {
        this.closeSession = false;
      })
      .catch(() => {
        this.closeSession = false;
      });
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