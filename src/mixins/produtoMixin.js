
import { productService } from '@/services/Product/productService';
import { categoriesService } from '@/services/Categories/categoriesService';

const serviceProduct = new productService();
const serviceCategorie = new categoriesService();

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
		setListProducts() {
			this.$store.commit('productDados/setListProducts', []);
		},
		getAllProducts() {
			this.setListProducts();
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
		},
		getAllJeweleryCategories() {
			this.setListProducts();
			serviceCategorie.getJeweleryCategorie().then(response => {
				this.$store.commit('productDados/setListProducts', response);
			})
		},
		orderBySelectItem(array, value) {
			let list = array.sort(function (x, y) {
				if (value === 'Nome') {
					let a = x.title.toUpperCase(),
					 b = y.title.toUpperCase()
					 return a == b ? 0 : a > b ? 1 : -1;
				} else if (value === 'Preço') {
					return x.price - y.price;
				} else {
					return x.rating.rate - y.rating.rate;
				}
			});
			this.$store.commit('productDados/setListProducts', list);
		}	
	},
	watch: {
	}
};