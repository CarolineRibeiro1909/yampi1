
import { productService } from '@/services/Product/productService';
import { categoriesService } from '@/services/Categories/categoriesService';

const serviceProduct = new productService();
const serviceCategorie = new categoriesService();

export default {
	mixins: [
		
  	],
	data() {
		return {
			listSelect: [
				{
					'id': 1,
					'name': 'Nome'
				},
				{
					'id': 2,
					'name': 'Preço'
				},
				{
					'id': 3,
					'name': 'Avaliação do Produto'
				},
			]
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
			this.setStoreValueByCommitFormProduct('quantity', 1);
		},
		getAllJeweleryCategories() {
			this.setListProducts();
			serviceCategorie.getJeweleryCategorie().then(response => {
				this.$store.commit('productDados/setListProducts', response);
			})
		},
		getAllElectronicsCategories() {
			this.setListProducts();
			serviceCategorie.getElectronicsCategorie().then(response => {
				this.$store.commit('productDados/setListProducts', response);
			})
		},
		getAllManCategories() {
			this.setListProducts();
			serviceCategorie.getManCategorie().then(response => {
				this.$store.commit('productDados/setListProducts', response);
			})
		},
		getAllWomanCategories() {
			this.setListProducts();
			serviceCategorie.getWomanCategorie().then(response => {
				this.$store.commit('productDados/setListProducts', response);
			})
		},
		getProduct(search) {
			serviceProduct.getAllProducts().then(response => {
				let responseFind = response.find(elem => elem.title.trim() === search.trim());
				if (responseFind) {
					this.setFormProduct(responseFind);
					this.$router.push({ path: 'detalhes-produto'}).catch(()=>{});
				}
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
		},
		formatTotal(total) {
			total = total.toFixed(2);
			total = total.toString().replace(".", ",");
			return total;
		},	
	},
	watch: {
	}
};