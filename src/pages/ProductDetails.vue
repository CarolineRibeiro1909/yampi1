<template>
  <div class="content">
    <div class="container-fluid">
      <div class="row">
        <div class="col-md-8">
          <card-product-details>
          </card-product-details>
        </div>
        <div class="col-md-4">
          <user-card>
          </user-card>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
  import CardProductDetails from './UserProfile/CardProductDetails.vue'
  import UserCard from './UserProfile/UserCard.vue'

  export default {
    components: {
      CardProductDetails,
      UserCard
    }
  }

</script>
<style>

</style>
