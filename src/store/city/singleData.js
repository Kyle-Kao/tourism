import { getSingleCity } from '@/api/module/singleApi.js';
const singleDatas = {
  namespaced: true,
  state() {
    return {
      placeDatas: [],
    };
  },
  mutations: {
    getCity(state, data) {
      state.placeDatas = data;
    },
  },
  actions: {
    getCity(context, {city}) {
      getSingleCity(city).then((res) => {
				// var obj = JSON.parse(localStorage.getItem('vux'))
				context.commit('getCity', res.data);
      });
		},
  },
  getters: {
    getPlaceDatas(state) {
      return state.placeDatas;
    },
  },
};

export default singleDatas;
