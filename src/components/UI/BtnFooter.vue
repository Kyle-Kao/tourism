<template>
  <footer>
    <div class="btn-boxM">
      <button class="prev" @click="shown({ type: 'prev', category: getcheckCategory })">上一頁</button>
      <button class="next" @click="shown({ type: 'next', category: getcheckCategory })">下一頁</button>
    </div>
  </footer>
</template>

<style lang="scss" src="@/assets/styles/components/UI/_BtnFooter.scss"></style>

<script>
import { mapGetters } from 'vuex';
export default {
  data() {
    return {  
      datas: [],
      pageType: 'prev',
    };
  },
  created() {
    this.showUrl({ category: this.getcheckCategory });
  },
  computed: {
    ...mapGetters('city', ['getRestaurantDatas', 'getcheckCategory', 'getPlaceDatas', 'getHotelDatas', 'getActivityDatas']),
  },
  methods: {
    showUrl(data) {
      switch (data.category) {
        case 'landscape':
          this.getPlaceDatas.filter((arr) => {
            const path = this.$route.params.place;
            if (arr.ScenicSpotID.indexOf(path) > -1) {
              this.datas = arr;
            }
          });
          break;
        case 'restaurant':
          this.getRestaurantDatas.filter((arr) => {
            const path = this.$route.params.restaurantname;
            if (arr.RestaurantID.indexOf(path) > -1) {
              this.datas = arr;
            }
          });
          break;
        case 'hotel':
          this.getHotelDatas.filter((arr) => {
            const path = this.$route.params.hotelname;
            if (arr.HotelID.indexOf(path) > -1) {
              this.datas = arr;
            }
          });
          break;
        case 'activity':
          this.getActivityDatas.filter((arr) => {
            const path = this.$route.params.activityname;
            if (arr.ActivityID.indexOf(path) > -1) {
              this.datas = arr;
            }
          });
          break;
      }
    },
    shown(data) {
      switch (data.category) {
        /*
        // 找出與router裡ID相符的物件
        // 判斷按鈕類別
        // 更新datas 裡的資料
        // 同時切換router
        */
        case 'landscape':
          this.getPlaceDatas.filter((arr, index, self) => {
            const path = this.$route.params.place;
            if (arr.ScenicSpotID.indexOf(path) > -1) {
              if (data.type == 'prev') {
                if (index > 0) {
                  this.datas = self[index - 1];
                  this.$router.push({ path: '/landscape/' + this.datas.ScenicSpotID });
                }
              } else {
                if (index < this.getPlaceDatas.length - 1) {
                  this.datas = self[index + 1];
                  this.$router.push({ path: '/landscape/' + this.datas.ScenicSpotID });
                }
              }
            }
          });
          break;
        case 'restaurant':
          this.getRestaurantDatas.filter((arr, index, self) => {
            const path = this.$route.params.restaurantname;
            if (arr.RestaurantID.indexOf(path) > -1) {
              if (data.type == 'prev') {
                if (index > 0) {
                  this.datas = self[index - 1];
                  this.$router.push({ path: '/restaurant/' + this.datas.RestaurantID });
                }
              } else {
                if (index < this.getRestaurantDatas.length - 1) {
                  this.datas = self[index + 1];
                  this.$router.push({ path: '/restaurant/' + this.datas.RestaurantID });
                }
              }
            }
          });
          break;
        case 'hotel':
          this.getHotelDatas.filter((arr, index, self) => {
            const path = this.$route.params.hotelname;
            if (arr.HotelID.indexOf(path) > -1) {
              if (data.type == 'prev') {
                if (index > 0) {
                  this.datas = self[index - 1];
                  this.$router.push({ path: '/hotel/' + this.datas.HotelID });
                }
              } else {
                if (index < this.getHotelDatas.length - 1) {
                  this.datas = self[index + 1];
                  this.$router.push({ path: '/hotel/' + this.datas.HotelID });
                }
              }
            }
          });
          break;
        case 'activity':
          this.getActivityDatas.filter((arr, index, self) => {
            const path = this.$route.params.activityname;
            if (arr.ActivityID.indexOf(path) > -1) {
              if (data.type == 'prev') {
                if (index > 0) {
                  this.datas = self[index - 1];
                  this.$router.push({ path: '/activity/' + this.datas.ActivityID });
                }
              } else {
                if (index < this.getActivityDatas.length - 1) {
                  this.datas = self[index + 1];
                  this.$router.push({ path: '/activity/' + this.datas.ActivityID });
                }
              }
            }
          });
          break;
      }
    },
  },

  watch: {
    // 如果router改變 會呼叫下方function
    $route: 'showUrl',
  },
};
</script>
