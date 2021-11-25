
import { productService } from '@/services/Product/productService';

const serviceProduct = new productService();

export default {
	mixins: [
		
  	],
	data() {
		return {
		}
	},
	mounted() {},
	methods: {
		setStoreValueByCommitFormProduct(key, value) {
			this.$store.commit('productDados/setFormProduct', { key: key, value: value });
		},
		getAllProducts() {
			serviceProduct.getAllProducts().then(response => {
				this.$store.commit('productDados/setListProducts', response);
			})
		},
		setFormProduct(objData) {
			this.setStoreValueByCommitFormProduct('id', objData.id);
			this.setStoreValueByCommitFormProduct('title', objData.title);
			this.setStoreValueByCommitFormProduct('description', objData.description);
			this.setStoreValueByCommitFormProduct('image', objData.image);
			this.setStoreValueByCommitFormProduct('price', objData.price);
		}	
	},
	watch: {
	}
};