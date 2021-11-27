<template>
  <div class="content">
    <div class="container-fluid">
      <div class="row">
        <div class="col-md-8">
          <card-cart-products>
          </card-cart-products>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
  import CardCartProducts from './UserProfile/CardCartProducts.vue'

  export default {
    components: {
      CardCartProducts,
      UserCard
    }
  }

</script>
<style>

</style>
