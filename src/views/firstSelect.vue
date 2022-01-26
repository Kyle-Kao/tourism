<template>
  <div class="Firstselect">
    <div class="Firstselect-box">
      <div class="area">
        <Select id="city"></Select>
        <font-awesome-icon icon="chevron-down" class="icon" />
      </div>
      <div class="search">
        <input type="text" class="search-box" placeholder="Search…" v-model="message" />
        <div class="search-icon" @click="nothingClick">
          <font-awesome-icon icon="search" class="icon" />
        </div>
      </div>
      <div class="category">
        <h2>Category…</h2>
        <div class="category-box">
          <router-link
            v-for="data in linkDatas"
            :key="data.name"
            :to="getNowCityName ? data.url : ''"
            v-html="data.cnName"
            class="card"
            @click="getContent({ type: data.name, city: getNowCityName })"
          >
          </router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss">
@import '@/assets/styles/Firstselect/_index.scss';
</style>

<script>
import { mapGetters, mapActions, mapMutations } from 'vuex';
import { getSingleCity, getSingleRestaurant, getSingleHotel, getSingleActivity } from '@/api/module/singleApi.js';
import select from '@/components/UI/select.vue';
export default {
  components: {
    Select: select,
  },
  computed: {
    ...mapGetters('city', ['linkDatas', 'getNowCityName', 'getcheckCategory']),
    ...mapGetters(['getSearching']),
    message: {
      get() {
        return this.getSearching;
      },
      set(val) {
        this.checkingSearch(val);
      },
    },
  },
  methods: {
    ...mapActions('city', ['getsomething']),
    ...mapMutations('city', ['checkCategory', 'getCity', 'getRestaurant', 'getHotel', 'getActivity']),
    ...mapMutations(['checkingSearch']),
    nothingClick() {
      if (!this.getcheckCategory) {
        alert('先選類別唷');
      }
    },
    getContent(data) {
      /**
       * type: checkCategory
       * city: getNowCityName
       * */
      if (data['city']) {
        if (this.getSearching) {
          switch (data.type) {
            case 'landscape':
              this.checkCategory(data);
              getSingleCity(data.city).then((res) => {
                let f = res.data.filter((data) => {
                  return data.ScenicSpotName.indexOf(this.getSearching) > -1;
                });
                this.getCity(f);
              });
              break;
            case 'restaurant':
              this.checkCategory(data);
              getSingleRestaurant(data.city).then((res) => {
                let f = res.data.filter((data) => {
                  return data.RestaurantName.indexOf(this.getSearching) > -1;
                });
                this.getRestaurant(f);
              });
              break;
            case 'hotel':
              this.checkCategory(data);
              getSingleHotel(data.city).then((res) => {
                let f = res.data.filter((data) => {
                  return data.HotelName.indexOf(this.getSearching) > -1;
                });
                this.getHotel(f);
              });
              break;
            case 'activity':
              this.checkCategory(data);
              getSingleActivity(data.city).then((res) => {
                let f = res.data.filter((data) => {
                  return data.ActivityName.indexOf(this.getSearching) > -1;
                });
                this.getActivity(f);
              });
              break;
          }
        } else {
          switch (data.type) {
            case 'landscape':
              this.checkCategory(data);
              getSingleCity(data.city).then((res) => {
                this.getCity(res.data);
              });
              break;
            case 'restaurant':
              this.checkCategory(data);
              getSingleRestaurant(data.city).then((res) => {
                this.getRestaurant(res.data);
              });
              break;
            case 'hotel':
              this.checkCategory(data);
              getSingleHotel(data.city).then((res) => {
                this.getHotel(res.data);
              });
              break;
            case 'activity':
              this.checkCategory(data);
              getSingleActivity(data.city).then((res) => {
                this.getActivity(res.data);
              });
              break;
          }
        }
      } else if (data['city'] == null) {
        alert('請選擇地區');
        return;
      }
    },
  },
};
</script>
