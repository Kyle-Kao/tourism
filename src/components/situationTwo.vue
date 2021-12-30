<template>
  <div class="situation2">
    <div class="search">
      <input type="text" placeholder="關鍵字查詢..." class="search-box" />
      <div class="search-icon"><font-awesome-icon icon="search" class="icon" /></div>
    </div>
    <div class="data">共 <span v-html="cityDatas.length"></span> 筆資料</div>
  </div>
</template>

<style lang="scss">
  @import '@/assets/styles/components/_situation2.scss';
</style>

<script>
import { mapGetters } from 'vuex';
export default {
  computed: {
    ...mapGetters('city', ['cityDatas']),
  },
}
</script>
