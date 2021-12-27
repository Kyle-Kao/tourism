<template>
  <div class="Firstselect">
    <div class="Firstselect-box">
      <div class="area">
        <select name="city" id="city" @change="showValue({city:this.$refs.city})" ref="city">
          <option value="0">— choose an option —</option>
          <option :value="cityData.value" v-for="cityData in cityDatas" :key="cityData.name" v-html="cityData.name"></option>
        </select>
        <font-awesome-icon icon="chevron-down" class="icon" />
      </div>
      <div class="search">
        <input type="text" class="search-box" placeholder="Search…" />
        <div class="search-icon"><font-awesome-icon icon="search" class="icon" /></div>
      </div>
      <div class="category">
        <h2>Category…</h2>
        <div class="category-box">
          <router-link class="card" to="/landscape" @click="getCity({city: finalCity})">景點類</router-link>
          <router-link class="card" to="/food">餐飲類</router-link>
          <router-link class="card" to="/lodging">旅宿類</router-link>
          <router-link class="card" to="/activity">活動類</router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss">
@import '@/assets/styles/Firstselect/_index.scss';
</style>

<script>
  import { mapGetters, mapActions,mapMutations } from 'vuex';
export default {
  computed: {
    ...mapGetters('city',['cityDatas']),
    ...mapGetters('city',['finalCity'])
  },
  methods: {
    ...mapMutations('city',['showValue']),
    ...mapActions('single',['getCity']),
  },
};
</script>
