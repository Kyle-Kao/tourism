<template>
  <div>
    <div v-if="getSearching">
      <div v-if="filterDatas">
        <router-link
          class="card"
          v-for="(filter, index) in filterDatas"
          :key="index"
          :to="'/activity/' + filter.ActivityID"
        >
          <div class="img">
            <img
              :src="
                filter.Picture.PictureUrl1 ? filter.Picture.PictureUrl1 : ''
              "
              :alt="
                filter.Picture.PictureDescription1
                  ? filter.Picture.PictureDescription1
                  : '尚未提供'
              "
            />
          </div>
          <div class="textbox">
            <div class="where" v-html="filter.ActivityName"></div>
            <div class="describe" v-html="filter.Description"></div>
            <div class="phone">
              <font-awesome-icon icon="mobile" class="icon" />
              {{ filter.Address }}
            </div>
          </div>
        </router-link>
      </div>
    </div>
    <div v-else>
      <router-link
        class="card"
        v-for="(activityData, index) in getActivityDatas"
        :key="index"
        :to="'/activity/' + activityData.ActivityID"
      >
        <div class="img">
          <img
            :src="
              activityData.Picture.PictureUrl1
                ? activityData.Picture.PictureUrl1
                : ''
            "
            :alt="
              activityData.Picture.PictureDescription1
                ? activityData.Picture.PictureDescription1
                : '尚未提供'
            "
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
    </div>
  </div>
</template>

<style lang="scss">
@import '@/assets/styles/components/_place.scss';
</style>

<script>
import { mapGetters } from 'vuex';
export default {
  data() {
    return {
      filterDatas: [],
    };
  },
  created() {
    this.filter();
  },
  computed: {
    ...mapGetters('city', ['getActivityDatas']),
    ...mapGetters(['getSearching']),
  },
  methods: {
    filter() {
      console.log(this.getSearching)
      this.filterDatas = this.getActivityDatas.filter((data) => {
        return data.ActivityName.indexOf(this.getSearching) > -1;
      });
      console.log(this.filterDatas)
    },
  },
};
</script>
