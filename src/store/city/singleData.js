import { getSingleCity } from "@/api/module/singleApi.js";
const singleDatas = {
  // namespaced: true,
  state(){
    return{
      placeDatas:[]
    }
  },
  mutations: {
    getCity(state, data){
      state.placeDatas = data.data
    },
  },
  actions: {
    getCity(context){
      console.log(context)
      getSingleCity(context.rootState.nowCity).then(res=>{
        context.commit("getCity",res.data)
      })
    },
  },
  getters: {
    getPlaceDatas(state){
      return state.placeDatas
    }
  }
}

export default singleDatas