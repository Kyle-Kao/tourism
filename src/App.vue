<template>
  <div>
    <router-view></router-view>
  </div>
</template>

<script>
import { mapGetters , mapActions } from "vuex";
export default {
  // created(){ 
  //   // 在頁面重新整理時將vuex裡的資訊儲存到localStorage裡 
  //   window.addEventListener("beforeunload",()=>{ 
  //     localStorage.setItem("messageStore",this.finalCity) 
  //     }) 
  // },
  methods: {
    ...mapActions(["getCity"]),
  },
  computed: {
    ...mapGetters(["getAllData"]),
    ...mapGetters('city',["finalCity"]),
  },
};
</script>
