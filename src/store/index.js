import { createStore } from "vuex";
import cityModule from "./city/index.js";
import { getAll } from "../api/index";

const store = createStore({
  modules: {
    city: cityModule,
  },
  state() {
    return {
      data: [],
      nowCity: "",
      placeDatas: [
        {
          name: "kao",
          cnName: "猫囒山茶業改良場",
          des: "座落在日月潭北側的猫囒山，海拔1020公 尺，是俯瞰日月潭全景及觀賞日出的理想 地點。從台21線明潭國中旁進入，山路兩 旁種植茶樹，翠綠的景致讓人神清氣爽， 在入口處右側，有幾棟日式的舊木屋...",
          booking: "預約參觀請洽茶業改良場",
          phone: "886-4-92855106",
        },
        {
          name: "ccc",
          cnName: "猫囒山茶業改良場",
          des: "座落在日月潭北側的猫囒山，海拔1020公 尺，是俯瞰日月潭全景及觀賞日出的理想 地點。從台21線明潭國中旁進入，山路兩 旁種植茶樹，翠綠的景致讓人神清氣爽， 在入口處右側，有幾棟日式的舊木屋...",
          booking: "預約參觀請洽茶業改良場",
          phone: "886-4-92855106",
        },
        {
          name: "bbb",
          cnName: "猫囒山茶業改良場",
          des: "座落在日月潭北側的猫囒山，海拔1020公 尺，是俯瞰日月潭全景及觀賞日出的理想 地點。從台21線明潭國中旁進入，山路兩 旁種植茶樹，翠綠的景致讓人神清氣爽， 在入口處右側，有幾棟日式的舊木屋...",
          booking: "預約參觀請洽茶業改良場",
          phone: "886-4-92855106",
        },
      ],
    };
  },
  mutations: {
    testApi(state, data) {
      //  賦值
      state.data = data.data;
    },
  },
  actions: {
    testApi(context) {
      //  執行非同步api並commit給mutations
      getAll().then((res) => {
        context.commit("testApi", res);
      });
    },
  },
  getters: {
    placeDatas(state) {
      return state.placeDatas;
    },
    getAllData(state) {
      //  取出資料
      return state.data
    }
  },
});

export default store;
