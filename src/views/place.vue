<template>
  <div>
    <Header></Header>
    <div class="place">
      <div class="place-container">
        <div class="left">
          <div class="title">
            <h2 v-html="datas.ScenicSpotName"></h2>
            <div class="stag" v-html="datas.Class1" v-if="datas.Class1"></div>
          </div>
          <img :src="datas.Picture.PictureUrl1" :alt="datas.Picture.PictureDescription1 ? datas.Picture.PictureDescription1 : '尚未提供'" />
          <div class="line"></div>
          <div class="txtbox" v-html="datas.DescriptionDetail"></div>
        </div>
        <div class="right">
          <div class="tag">其他景點</div>
          <ul>
            <li v-for="(data, index) in getPlaceDatas" :key="index">
              <div class="img">
                <img :src="data.Picture.PictureUrl1" :alt="data.Picture.PictureDescription1 ? data.Picture.PictureDescription1 : '尚未提供'" />
              </div>
              <div class="info">
                <div class="where" v-html="data.ScenicSpotName"></div>
                <div class="stag" v-html="data.Class1" v-if="datas.Class1"></div>
                <div class="des" v-html="data.Address"></div>
                <router-link class="detail" :to="'/landScape/' + data.ScenicSpotID">詳細資訊</router-link>
              </div>
            </li>
          </ul>
          <div class="btnbox">
            <button class="prev">上一頁</button>
            <button class="next">下一頁</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss">
@import '@/assets/styles/place/_index.scss';
</style>

<script>
import header from '@/components/header.vue';
import { mapGetters, mapActions } from 'vuex';
export default {
  components: {
    Header: header,
  },
  data() {
    return {
      datas: [],
    };
  },
  created() {
    this.getCity({ city: this.finalCity });
    this.showUrl();
  },
  computed: {
    ...mapGetters('single', ['getPlaceDatas']),
    ...mapGetters('city', ['finalCity']),
  },
  methods: {
    ...mapActions('single', ['getCity']),
    showUrl() {
      this.getPlaceDatas.filter((arr) => {
        const path = window.location.pathname.split('/')[2];
        if (arr.ScenicSpotID.indexOf(path) > -1) {
          this.datas = arr;
        }
        // console.log(this.datas)
      });
    },
  },
  // beforeRouteEnter (to, from, next) {
  //   console.log(to.params.place)
  //   next()
  // },
  watch: {
    $route(to, from) {
      let toPath = to.path;
      let fromPath = from.path;
      console.log(to.path);
      if (toPath != fromPath) {
        this.showUrl();
      }
    },
  },
};
</script>
