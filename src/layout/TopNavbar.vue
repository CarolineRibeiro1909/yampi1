<template>
  <nav class="navbar navbar-expand-lg">
    <div class="container-fluid">
      <a class="navbar-brand mr-5" href="#/principal/produtos">Todos Produtos</a>
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

      <form class="form-inline my-2 my-lg-0">
        <input class="form-control mr-sm-2" v-model="productSearch" type="search" placeholder="Insira o título do produto" aria-label="Search">
        <button class="btn btn-outline-success my-2 my-sm-0" @click="search()" type="submit">{{'Pesquisar'}}</button>
      </form>
    
      <div class="collapse navbar-collapse justify-content-end">
        <ul class="navbar-nav ml-auto">
          <base-dropdown title="Categorias">
            <a class="dropdown-item" href="#/principal/categoria-eletronicos">Eletrônicos</a>
            <a class="dropdown-item" href="#/principal/categoria-masculino">Masculino</a>
            <a class="dropdown-item" href="#/principal/categoria-joias">Joias</a>
            <a class="dropdown-item" href="#/principal/categoria-feminino">Feminino</a>
          </base-dropdown>
          <base-dropdown tag="li">
            <template slot="title">
              <i class="fa fa-shopping-cart"></i>
              <span class="notification">{{ listCarts.length }}</span>
            </template>
            <a class="dropdown-item" href="#/principal/carrinho">Carrinho</a>
          </base-dropdown>
        </ul>
      </div>
    </div>
  </nav>
</template>
<script>
import { mapState } from 'vuex';
import ProductMixin from '@/mixins/productMixin';

  export default {
    mixins: [
		  ProductMixin,
	  ], 
    computed: {
      ...mapState('cartDados', ['listCarts']),
      routeName () {
        const {name} = this.$route
        return this.capitalizeFirstLetter(name)
      }
    },
    data () {
      return {
        activeNotifications: false,
        productSearch: null
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
      },
      search() {
        this.getProduct(this.productSearch);
      }
    }
  }

</script>
<style>

</style>
