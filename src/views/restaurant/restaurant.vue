<template>
  <div>
    <Header></Header>
    <div class="restaurant">
      <div class="restaurant-container">
        <situation-one></situation-one>
        <situation-two :length="getRestaurantDatas.length"></situation-two>
        <div class="situation3">
          <restaurant-card :getRestaurantDatas="getRestaurantDatas"></restaurant-card>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" src="@/assets/styles/category/_restaurant.scss"></style>

<script>
import header from '@/components/UI/header.vue';
import restaurantCard from '@/components/foodCard.vue';
import situationOne from '@/components/situationOne.vue';
import situationTwo from '@/components/situationTwo.vue';
import { mapGetters , mapMutations } from 'vuex';
import { getSingleRestaurant } from '@/api/module/singleApi.js';
export default {
  components: {
    Header: header,
    restaurantCard,
    situationOne,
    situationTwo,
  },
  computed: {
    ...mapGetters('city', ['getRestaurantDatas', 'getNowCityName']),
    ...mapGetters(['getSearching']),
  },
  created() {
    this.getData();
  },
  methods: {
    ...mapMutations('city', ['getRestaurant']),
    getData() {
      if (this.getSearching) {
        getSingleRestaurant(this.getNowCityName).then((res) => {
          let f = res.data.filter((data) => {
            return data.ActivityName.indexOf(this.getSearching) > -1;
          });
          this.getRestaurant(f);
        });
      } else {
        getSingleRestaurant(this.getNowCityName).then((res) => {
          this.getRestaurant(res.data);
        });
      }
    },
  },
};
</script>
