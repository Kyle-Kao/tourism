<template>
  <div>
    <Header></Header>
    <div class="hotel">
      <div class="hotel-container">
        <situation-one></situation-one>
        <situation-two></situation-two>
        <div class="situation3">
          <hotel-card></hotel-card>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss">
  @import '@/assets/styles/hotel/_index.scss';
</style>

<script>
import header from '@/components/header.vue';
import hotelCard from '@/components/hotelCard.vue';
import situationOne from '@/components/situationOne.vue'
import situationTwo from '@/components/situationTwo.vue'
export default {
  components: {
    Header: header,
    hotelCard,
    situationOne,
    situationTwo
  },
}
</script>