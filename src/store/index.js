import { createStore } from "vuex";
import cityModule from "./city/index.js";
import singleData from './city/singleData.js'


const store = createStore({
    modules: {
        city: cityModule,
        single: singleData,
    },
    state() {
        return {
            data: [],
            placeDatas: [],
            nowCity: "",
        };
    },
    mutations: {

    },
    actions: {

    },
    getters: {
        finalCity(state) {
            return state.nowCity
        },
        landScapeDatas(state) {
            return state.placeDatas
        }
    },
});

export default store;