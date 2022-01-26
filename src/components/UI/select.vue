<template>
  <select name="city" @change="showValue">
    <option value="0" v-if="!isM">— choose an option —</option>
    <option value="1" v-if="isM">choose...</option>
    <option :value="cityData.value" v-for="cityData in cityDatas" :key="cityData.name" v-html="cityData.name"></option>
  </select>
</template>

<script>
import { mapGetters, mapMutations } from 'vuex';
import { getSingleCity} from '@/api/module/singleApi.js';
export default {
  data() {
    return {
      isM: true,
    };
  },
  created() {
    this.checkM();
  },
  computed: {
    ...mapGetters('city', ['cityDatas', 'getNowCityName']),
    ...mapGetters(['getSearching']),
  },
  methods: {
    ...mapMutations('city', ['getNowCity', 'getCity', 'getRestaurant', 'getHotel', 'getActivity']),
    // 儲存城市
    showValue(e) {
      this.getNowCity({ city: e.target.value });
      // if (this.$route.path == '/') {
      //   return;
      // } else {
      //   if (this.getSearching) {
      //     switch (this.$route.path) {
      //       case 'landscape':
      //         getSingleCity(this.getNowCityName).then((res) => {
      //           let f = res.data.filter((data) => {
      //             return data.ScenicSpotName.indexOf(this.getSearching) > -1;
      //           });
      //           this.getCity(f);
      //         });
      //         break;
      //       case 'restaurant':
      //         getSingleRestaurant(this.getNowCityName).then((res) => {
      //           let f = res.data.filter((data) => {
      //             return data.RestaurantName.indexOf(this.getSearching) > -1;
      //           });
      //           this.getRestaurant(f);
      //         });
      //         break;
      //       case 'hotel':
      //         getSingleHotel(this.getNowCityName).then((res) => {
      //           let f = res.data.filter((data) => {
      //             return data.HotelName.indexOf(this.getSearching) > -1;
      //           });
      //           this.getHotel(f);
      //         });
      //         break;
      //       case 'activity':
      //         getSingleActivity(this.getNowCityName).then((res) => {
      //           let f = res.data.filter((data) => {
      //             return data.ActivityName.indexOf(this.getSearching) > -1;
      //           });
      //           this.getActivity(f);
      //         });
      //         break;
      //     }
      //   }else{
      //     switch (this.$route.path) {
      //       case 'landscape':
      //         getSingleCity(this.getNowCityName).then((res) => {
      //           this.getCity(res.data);
      //         });
      //         break;
      //       case 'restaurant':
      //         getSingleRestaurant(this.getNowCityName).then((res) => {
      //           this.getRestaurant(res.data);
      //         });
      //         break;
      //       case 'hotel':
      //         getSingleHotel(this.getNowCityName).then((res) => {
      //           this.getHotel(res.data);
      //         });
      //         break;
      //       case 'activity':
      //         getSingleActivity(this.getNowCityName).then((res) => {
      //           this.getActivity(res.data);
      //         });
      //         break;
      //     }
      //   }
      // }
    },
    checkM() {
      if (window.innerWidth < 768) {
        this.isM = true;
      } else {
        this.isM = false;
      }
    },
  },
  watch: {
    getNowCityName() {
      if (this.$route.path == 'landscape') {
        getSingleCity(this.getNowCityName).then((res) => {
          let f = res.data.filter((data) => {
            return data.ScenicSpotName.indexOf(this.getSearching) > -1;
          });
          this.getCity(f);
        });
      }
    },
  },
};
</script>
