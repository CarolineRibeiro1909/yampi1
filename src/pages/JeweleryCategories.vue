<template>
  <div class="content">
	<h4>{{'Joias'}}</h4>
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
			selected: [],
		};
	},
	computed: {
	},
	methods: {
	},
	mounted() {
    	this.getAllJeweleryCategories();
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