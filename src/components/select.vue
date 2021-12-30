<template>
  <select  name="city" @change="showValue">
    <option value="0">— choose an option —</option>
    <option :value="cityData.value" v-for="cityData in cityDatas" :key="cityData.name" v-html="cityData.name"></option>
  </select>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';
export default {
  computed: {
    ...mapGetters('city', ['cityDatas']),
  },
  methods: {
    ...mapActions('single',['getCity']),
    // 這這時候產出各個城市的資料
    showValue(e){
      this.getCity({city: e.target.value})
    }
  },
};
</script>
