<template>
  <div class="content">
	<div class="row justify-content-center">
		<div class="col-md-6 ml-3">
			<label>{{'Ordenar por:'}}</label>
			<select class="form-control" name="template" v-model="selected">
				<option v-for="item in listSelect" :key="item.id">
					{{ item.name }}
				</option>
			</select>
		</div>
	</div>
	<div class="mt-3">
		<list-products></list-products>
	</div>
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
			selected: [],
		};
	},
	computed: {
	},
	methods: {
	},
	mounted() {
    	this.getAllWomanCategories();
	},
	watch: {
		'selected': function(newValue, oldValue) {
			let listProducts =	this.$store.state.productDados.listProducts;
			if (newValue) {
				this.orderBySelectItem(listProducts, newValue);
			}
		}
	},
};
</script>

<style scoped>
</style>