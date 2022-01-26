<template>
  <router-link class="card" v-for="(activityData, index) in getActivityDatas" :key="index" :to="'/activity/' + activityData.ActivityID">
    <div class="img">
      <img
        :src="activityData.Picture.PictureUrl1 ? activityData.Picture.PictureUrl1 : ''"
        :alt="activityData.Picture.PictureDescription1 ? activityData.Picture.PictureDescription1 : '尚未提供'"
      />
    </div>
    <div class="textbox">
      <div class="where" v-html="activityData.ActivityName"></div>
      <div class="describe" v-html="activityData.Description"></div>
      <div class="phone">
        <font-awesome-icon icon="mobile" class="icon" />
        {{ activityData.Address }}
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
  props: ['getActivityDatas', 'filterContent', 'isFilter'],
  computed: {
    ...mapGetters('city', ['getNowCityName']),
    ...mapGetters(['getSearching']),
  },
};
</script>
