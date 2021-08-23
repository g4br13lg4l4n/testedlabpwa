<template>
  <div class="card-test flex justify-between items-center mx-4 my-3">
    <div>
      <p class="title-test">Test COVID-19</p>
      <p class="date-test">
        <span>Fecha de muestreo: </span> <strong>12/08/21</strong>
      </p>
      <p class="category-test">Categoría: Test</p>
    </div>
    <nuxt-link :to="id" class="bg-white row-select">
      <img src="../assets/img/row.svg" alt="row" />
    </nuxt-link>
  </div>
</template>
<script>
export default {
  data() {
    return {
      id: "home/test/1",
    };
  },
};
</script>

<style>
.card-test {
  width: 320px;
  background: rgba(107, 119, 154, 0.05);
  box-shadow: 0px 10px 25px rgba(107, 119, 154, 0.1);
  border-radius: 20px;
  padding: 16px 12px;
}
.title-test {
  font-family: Roboto;
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 19px;
  letter-spacing: 0.266977px;
  color: #222222;
}
.date-test,
.category-test {
  margin: 4px 0;
  font-family: Roboto;
  font-style: normal;
  font-weight: normal;
  font-size: 14px;
  line-height: 20px;
  letter-spacing: 0.233605px;
  color: #6b779a;
}
.row-select {
    background: #FFFFFF;
    box-shadow: 0px 10px 60px rgba(0, 0, 0, 0.15);
    border-radius: 10px;
    padding: 10px;
}
</style>