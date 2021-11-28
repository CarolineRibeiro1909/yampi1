<template>
  <div class="content">
    <list-products></list-products>
  </div>
</template>
<script>

import ProdutoMixin from '@/mixins/produtoMixin';
import ListProducts from './UserProfile/ListProducts.vue'

export default {
	mixins: [
		ProdutoMixin,
	],
	components: {
		ListProducts
	},
	data() {
		return {
		};
	},
	computed: {
	},
	methods: {
	},
	mounted() {
    	this.getAllProducts();
	},
	watch: {},
};
</script>

<style scoped>
</style>