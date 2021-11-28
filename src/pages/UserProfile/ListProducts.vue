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
			  <h5 class="card-category mt-1"><b>{{'nota'}} {{ item.rating.rate }}</b></h5>
			  <h5 class="card-category mt-1"><b>R$ {{ item.price }}</b></h5>
            </div>
            <div slot="footer">
                <div class="row justify-content-end mt-3">
                    <div class="col-md-12 ml-5 mr-5">
                        <button @click="details(item)"  style="width: 250px; height: 50px" class="btn btn-info btn-fill float-right"><i class="fa fa-search" aria-hidden="true"></i>{{'Detalhes'}}</button>
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
import StatsCard from 'src/components/Cards/StatsCard.vue'
import ProdutoMixin from '@/mixins/produtoMixin';

export default {
	mixins: [
		ProdutoMixin,
	],
	components: {
        StatsCard
	},
	data() {
		return {
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
	},
	mounted() {
	},
	watch: {},
};
</script>

<style scoped>
</style>