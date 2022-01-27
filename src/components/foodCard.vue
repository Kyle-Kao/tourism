<template>
  <router-link class="card" v-for="(foodData, index) in getRestaurantDatas" :key="index" :to="'/restaurant/' + foodData.RestaurantID">
    <div class="img">
      <img :src="foodData.Picture.PictureUrl1?foodData.Picture.PictureUrl1: ''" :alt="foodData.Picture.PictureDescription1?foodData.Picture.PictureDescription1: '尚未提供'" />
    </div>
    <div class="textbox">
      
      <div class="where" v-html="foodData.RestaurantName"></div>
      <div class="describe" v-html="foodData.Description"></div>
      <!-- <div class="booking" v-html="foodData.booking"></div> -->
      <div class="phone">
        <font-awesome-icon icon="mobile" class="icon" />
        {{ foodData.Phone }}
      </div>
    </div>
  </router-link>
</template>

<style lang="scss">
@import '@/assets/styles/components/_place.scss';
</style>

<script>
export default {
  props:['getRestaurantDatas'],
};
</script>
