<template>
  <card>
    <div class="card-collapse-scroll" ref="divScroll">
		<div class="row justify-content-md-center align-items-center mt-4"
			v-for="(lineCart, indexCart) in listCarts"
			:key="`cart-${ indexCart }`"
		>
			<div class="col-sm-3">
				<img :src="lineCart.image" width=100 height=100/>
			</div>

			<div class="col-sm-3">
				{{ lineCart.title }}
			</div>
			<div class="col-sm-3">
				<base-input type="number"
					label="Quantidade"
					v-model="lineCart.qtde"
					min="1"
					@change="updatePrice(indexCart, lineCart.qtde, lineCart.price)"
				>
				</base-input>
			</div>
			<div class="col-sm-2">
				<label> R$ {{ lineCart.total }}</label>
			</div>

			<div class="col-sm-1">
				<button type="primary" round icon
					class="btn btn-danger btn-fill"
					@click="removeCart(indexCart)"
				>
					<i class="fa fa-trash"></i>
				</button>
			</div>
		</div>
		<div class="row justify-content-end" v-show="listCarts.length > 0">
			<div class="col-md-1 mr-3 ml-3" style="color:black">
				<h5>{{ 'Total' }}</h5>
			</div>
			<div class="col-md-3 mr-0 ml-2" style="color:blue">
				<h5>R$ {{ total }}</h5>
			</div>
		</div>	
		<div class="row justify-content-end" v-show="listCarts.length > 0">
			<div class="col-md-4">
				<button type="primary" round icon class="btn btn-success btn-fill mt-5" style="width: 300px; height: 50px">{{'Finalizar Pedido'}}</button>
			</div>
		</div>

		<div v-if="listCarts.length === 0">
			<label>{{ 'Carrinho vazio' }}</label>
		</div>
		
	</div>
  </card>
</template>
<script>
import Card from 'src/components/Cards/Card.vue'

export default {
	mixins: [
	],
	components: {
    	Card
	},
	data() {
		return {
			total: null,
		};
	},
	computed: {
		listCarts: {
			get() {
				return this.$store.state.cartDados.listCarts;
			},
			set(valor) {
				this.$store.commit('cartDados/pushListCarts', valor);
			},
		},
	},
	methods: {
		removeCart(indexCart) {
			this.removeIndexInArray(this.listCarts, indexCart);
			this.totalCart(this.listCarts);
		},
		removeIndexInArray(arrayObject, index) {
			return arrayObject.splice(index, 1);
		},
		totalCart(array) {
			this.total = array.reduce((prevVal, elem) => {
				return prevVal + Number(elem.total);
			}, 0);
		},
		updatePrice(indexCart, qtde, price) {
			let lista = this.$store.state.cartDados.listCarts;

			lista[indexCart].qtde = qtde; // altera o valor da quantidade

			lista[indexCart].total = (Number(qtde) * Number(price).toFixed(2));  // altera o valor do preço

			this.$store.commit('cartDados/setListCarts', lista);

			this.totalCart(lista);
		},
	},
	mounted() {
		this.totalCart(this.listCarts);
	},
	watch: {
	},
};
</script>

<style>

</style>
