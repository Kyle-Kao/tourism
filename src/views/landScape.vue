<template>
  <div>
    <Header></Header>
    <div class="landscape">
      <div class="landscape-container">
        <situation-one></situation-one>
        <situation-two></situation-two>
        <div class="situation3">
          <ScapeCard></ScapeCard>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss">
@import '@/assets/styles/landScape/_index.scss';
</style>

<script>
import header from '@/components/header.vue';
import scapeCard from '@/components/scapeCard.vue';
import situationOne from '@/components/situationOne.vue'
import situationTwo from '@/components/situationTwo.vue'
export default {
  components: {
    Header: header,
    ScapeCard: scapeCard,
    situationOne,
    situationTwo
  },
};
</script>
