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

<style lang="scss">
@import '@/assets/styles/category/_restaurant.scss';
</style>

<script>
import header from '@/components/UI/header.vue';
import restaurantCard from '@/components/foodCard.vue';
import situationOne from '@/components/situationOne.vue';
import situationTwo from '@/components/situationTwo.vue';
import { mapGetters } from 'vuex';
export default {
  components: {
    Header: header,
    restaurantCard,
    situationOne,
    situationTwo,
  },
  computed: {
    ...mapGetters('city', ['getRestaurantDatas']),
  },
};
</script>
