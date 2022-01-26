<template>
  <div>
    <Header></Header>
    <div class="activity">
      <div class="activity-container">
        <situation-one></situation-one>
        <situation-two :length="getActivityDatas.length"></situation-two>
        <div class="situation3">
          <activity-card :getActivityDatas="getActivityDatas" :filterContent="filterDatas"></activity-card>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss">
  @import '@/assets/styles/category/_activity.scss';
</style>

<script>
import header from '@/components/UI/header.vue';
import activityCard from '@/components/activityCard.vue';
import situationOne from '@/components/situationOne.vue'
import situationTwo from '@/components/situationTwo.vue'
import { mapGetters } from 'vuex';
export default {
  components: {
    Header: header,
    activityCard,
    situationOne,
    situationTwo
  },
  computed:{
    ...mapGetters('city',['getActivityDatas', 'getNowCityName']),
    ...mapGetters(['getSearching']),
  },
}
</script>