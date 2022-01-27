<template>
  <div class="Firstselect">
    <div class="Firstselect-box">
      <div class="area">
        <Select id="city"></Select>
        <font-awesome-icon icon="chevron-down" class="icon" />
      </div>
      <div class="search">
        <input type="text" class="search-box" placeholder="Search…" v-model="message" />
        <div class="search-icon" @click="nothingClick">
          <font-awesome-icon icon="search" class="icon" />
        </div>
      </div>
      <div class="category">
        <h2>Category…</h2>
        <div class="category-box">
          <router-link
            v-for="data in linkDatas"
            :key="data.name"
            :to="getNowCityName ? data.url : ''"
            v-html="data.cnName"
            class="card"
            @click="checkCityValue({type: data.name})"
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
import { mapGetters, mapActions, mapMutations } from 'vuex';
import select from '@/components/UI/select.vue';
export default {
  components: {
    Select: select,
  },
  computed: {
    ...mapGetters('city', ['linkDatas', 'getNowCityName', 'getcheckCategory']),
    ...mapGetters(['getSearching']),
    message: {
      get() {
        return this.getSearching;
      },
      set(val) {
        this.checkingSearch(val);
      },
    },
  },
  methods: {
    ...mapActions('city', ['getsomething']),
    ...mapMutations('city', ['checkCategory']),
    ...mapMutations(['checkingSearch']),
    nothingClick() {
      if (!this.getcheckCategory) {
        alert('先選類別唷');
        return
      }
    },
    checkCityValue(data) {
      if (this.getNowCityName == null) {
        alert('請選擇地區');
        return;
      }else{
        this.checkCategory(data)
      }
    },
  },
};
</script>
