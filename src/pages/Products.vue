<template>
  <div class="content">
    <list-products></list-products>
  </div>
</template>
<script>

import ProductMixin from '@/mixins/productMixin';
import ListProducts from './PagesComponents/ListProducts.vue'

export default {
	mixins: [
		ProductMixin,
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