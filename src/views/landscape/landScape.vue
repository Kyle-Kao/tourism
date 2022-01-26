<template>
  <div>
    <Header></Header>
    <div class="landscape">
      <div class="landscape-container">
        <situation-one></situation-one>
        <situation-two :length="getPlaceDatas.length"></situation-two>
        <div class="situation3">
          <ScapeCard :getPlaceDatas="getPlaceDatas"></ScapeCard>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss">
@import '@/assets/styles/category/_landscape.scss';
</style>

<script>
import header from '@/components/UI/header.vue';
import scapeCard from '@/components/scapeCard.vue';
import situationOne from '@/components/situationOne.vue'
import situationTwo from '@/components/situationTwo.vue'
import { mapGetters } from 'vuex';
export default {
  components: {
    Header: header,
    ScapeCard: scapeCard,
    situationOne,
    situationTwo
  },
  computed:{
    ...mapGetters('city', ['getPlaceDatas']),
  },
};
</script>
