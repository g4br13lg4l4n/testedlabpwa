<template>
  <nav class="menu mt-2">
    <ul class="flex">
      <li>
        <nuxt-link  to="/home" class="item-menu">
          <span>Inicio</span>
        </nuxt-link>
      </li>
      <li>
        <nuxt-link to="/profile" class="item-menu">
          Perfil
        </nuxt-link>
      </li>
      <li>
        <nuxt-link to="/contact" class="item-menu">
          Contacto
        </nuxt-link>
      </li>
    </ul>
  </nav>
</template>

<script>
export default {
  data() {
    return {
      activeIndex: "1",
      activeIndex2: "1",
    };
  },
  methods: {
    handleSelect(key, keyPath) {
      console.log(key, keyPath);
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
    font-size: 14px;
    line-height: 20px;
    margin-left: 12px;
    margin-right: 12px;
  }
  nav.menu a.nuxt-link-active {
    background-color: #3E64FF;
    border: 1px solid #3E64FF;
    border-radius: 15px;
    color: white;
    padding: 10px 26px;
  }
</style>