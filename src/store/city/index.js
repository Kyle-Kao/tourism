const cityDatas = {
  namespaced: true,
  state() {
    return {
      nowCity: null,
      categoryData: '',
      cityDatas: [
        {
          name: '臺北市',
          value: 'Taipei',
        },
        {
          name: '新北市',
          value: 'NewTaipei',
        },
        {
          name: '桃園市',
          value: 'Taoyuan',
        },
        {
          name: '臺中市',
          value: 'Taichung',
        },
        {
          name: '臺南市',
          value: 'Tainan',
        },
        {
          name: '高雄市',
          value: 'Kaohsiung',
        },
        {
          name: '基隆市',
          value: 'Keelung',
        },
        {
          name: '新竹市',
          value: 'Hsinchu',
        },
        {
          name: '新竹縣',
          value: 'HsinchuCounty',
        },
        {
          name: '苗栗縣',
          value: 'MiaoliCounty',
        },
        {
          name: '彰化縣',
          value: 'ChanghuaCounty',
        },
        {
          name: '南投縣',
          value: 'NantouCounty',
        },
        {
          name: '雲林縣',
          value: 'YunlinCounty',
        },
        {
          name: '嘉義縣',
          value: 'ChiayiCounty',
        },
        {
          name: '嘉義市',
          value: 'Chiayi',
        },
        {
          name: '屏東縣',
          value: 'PingtungCounty',
        },
        {
          name: '宜蘭縣',
          value: 'YilanCounty',
        },
        {
          name: '花蓮縣',
          value: 'HualienCounty',
        },
        {
          name: '臺東縣',
          value: 'TaitungCounty',
        },
        {
          name: '金門縣',
          value: 'KinmenCounty',
        },
        {
          name: '澎湖縣',
          value: 'PenghuCounty',
        },
        {
          name: '連江縣',
          value: 'LienchiangCounty',
        },
      ],
      linkTypes: [
        {
          cnName: '景點類',
          name: 'landscape',
          url: '/landscape',
        },
        {
          cnName: '餐飲類',
          name: 'restaurant',
          url: '/restaurant',
        },
        {
          cnName: '旅宿類',
          name: 'hotel',
          url: '/hotel',
        },
        {
          cnName: '活動類',
          name: 'activity',
          url: '/activity',
        },
      ],
      placeDatas: [],
      restaurantDatas:[],
      hotelDatas:[],
      activityDatas:[],
    };
  },
  mutations: {
    getNowCity(state, data) {
      state.nowCity = data.city;
    },
    checkCategory(state, data) {
      state.categoryData = data.type;
    },
    getCity(state, data) {
      state.placeDatas = data;
    },
    getRestaurant(state, data){
      state.restaurantDatas = data
    },
    getHotel(state, data){
      state.hotelDatas = data
    },
    getActivity(state, data){
      state.activityDatas = data
    },
  },
  actions: {},
  getters: {
    cityDatas(state) {
      return state.cityDatas;
    },
    linkDatas(state) {
      return state.linkTypes;
    },
    // 獲取現在城市&狀態
    getNowCityName(state) {
      return state.nowCity;
    },
    getcheckCategory(state) {
      return state.categoryData;
    },
    // 獲取四種狀態的值
    getPlaceDatas(state) {
      return state.placeDatas;
    },
    getRestaurantDatas(state){
      return state.restaurantDatas
    },
    getHotelDatas(state){
      return state.hotelDatas
    },
    getActivityDatas(state){
      return state.activityDatas
    },
  },
};

export default cityDatas;
