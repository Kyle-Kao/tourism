<template>
  <router-link class="card" v-for="(landScapeData, index) in getPlaceDatas" :key="index" :to="'/landScape/' + landScapeData.ScenicSpotID">
    <div class="img">
      <img :src="landScapeData.Picture.PictureUrl1" :alt="landScapeData.Picture.PictureDescription1?landScapeData.Picture.PictureDescription1: '尚未提供'" />
    </div>
    <div class="textbox">
      
      <div class="where" v-html="landScapeData.ScenicSpotName"></div>
      <div class="describe" v-html="landScapeData.DescriptionDetail"></div>
      <div class="booking" v-html="landScapeData.booking"></div>
      <div class="phone">
        <font-awesome-icon icon="mobile" class="icon" />
        {{ landScapeData.Phone }}
      </div>
    </div>
  </router-link>
</template>

<style lang="scss">
@import '@/assets/styles/components/_place.scss';
</style>

<script>
import { mapGetters,mapActions } from 'vuex';
export default {
  created(){
    this.getCity({city: this.finalCity});
    // this.getCity();
  },
  methods: {
    ...mapActions('single',["getCity"]),
  },
  computed: {
    ...mapGetters('single',['getPlaceDatas']),
    ...mapGetters('city',['finalCity']),
  },
};
</script>
