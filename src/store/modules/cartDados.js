const getDefaultStateCartDados = () => {
	return {
        listCarts: [],
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
		}
	},
	actions: {
		resetCartDados({ commit }) {
			commit('resetState')
		},
	}
}