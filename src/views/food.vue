<template>
  <div>
    <Header></Header>
    <div class="food">
      <div class="food-container">
        <situation-one></situation-one>
        <situation-two></situation-two>
        <div class="situation3">
          <food-card></food-card>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss">
  @import '@/assets/styles/food/_index.scss';
</style>

<script>
import header from '@/components/header.vue';
import foodCard from '@/components/foodCard.vue';
import situationOne from '@/components/situationOne.vue'
import situationTwo from '@/components/situationTwo.vue'
export default {
  components: {
    Header: header,
    foodCard,
    situationOne,
    situationTwo
  },
}
</script>