<template>
  <card>
    <h4 slot="header" class="card-title">{{ title }}</h4>
      <div class="row">
        <div class="row justify-content-start">
          <div class="col-md-4 ml-3">
            <img :src="image" width=200 height=200/>
          </div>
          <div class="col-md-6 ml-2">
            <label>{{ 'descrição do produto' }}</label>
            <h4>{{ description }}</h4>
          </div>
        </div>
      </div>
      <div class="row">
        <div class="row justify-content-start ml-2">
			<div class="col-md-4">
        		<h4>R$ {{ price }}</h4>
			 </div>
			<div class="col-md-3 mr-5">
				<base-input type="number"
					label="Quantidade"
					v-model="quantity"
					min="1"
				>
				</base-input>
			</div>
			<div class="col-md-4 mt-4 mr-2">
				<button @click="addCart()" style="width: 250px; height: 50px" class="btn btn-success btn-fill float-right" ><i class="fa fa-shopping-cart" aria-hidden="true"></i> {{ 'Adicionar no Carrinho' }}</button>
			</div>
        </div>
      </div>
  </card>
</template>
<script>
import Card from 'src/components/Cards/Card.vue'
import ProductMixin from '@/mixins/productMixin';

export default {
	mixins: [
		ProductMixin,
	],
	components: {
		Card
	},
	data() {
		return {
			lista: []
		};
	},
	computed: {
		id: {
			get() {
				return this.$store.state.productDados.formProduct.id;
			},
			set(valor) {
				this.setStoreValueByCommitFormProduct('id', valor);
			}
		},
		title: {
			get() {
				return this.$store.state.productDados.formProduct.title;
			},
			set(valor) {
				this.setStoreValueByCommitFormProduct('title', valor);
			}
		},
		image: {
			get() {
				return this.$store.state.productDados.formProduct.image;
			},
			set(valor) {
				this.setStoreValueByCommitFormProduct('image', valor);
			}
		},
		description: {
			get() {
					return this.$store.state.productDados.formProduct.description;
				},
			set(valor) {
				this.setStoreValueByCommitFormProduct('description', valor);
			}
		},
		price: {
			get() {
					return this.$store.state.productDados.formProduct.price;
				},
			set(valor) {
				this.setStoreValueByCommitFormProduct('price', valor);
			}
		},
		quantity: {
			get() {
					return this.$store.state.productDados.formProduct.quantity;
				},
			set(valor) {
				this.setStoreValueByCommitFormProduct('quantity', valor);
			}
		},
	},
	methods: {
		addCart() {
			let list = this.$store.state.cartDados.listCarts;

			let listEqual = list.filter(element => element.id === this.id); // verifica se item já esta inserido no carrinho

			if (listEqual.length <= 0) {
				let total = (Number(this.quantity) * Number(this.price));

				let objData = {'id': this.id, 'image': this.image, 'price': this.price, 'title': this.title, 'qtde': this.quantity,'total': this.formatTotal(total)};
				this.$store.commit('cartDados/pushListCarts', objData);
				this.$router.push({ path: 'carrinho'});
			} else {
				this.$toasted.show("Produto já inserido no carrinho", { 
					type:"error",
					theme: "outline", 
					position: "bottom-center", 
					duration : 5000
				});
			}
		}
	},
	mounted() {
	},
	watch: {},
};
</script>

<style>

</style>
