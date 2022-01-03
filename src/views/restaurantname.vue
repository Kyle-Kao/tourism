<template>
  <div>
    <Header></Header>
    <div class="place">
      <div class="place-container">
        <div class="left">
          <div class="title">
            <h2 v-html="datas.RestaurantName"></h2>
            <div class="stag" v-html="datas.Class1" v-if="datas.Class1"></div>
          </div>
          <div class="img">
            <img :src="datas.Picture.PictureUrl1 ? datas.Picture.PictureUrl1 : ''" :alt="datas.Picture.PictureDescription1 ? datas.Picture.PictureDescription1 : '尚未提供'" />
          </div>
          <div class="line"></div>
          <div class="txtbox" v-html="datas.DescriptionDetail"></div>
        </div>
        <div class="right">
          <div class="tag">其他景點</div>
          <ul>
            <li v-for="(data, index) in getRestaurantDatas" :key="index">
              <div class="img">
                <img :src="data.Picture.PictureUrl1" :alt="data.Picture.PictureDescription1 ? data.Picture.PictureDescription1 : '尚未提供'" />
              </div>
              <div class="info">
                <div class="where" v-html="data.RestaurantName"></div>
                <div class="stag" v-html="data.Class1" v-if="datas.Class1"></div>
                <div class="des" v-html="data.Address"></div>
                <router-link class="detail" :to="'/restaurant/' + data.RestaurantID">詳細資訊</router-link>
              </div>
            </li>
          </ul>
          <div class="btnbox">
            <button class="prev" @click="shown('prev')">上一頁</button>
            <button class="next" @click="shown('next')">下一頁</button>
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
import { mapGetters } from 'vuex';
export default {
  components: {
    Header: header,
  },
  data() {
    return {
      datas: [],
      pageType: 'prev',
    };
  },
  created() {
    this.showUrl();
  },
  computed: {
    ...mapGetters('city', ['getRestaurantDatas']),
  },
  methods: {
    showUrl() {
      this.getRestaurantDatas.filter((arr) => {
        const path = this.$route.params.restaurantname;
        if (arr.RestaurantID.indexOf(path) > -1) {
          this.datas = arr;
        }
      });
    },
    shown(type) {
      // 比對資料
      this.getRestaurantDatas.filter((arr, index, self) => {
        // 找出與router裡ID相符的物件
        const path = this.$route.params.restaurantname;
        if (arr.RestaurantID.indexOf(path) > -1) {
          // 判斷按鈕類別
          if (type == 'prev') {
            if (index > 0) {
              // 更新datas 裡的資料
              this.datas = self[index - 1];
              // 同時切換router
              this.$router.push({ path: '/restaurant/' + this.datas.RestaurantID });
            }
          } else {
            if (index < this.getRestaurantDatas.length-1) {
              this.datas = self[index + 1];
              this.$router.push({ path: '/restaurant/' + this.datas.RestaurantID });
            }
          }
        }
      });
    },
  },

  watch: {
    // 如果router改變 會呼叫下方function
    $route: 'showUrl',
  },
};
</script>
