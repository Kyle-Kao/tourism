import { getSingleCity } from "@/api/module/singleApi.js";
const singleDatas = {
  // namespaced: true,
  mutations: {
    getCity(state, data){
      state.placeDatas = data.data
    },
  },
  actions: {
    getCity(context,data){
      getSingleCity(data.city).then(res=>{
        context.commit("getCity",res.data)
      })
    },
  },
  getters: {
    getCity(state){
      return state.placeDatas
    }
  }
}

export default singleDatas