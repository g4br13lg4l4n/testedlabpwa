<template>
  <div class="card-test flex justify-between items-center mx-4 my-3">
    <div>
      <p class="title-test">Prueba {{ test.cveEstudio }}</p>
      <p class="date-test">
        <span>Fecha de muestreo: </span> <strong>{{ test.fechaSolicitud | date }}</strong>
      </p>
      <p class="category-test">Descripción: {{ test.descripcion }}</p>
    </div>
    <nuxt-link :to="'home/test/' +  test.folio" class="bg-white row-select" v-if="type === 'complated'">
      <img src="../assets/img/row.svg" alt="row" />
    </nuxt-link>
  </div>
</template>
<script>
export default {
  props: ['test', 'type']
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

</style>