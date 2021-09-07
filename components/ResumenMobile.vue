<template>
    <div>
        <p class="sub-title mb-0.5 text-center">{{ auth.user.nombreCompleto }}</p>
        <p class="text-gray mt-0.5 text-center">{{ auth.user.edad }} años</p>
        <div class="container-list-test mt-1">
            <p class="title-list-test mt-0.5 text-center">Test realizados</p>
            <div class="content-list-test mb-8">
                <card-category-mobile v-for="category in details.categoriaEstudios" :key="category.cveEstudio" :category="category"/>
            </div>
        </div>
    </div>
</template>
<script>
import { mapGetters } from 'vuex';
import CardCategoryMobile from './CardCategoryMobile';
export default {
  components: { 
      CardCategoryMobile
   },
   computed: {
        ...mapGetters(['auth', 'details']),
    } 
}
</script>