<template>
  <div>
    <router-view></router-view>
    <ul>
      <!-- 測試一輪資料看看 -->
      <li v-for="data in getAllData" :key="data.ID" v-html="data.ScenicSpotName"></li>
    </ul>
  </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";
export default {
  created() {
    this.testApi();
  },
  methods: {
    ...mapActions(["testApi"]),
  },
  computed: {
    ...mapGetters(["getAllData"]),
  },
};
</script>