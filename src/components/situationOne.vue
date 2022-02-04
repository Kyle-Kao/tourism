<template>
  <div class="situation">
    <div class="gowhere">
      <label for="selectCity">走，我們去</label>
      <Select id="selectCity" @checkCity="changeCityDatas"></Select>
      <font-awesome-icon icon="chevron-down" class="icon" />
    </div>
    <div class="gocategory">
      <div class="card" v-for="data in linkDatas" :key="data.name" v-html="data.cnName" :class="data.name == getcheckCategory ? 'active' : ''"></div>
    </div>
  </div>
</template>

<style lang="scss" src="@/assets/styles/components/_situation1.scss"></style>

<script>
import { mapGetters, mapMutations } from 'vuex';
import select from '@/components/UI/select.vue';
import { getSingleCity, getSingleRestaurant, getSingleHotel, getSingleActivity } from '@/api/module/singleApi.js';
export default {
  components: {
    Select: select,
  },
  computed: {
    ...mapGetters('city', ['linkDatas', 'getcheckCategory']),
    ...mapGetters(['getSearching']),
  },
  methods: {
    ...mapMutations('city', ['getCity', 'getRestaurant', 'getHotel', 'getActivity']),
    changeCityDatas(city) {
      if (this.getSearching) {
        switch (this.getcheckCategory) {
          case 'landscape':
            getSingleCity(city).then((res) => {
              let f = res.data.filter((data) => {
                return data.ScenicSpotName.indexOf(this.getSearching) > -1;
              });
              this.getCity(f);
            });
            break;
          case 'restaurant':
            getSingleRestaurant(city).then((res) => {
              let f = res.data.filter((data) => {
                return data.RestaurantName.indexOf(this.getSearching) > -1;
              });
              this.getRestaurant(f);
            });
            break;
          case 'hotel':
            getSingleHotel(city).then((res) => {
              let f = res.data.filter((data) => {
                return data.HotelName.indexOf(this.getSearching) > -1;
              });
              this.getHotel(f);
            });
            break;
          case 'activity':
            getSingleActivity(city).then((res) => {
              let f = res.data.filter((data) => {
                return data.ActivityName.indexOf(this.getSearching) > -1;
              });
              this.getActivity(f);
            });
            break;
        }
      } else {
        switch (this.getcheckCategory) {
          case 'landscape':
            getSingleCity(city).then((res) => {
              this.getCity(res.data);
            });
            break;
          case 'restaurant':
            getSingleRestaurant(city).then((res) => {
              this.getRestaurant(res.data);
            });
            break;
          case 'hotel':
            getSingleHotel(city).then((res) => {
              this.getHotel(res.data);
            });
            break;
          case 'activity':
            getSingleActivity(city).then((res) => {
              this.getActivity(res.data);
            });
            break;
        }
      }
    },
  },
};
</script>
