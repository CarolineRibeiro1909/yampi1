
const getDefaultStateWizard = () => {
	return {
        activeTabIndex: 0,
        isChangeActiveTabIndex: false
        // tabs: []
	}
}

export default {
	namespaced: true,
	state: getDefaultStateWizard(),
	getters: {},
	mutations: {
		resetState(state) {
			Object.assign(state, getDefaultStateWizard())
		},
		setActiveTabIndex(state, payload) {
            state.activeTabIndex = payload
        },
        setIsChangeActiveTabIndex(state, payload) {
            state.isChangeActiveTabIndex = payload
        }
	},
	actions: {
		resetPessoa({ commit }) {
			commit('resetState')
		}
	}
}