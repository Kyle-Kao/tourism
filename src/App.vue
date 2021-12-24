<template>
  <div>
    <router-view></router-view>
    <button @click="getCity">city</button>
  </div>
</template>

<script>
import { mapGetters , mapActions } from "vuex";
export default {
  methods: {
    ...mapActions(["getCity"]),
  },
  computed: {
    ...mapGetters(["getAllData"]),
  },
};
</script>
