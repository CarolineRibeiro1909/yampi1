<template>
	<div>
	</div>
</template>
<script>
import swal from 'sweetalert2';
import ProdutoMixin from '@/mixins/produtoMixin';

import { mapState } from 'vuex';

export default {
	mixins: [
		ProdutoMixin,
	],
	components: {
		
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