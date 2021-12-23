import { createStore } from 'vuex';
import cityModule from './city/index.js'


const store = createStore({
  modules: {
    city: cityModule
  },
  state() {
    return {
      nowCity: '',
      placeDatas: [
        {
          name: 'kao',
          cnName: '猫囒山茶業改良場',
          des: '座落在日月潭北側的猫囒山，海拔1020公 尺，是俯瞰日月潭全景及觀賞日出的理想 地點。從台21線明潭國中旁進入，山路兩 旁種植茶樹，翠綠的景致讓人神清氣爽， 在入口處右側，有幾棟日式的舊木屋...',
          booking: '預約參觀請洽茶業改良場',
          phone: '886-4-92855106',
        },
        {
          name: 'ccc',
          cnName: '猫囒山茶業改良場',
          des: '座落在日月潭北側的猫囒山，海拔1020公 尺，是俯瞰日月潭全景及觀賞日出的理想 地點。從台21線明潭國中旁進入，山路兩 旁種植茶樹，翠綠的景致讓人神清氣爽， 在入口處右側，有幾棟日式的舊木屋...',
          booking: '預約參觀請洽茶業改良場',
          phone: '886-4-92855106',
        },
        {
          name: 'bbb',
          cnName: '猫囒山茶業改良場',
          des: '座落在日月潭北側的猫囒山，海拔1020公 尺，是俯瞰日月潭全景及觀賞日出的理想 地點。從台21線明潭國中旁進入，山路兩 旁種植茶樹，翠綠的景致讓人神清氣爽， 在入口處右側，有幾棟日式的舊木屋...',
          booking: '預約參觀請洽茶業改良場',
          phone: '886-4-92855106',
        },
      ],
    };
  },
  mutations: {},
  actions: {},
  getters: {
    placeDatas(state) {
      return state.placeDatas;
    },
  },
});

export default store;
