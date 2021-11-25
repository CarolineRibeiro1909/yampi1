const getDefaultStateProductDados = () => {
	return {
		formProduct: {
			id: null,
            title: null,
			description: null,
            image: null,
            price: null,
            quantity: null
		},
        listProducts: [],
	}
}

export default {
	namespaced: true,
	state: getDefaultStateProductDados(),
	getters: {},
	mutations: {
		resetState(state) {
			Object.assign(state, getDefaultStateProductDados())
		},
		resetDictParamsFormProductState(state) {
			Object.keys(state.formProduct).forEach(key => {
				if (key === 'ativo') {
					state.formProduct[key] = true
				} else {
					state.formProduct[key] = null
				}
			});
		},
		resetAllListProducts(state) {
			state.listProducts = []
		},
		setFormProduct(state, payload) {
			state.formProduct[payload.key] = payload.value
		},
        setListProducts(state, payload) {
			state.listProducts = payload
        },
	},
	actions: {
		resetProdutoDados({ commit }) {
			commit('resetState')
		},
	}
}