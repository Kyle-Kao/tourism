<template>
  <div class="situation2">
    <div class="search">
      <input type="text" placeholder="關鍵字查詢..." class="search-box" />
      <div class="search-icon"><font-awesome-icon icon="search" class="icon" /></div>
    </div>
    <div class="data">共 
      <span> {{ length }} </span>
      筆資料
      <div class="line" :class="changeClass"></div>
      </div>
  </div>
</template>

<style lang="scss">
  @import '@/assets/styles/components/_situation2.scss';
</style>

<script>
import { mapGetters } from 'vuex';
export default {
  props:['length'],
  computed: {
    ...mapGetters('city', ['getcheckCategory']),
    changeClass(){
      return{
        'line-blue': this.getcheckCategory == 'landscape',
        'line-red': this.getcheckCategory == 'restaurant',
        'line-green': this.getcheckCategory == 'hotel',
        'line-yellow': this.getcheckCategory == 'activity',
      }
    },
  },
}
</script>
