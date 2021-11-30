<template>
  <div class="content">
    <div class="container-fluid">
      <div class="row">
        <div class="col-md-8">
          <card-product-details>
          </card-product-details>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
  import CardProductDetails from './PagesComponents/CardProductDetails.vue'

  export default {
    components: {
      CardProductDetails,
    },
    methods: {
	  },
    beforeRouteLeave(to, from, next) {
      this.$store.dispatch('productDados/resetFormProduct');
      next();
  	}
  }
</script>
<style>

</style>
