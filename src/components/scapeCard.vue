<template>
  <router-link class="card" v-for="(landScapeData, index) in getPlaceDatas" :key="index" :to="'/landScape/' + finalCity">
    <div class="img">
      <img :src="landScapeData.Picture.PictureUrl1" :alt="landScapeData.Picture.PictureDescription1" />
    </div>
    <div class="textbox">
      <div class="where" v-html="landScapeData.Name"></div>
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
    this.getCity();
  },
  methods: {
    ...mapActions('single',["getCity"]),
  },
  computed: {
    ...mapGetters('single',['getPlaceDatas']),
    ...mapGetters(['finalCity']),
  },
};
</script>
