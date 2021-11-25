import Vue from 'vue';
import Vuex from 'vuex';

import productDados from './modules/productDados';

Vue.use(Vuex);

export default new Vuex.Store({
	modules:
		{
			productDados
		}
});