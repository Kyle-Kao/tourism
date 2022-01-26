import { createStore } from 'vuex';
import cityModule from './city/index.js';
// import createPersistedState from 'vuex-persistedstate';

const store = createStore({
  modules: {
    city: cityModule,
	},
	plugins:[
		// createPersistedState({
		// 	key: 'vux',
		// 	paths: ['city.nowCity']
		// })
	],
  state() {
		return{
			searching: null,
		}
	},
  mutations: {
		checkingSearch(state, payload){
			state.searching = payload
		}
	},
  actions: {},
  getters: {
		getSearching(state){
			return state.searching
		}
	},
});

export default store;
