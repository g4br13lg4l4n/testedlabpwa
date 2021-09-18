<template>
  <div class="mt-1">
    <h1 class="title">Contacto</h1>
    <p class="sub-title mb-0.5 mt-1 mb-1">¿Necesitas agendar una cita?</p>
    <p class="mb-1">Comunicate con nosotros</p>
    <div class="flex items-center mr-4 my-2 flex-wrap">
      <div class="card-contact flex justify-between items-center mt-1">
        <div>
          <img src="../../assets/img/whats.svg" alt="Whatssap">
        </div>
        <div>
          <p class="title-test">WhatsApp</p>
          <p class="category-test">Chatea con nosotros</p>
        </div>
        <a href="https://wa.link/t8e6z2" class="bg-white row-select" target="_blank">
          <img src="../../assets/img/row.svg" alt="row" />
        </a>
      </div>
      <div class="card-contact flex justify-between items-center mt-1">
        <div>
          <img src="../../assets/img/contact.svg" alt="Contacto">
        </div>
        <div>
          <p class="title-test w-40">Línea de atención al cliente</p>
          <a class="category-test" href="tel:5589511329">Llámanos al 55 8951 1329</a>
        </div>
        <a href="tel:5589511329" class="bg-white row-select">
          <img src="../../assets/img/row.svg" alt="row" />
        </a>
      </div>
    </div>
    <p class="sub-title mb-0.5 mt-2 mb-1">¿Necesitas ayuda sobre la App o tus datos?</p>
    <div class="card-contact flex justify-between items-center w-60">
        <div>
          <img src="../../assets/img/contact.svg" alt="Contacto">
        </div>
        <div>
          <p class="title-test w-40">Línea de atención al cliente</p>
          <a class="category-test" href="tel:5589511334">Llámanos al 55 8951 1334</a>
        </div>
        <a href="tel:5589511334" class="bg-white row-select">
          <img src="../../assets/img/row.svg" alt="row" />
        </a>
      </div>
  </div>
</template>

<script>
export default {
  layout: "main",
  name: "contact"
};
</script>

<style>
  .card-contact { 
    background: rgba(107, 119, 154, 0.05);
    border-radius: 20px;
    min-width: 320px;
    min-height: 106px;
    padding: 18px 20px;
    margin: 0 12px;
  }
</style>