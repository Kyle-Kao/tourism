<template>
  <div class="situation">
    <div class="gowhere">
      <label for="selectCity">走，我們去</label>
      <Select id="selectCity"></Select>
      <font-awesome-icon icon="chevron-down" class="icon" />
    </div>
    <div class="gocategory">
      <div class="card" v-for="data in linkDatas" :key="data.name" v-html="data.cnName" :class="data.name == getcheckCategory ? 'active' : ''"></div>
    </div>
  </div>
</template>

<style lang="scss">
  @import "@/assets/styles/components/_situation1.scss";
</style>

<script>
import { mapGetters } from 'vuex';
import select from '@/components/select.vue';
export default {
  components: {
    Select: select
  },
   computed: {
    ...mapGetters(['linkDatas']),
    ...mapGetters(['getcheckCategory'])
  },
}
</script>
