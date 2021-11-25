<template>
  <div class="content">
    <div class="container-fluid">
      <div class="row">
        <div class="col-xl-6 col-md-8" v-for="item in listProducts" :key="item.id">
          <stats-card>
            <div slot="header" class="icon-warning">
              <img :src="item.image" width=100 height=100/>
            </div>
            <div slot="content">
              <p class="card-category">{{item.title}}</p>
            </div>
            <div slot="footer">
              <div class="row justify-content-end mt-2">
					      <div class="col-md-12 category align-self-center">
						      <button @click="details(item)" class="btn btn-info btn-fill float-right" >{{'Ver Detalhes'}}</button>
					      </div>
			      	</div>          
				    </div>
          </stats-card>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import swal from 'sweetalert2';
import StatsCard from 'src/components/Cards/StatsCard.vue'
import ProdutoMixin from '@/mixins/produtoMixin';

import { mapState } from 'vuex';

export default {
	mixins: [
		ProdutoMixin,
	],
	components: {
    StatsCard
	},
	data() {
		return {
		lista: []
	};
	},
	computed: {
    listProducts: {
			get() {
				return this.$store.state.productDados.listProducts;
			},
			set(valor) {
				this.$store.commit('productDados/setListProducts', valor)
			},
		},
	},
	methods: {
    details(item) {
      this.$router.push({ path: 'product-details'});
      this.setFormProduct(item);
    },
    // addCart(item) {
    //   let listIgual = this.lista.filter(element => element.id === item.id);
    //   console.log('oi'+listIgual)
    //     if (listIgual.length <= 0) {
    //        this.lista.push({'id': item.id, 'price': item.price, 'title': item.title, 'qtde': item.qtde,'total': Number(item.qtde) * Number(item.price)});
    // console.log(this.lista);
    //     }  
    // }
	},
	mounted() {
    	this.getAllProducts();
	},
	watch: {},
};
</script>

<style scoped>
</style>