<template>
  <card>
	<h4 slot="header" class="card-title" v-show="listCarts.length > 0">{{ 'Meu Carrinho' }}</h4>
    <div class="card-collapse-scroll" ref="divScroll">
		<div class="row justify-content-md-center align-items-center mt-3"
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
		<div v-show="listCarts.length > 0">
			<div class="row justify-content-end" >
				<div class="col-md-1 mr-3 ml-3" style="color:black">
					<h5>{{ 'Total' }}</h5>
				</div>
				<div class="col-md-3 mr-0 ml-2" style="color:blue">
					<h5>R$ {{ total }}</h5>
				</div>
			</div>	
			<div class="row justify-content-end">
				<div class="col-md-4">
					<button type="primary" round icon class="btn btn-success btn-fill mt-5" style="width: 300px; height: 50px" @click="completedOrder()">{{ 'Finalizar Pedido' }}</button>
				</div>
			</div>
		</div>
		<div v-if="listCarts.length === 0">
			<notification :title="cartTitle" :type="'info'"></notification>
		</div>
	</div>
  </card>
</template>
<script>
import Card from 'src/components/Cards/Card.vue'
import Notification from 'src/components/NotificationPlugin/Notification.vue';

export default {
	mixins: [
	],
	components: {
    	Card,
		Notification
	},
	data() {
		return {
			cartTitle: 'Carrinho Vazio!',
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
			this.qtdeCart(this.listCarts);
		},
		removeIndexInArray(arrayObject, index) {
			return arrayObject.splice(index, 1);
		},
		qtdeCart(array) { // função para calcular a quantidade de itens do carrinho
			let qtde = array.reduce((prevVal, elem) => {
            return prevVal + Number(elem.qtde);
          }, 0);
		  this.$store.commit('cartDados/setQtdeCart', qtde);
		},
		totalCart(array) { // função para calcular o valor total do carrinho
			this.total = array.reduce((prevVal, elem) => {
				return prevVal + Number(elem.total);
			}, 0);

			this.total = parseFloat(this.total.toFixed(2));
			
			this.total = this.total.toString().replace(".", ",");
		},
		updatePrice(indexCart, qtde, price) {
			let list = this.$store.state.cartDados.listCarts;

			list[indexCart].qtde = qtde; // altera o valor da quantidade

			let total = Number((qtde) * (price));

			list[indexCart].total = parseFloat(total.toFixed(2)); // altera o valor do preço

			this.$store.commit('cartDados/setListCarts', list);

			this.totalCart(list);
			this.qtdeCart(list);
		},
		resetListCarts() {
			this.$store.dispatch('cartDados/resetListCarts');
			this.$store.commit('cartDados/setQtdeCart', 0);
		},
		completedOrder() {
			this.$toasted.show("Pedido Enviado com Sucesso !!", { 
				type:"success",
				theme: "outline", 
				position: "bottom-center", 
				duration : 5000
			});
			this.resetListCarts();
		}
	},
	mounted() {
		this.totalCart(this.listCarts);
		this.qtdeCart(this.listCarts);
	},
	watch: {
	},
};
</script>

<style>

</style>
