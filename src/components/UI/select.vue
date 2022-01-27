<template>
  <select name="city" @change="showValue">
    <option value="0" v-if="!isM">— choose an option —</option>
    <option value="1" v-if="isM">choose...</option>
    <option :value="cityData.value" v-for="cityData in cityDatas" :key="cityData.name" v-html="cityData.name"></option>
  </select>
</template>

<script>
import { mapGetters, mapMutations } from 'vuex';
export default {
  data() {
    return {
      isM: true,
    };
  },
  created() {
    this.checkM();
  },
  computed: {
    ...mapGetters('city', ['cityDatas', 'getNowCityName']),
  },
  methods: {
    ...mapMutations('city', ['getNowCity', 'getCity', 'getRestaurant', 'getHotel', 'getActivity']),
    // 儲存城市
    showValue(e) {
      this.getNowCity({ city: e.target.value });
      this.$emit('checkCity', this.getNowCityName)
    },
    checkM() {
      if (window.innerWidth < 768) {
        this.isM = true;
      } else {
        this.isM = false;
      }
    },
  },
};
</script>
