<template>
  <router-link class="card" v-for="(hotelData, index) in getHotelDatas" :key="index" :to="'/hotel/' + hotelData.HotelID">
    <div class="img">
      <img :src="hotelData.Picture.PictureUrl1?hotelData.Picture.PictureUrl1: ''" :alt="hotelData.Picture.PictureDescription1?hotelData.Picture.PictureDescription1: '尚未提供'" />
    </div>
    <div class="textbox">
      
      <div class="where" v-html="hotelData.HotelName"></div>
      <div class="describe" v-html="hotelData.Description"></div>
      <!-- <div class="booking" v-html="hotelData.booking"></div> -->
      <div class="phone">
        <font-awesome-icon icon="mobile" class="icon" />
        {{ hotelData.Phone }}
      </div>
    </div>
  </router-link>
</template>

<style lang="scss">
@import '@/assets/styles/components/_place.scss';
</style>

<script>
export default {
  props:['getHotelDatas'],
};
</script>
