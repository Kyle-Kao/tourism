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
      categoryData:'',
      placeDatas: [],
      linkTypes:[
        {
          cnName: '景點類',
          name: 'landscape',
          url: '/landscape'
        },
        {
          cnName: '餐飲類',
          name: 'food',
          url: '/food'
        },
        {
          cnName: '旅宿類',
          name: 'lodging',
          url: '/lodging'
        },
        {
          cnName: '活動類',
          name: 'activity',
          url: '/activity'
        },
      ]
    };
  },
  mutations: {
    checkCategory(state,item){
      state.categoryData = item.type
      console.log(state.categoryData)
    }
  },
  actions: {},
  getters: {
    landScapeDatas(state) {
      return state.placeDatas;
    },
    getcheckCategory(state){
      return state.categoryData
    },
    linkDatas(state){
      return state.linkTypes
    }
  },
});

export default store;
