<template>
  <div class="Firstselect">
    <div class="Firstselect-box">
      <div class="area">
        <Select id="city"></Select>
        <font-awesome-icon icon="chevron-down" class="icon" />
      </div>
      <div class="search">
        <input type="text" class="search-box" placeholder="Search…" />
        <div class="search-icon"><font-awesome-icon icon="search" class="icon" /></div>
      </div>
      <div class="category">
        <h2>Category…</h2>
        <div class="category-box">
          <router-link 
          v-for="data in linkDatas" 
          :key="data.name" 
          :to="data.url" 
          v-html="data.cnName" class="card"
          @click="checkCategory({type: data.name})"
          >
          </router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss">
@import '@/assets/styles/Firstselect/_index.scss';
</style>

<script>
import { mapMutations, mapGetters } from 'vuex';
import select from '@/components/select.vue';
export default {
  components: {
    Select: select,
  },
  computed: {
    ...mapGetters(['linkDatas']),
  },
  methods: {
    ...mapMutations(['checkCategory']),
  },
};
</script>
