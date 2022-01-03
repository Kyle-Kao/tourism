<template>
  <div>
    <Header></Header>
    <div class="restaurant">
      <div class="restaurant-container">
        <situation-one></situation-one>
        <situation-two></situation-two>
        <div class="situation3">
          <restaurant-card></restaurant-card>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss">
  @import '@/assets/styles/restaurant/_index.scss';
</style>

<script>
import header from '@/components/header.vue';
import restaurantCard from '@/components/foodCard.vue';
import situationOne from '@/components/situationOne.vue'
import situationTwo from '@/components/situationTwo.vue'
export default {
  components: {
    Header: header,
    restaurantCard,
    situationOne,
    situationTwo
  },
}
</script>