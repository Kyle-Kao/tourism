<template>
  <div>
    <Header></Header>
    <div class="hotel">
      <div class="hotel-container">
        <situation-one></situation-one>
        <situation-two :length="getHotelDatas.length"></situation-two>
        <div class="situation3">
          <hotel-card :getHotelDatas="getHotelDatas"></hotel-card>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss">
  @import '@/assets/styles/category/_hotel.scss';
</style>

<script>
import header from '@/components/UI/header.vue';
import hotelCard from '@/components/hotelCard.vue';
import situationOne from '@/components/situationOne.vue'
import situationTwo from '@/components/situationTwo.vue'
import { mapGetters, mapMutations } from 'vuex';
import { getSingleHotel } from '@/api/module/singleApi.js';
export default {
  components: {
    Header: header,
    hotelCard,
    situationOne,
    situationTwo
  },
  computed:{
    ...mapGetters('city',['getHotelDatas', 'getNowCityName']),
    ...mapGetters(['getSearching']),
  },
  created(){
    this.getData()
  },
  methods: {
    ...mapMutations('city', ['getHotel']),
    getData() {
      if (this.getSearching) {
        getSingleHotel(this.getNowCityName).then((res) => {
          let f = res.data.filter((data) => {
            return data.HotelName.indexOf(this.getSearching) > -1;
          });
          this.getHotel(f);
        });
      } else {
        getSingleHotel(this.getNowCityName).then((res) => {
          this.getHotel(res.data);
        });
      }
    },
  },
}
</script>