<template>
  <select name="city" @change="showValue">
    <option value="0">— choose an option —</option>
    <option :value="cityData.value" v-for="cityData in cityDatas" :key="cityData.name" v-html="cityData.name"></option>
  </select>
</template>

<script>
import { mapGetters, mapActions, mapMutations} from 'vuex';
export default {
  computed: {
    ...mapGetters('city', ['cityDatas']),
  },
  methods: {
    ...mapActions('single', ['getCity']),
    ...mapActions('single', ['getFood']),
    ...mapMutations('city',['getNowCity']),
    // 儲存城市
    showValue(e) {
      this.getNowCity({city: e.target.value})
    },
  },
};
</script>
