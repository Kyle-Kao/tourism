import { createStore } from 'vuex';
import cityModule from './city/index.js';
import createPersistedState from 'vuex-persistedstate';

const store = createStore({
  modules: {
    city: cityModule,
	},
	plugins:[
		createPersistedState({
			key: 'vux',
			paths: ['city.nowCity']
		})
	],
  state() {
		return{
			searching:'',
		}
	},
  mutations: {},
  actions: {},
  getters: {},
});

export default store;
