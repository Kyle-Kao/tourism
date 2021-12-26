<template>
  <div>
    <router-view></router-view>
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
