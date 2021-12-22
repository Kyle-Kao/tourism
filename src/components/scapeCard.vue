<template>
  <router-link class="card" v-for="(placeData, index) in placeDatas" :key="index" :to="'/landScape/' + placeData.name">
    <div class="img">
      <img src="" alt="" />
    </div>
    <div class="textbox">
      <div class="where" v-html="placeData.cnName"></div>
      <div class="describe" v-html="placeData.des"></div>
      <div class="booking" v-html="placeData.booking"></div>
      <div class="phone">
        <font-awesome-icon icon="mobile" class="icon" />
        {{ placeData.phone }}
      </div>
    </div>
  </router-link>
</template>

<style lang="scss">
@import '@/assets/styles/components/_place.scss';
</style>

<script>
import { mapGetters } from 'vuex';
export default {
  computed: {
    ...mapGetters(['placeDatas']),
  },
};
</script>
