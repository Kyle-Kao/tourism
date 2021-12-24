<template>
  <div>
    <router-view></router-view>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  // methods: {
  //   ...mapActions(["testApi"]),
  // },
  computed: {
    ...mapGetters(["getAllData"]),
  },
};
</script>