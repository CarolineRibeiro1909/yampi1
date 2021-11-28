<template>
  <nav class="navbar navbar-expand-lg">
    <div class="container-fluid">
      <a class="navbar-brand" href="#/main/products">Dashboard</a>
       <button type="button"
              class="navbar-toggler navbar-toggler-right"
              :class="{toggled: $sidebar.showSidebar}"
              aria-controls="navigation-index"
              aria-expanded="false"
              aria-label="Toggle navigation"
              @click="toggleSidebar">
        <span class="navbar-toggler-bar burger-lines"></span>
        <span class="navbar-toggler-bar burger-lines"></span>
        <span class="navbar-toggler-bar burger-lines"></span>
      </button>
      <div class="collapse navbar-collapse justify-content-end">
        <ul class="navbar-nav ml-auto">
          <base-dropdown title="Categorias">
            <a class="dropdown-item" href="#/main/electronics-categories">Eletrônicos</a>
            <a class="dropdown-item" href="#/main/man-categories">Homens</a>
            <a class="dropdown-item" href="#/main/jewelery-categories">Joias</a>
            <a class="dropdown-item" href="#/main/woman-categories">Mulheres</a>
          </base-dropdown>
          <base-dropdown tag="li">
            <template slot="title">
              <i class="fa fa-shopping-cart"></i>
              <span class="notification">{{ listCarts.length }}</span>
            </template>
            <a class="dropdown-item" href="#/main/cart">Carrinho</a>
          </base-dropdown>
        </ul>
      </div>
    </div>
  </nav>
</template>
<script>
import { mapState } from 'vuex';
  export default {
    computed: {
      ...mapState('cartDados', ['listCarts']),
      routeName () {
        const {name} = this.$route
        return this.capitalizeFirstLetter(name)
      }
    },
    data () {
      return {
        activeNotifications: false
      }
    },
    methods: {
      capitalizeFirstLetter (string) {
        return string.charAt(0).toUpperCase() + string.slice(1)
      },
      toggleNotificationDropDown () {
        this.activeNotifications = !this.activeNotifications
      },
      closeDropDown () {
        this.activeNotifications = false
      },
      toggleSidebar () {
        this.$sidebar.displaySidebar(!this.$sidebar.showSidebar)
      },
      hideSidebar () {
        this.$sidebar.displaySidebar(false)
      }
    }
  }

</script>
<style>

</style>
