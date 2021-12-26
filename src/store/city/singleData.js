import { getSingleCity } from "@/api/module/singleApi.js";
const singleDatas = {
    namespaced: true,
    state() {
        return {
            placeDatas: []
        }
    },
    mutations: {
        getCity(state, data) {
            state.placeDatas = data
            console.log(state.placeDatas[0].Picture)
        },
    },
    actions: {
        getCity(context) {
            console.log(context)
            getSingleCity(context.rootState.nowCity).then(res => {
                context.commit("getCity", res.data)
                    // console.log(res.data , 'placeDatas:'+ context.rootState.placeDatas)
            })
        },
    },
    getters: {
        getPlaceDatas(state) {
            return state.placeDatas
        }
    }
}

export default singleDatas