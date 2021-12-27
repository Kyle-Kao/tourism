import { createStore } from 'vuex';
import cityModule from './city/index.js';
import singleData from './city/singleData.js';
import createPersistedState from 'vuex-persistedstate';

const store = createStore({
  modules: {
    city: cityModule,
    single: singleData,
	},
	plugins:[
		createPersistedState({
			key: 'vux',
			paths: ['city.nowCity']
		})
	],
  state() {
    return {
      data: [],
      placeDatas: [],
    };
  },
  mutations: {
    
  },
  actions: {},
  getters: {
    finalCity(state) {
      return state.nowCity;
    },
    landScapeDatas(state) {
      return state.placeDatas;
    },
  },
});

export default store;
