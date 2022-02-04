<template>
  <div>
    <Header></Header>
    <div class="activity">
      <div class="activity-container">
        <situation-one></situation-one>
        <situation-two :length="getActivityDatas.length"></situation-two>
        <div class="situation3">
          <activity-card :getActivityDatas="getActivityDatas"></activity-card>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" src="@/assets/styles/category/_activity.scss"></style>

<script>
import header from '@/components/UI/header.vue';
import activityCard from '@/components/activityCard.vue';
import situationOne from '@/components/situationOne.vue';
import situationTwo from '@/components/situationTwo.vue';
import { mapGetters, mapMutations } from 'vuex';
import { getSingleActivity } from '@/api/module/singleApi.js';
export default {
  components: {
    Header: header,
    activityCard,
    situationOne,
    situationTwo,
  },
  data() {
    return {
      activityArr: [],
    };
  },
  computed: {
    ...mapGetters('city', ['getActivityDatas', 'getNowCityName']),
    ...mapGetters(['getSearching']),
  },
  created() {
    this.getData();
  },
  methods: {
    ...mapMutations('city', ['getActivity']),
    getData() {
      if (this.getSearching) {
        getSingleActivity(this.getNowCityName).then((res) => {
          let f = res.data.filter((data) => {
            return data.ActivityName.indexOf(this.getSearching) > -1;
          });
          this.getActivity(f);
        });
      } else {
        getSingleActivity(this.getNowCityName).then((res) => {
          this.getActivity(res.data);
        });
      }
    },
  },
};
</script>
