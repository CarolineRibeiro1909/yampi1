const getDefaultStateCartDados = () => {
	return {
        listCarts: [],
		qtdeCard: 0,
	}
}

export default {
	namespaced: true,
	state: getDefaultStateCartDados(),
	getters: {},
	mutations: {
		resetState(state) {
			Object.assign(state, getDefaultStateCartDados())
		},
		resetAllListCarts(state) {
			state.listCarts = []
		},
        pushListCarts(state, payload) {
			state.listCarts.push(payload)
        },
		setListCarts(state, payload) {
			state.listCarts = payload;
		},
		setQtdeCart(state, payload) {
			state.qtdeCard = payload
		}
	},
	actions: {
		resetCartDados({ commit }) {
			commit('resetState')
		},
		resetListCarts({ commit }) {
			commit('resetAllListCarts')
		},
	}
}