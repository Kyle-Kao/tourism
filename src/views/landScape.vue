<template>
  <div>
    <Header></Header>
    <div class="landscape">
      <div class="landscape-container">
        <div class="situation">
          <div class="gowhere">
            <label for="selectCity">走，我們去</label>
            <select name="city" id="selectCity">
              <option value="0">— choose an option —</option>
              <option :value="cityData.value" v-for="cityData in cityDatas" :key="cityData.name" v-html="cityData.name"></option>
            </select>
            <font-awesome-icon icon="chevron-down" class="icon" />
          </div>
          <div class="gocategory">
            <div class="card active">景點類</div>
            <div class="card">餐飲類</div>
            <div class="card">旅宿類</div>
            <div class="card">活動類</div>
          </div>
        </div>
        <div class="situation2">
          <div class="search">
            <input type="text" placeholder="關鍵字查詢..." class="search-box" />
            <div class="search-icon"><font-awesome-icon icon="search" class="icon" /></div>
          </div>
          <div class="data">共 <span>365</span> 筆資料</div>
        </div>
        <div class="situation3">
          <ScapeCard></ScapeCard>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss">
@import '@/assets/styles/landScape/_index.scss';
</style>

<script>
import { mapGetters } from 'vuex';
import header from '@/components/header.vue';
import scapeCard from '@/components/scapeCard.vue';
export default {
  components: {
    Header: header,
    ScapeCard: scapeCard,
  },
  computed: {
    ...mapGetters('city',['cityDatas']),
    ...mapGetters(['finalCity'])
  },
  methods: {
  },
};
</script>
