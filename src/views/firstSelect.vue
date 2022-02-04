<template>
<!-- css in js -->
  <div :class="$style.Firstselect">
    <div :class="$style['Firstselect-box']">
      <div :class="$style.area">
        <Select id="city" :class="$style.city"></Select>
        <font-awesome-icon icon="chevron-down" :class="$style.icon" />
      </div>
      <div :class="$style.search">
        <input type="text" :class="$style['search-box']" placeholder="Search…" v-model="message" />
        <div :class="$style['search-icon']" @click="nothingClick">
          <font-awesome-icon icon="search" :class="$style.icon" />
        </div>
      </div>
      <div :class="$style.category">
        <h2>Category…</h2>
        <div :class="$style['category-box']">
          <router-link
            v-for="data in linkDatas"
            :key="data.name"
            :to="getNowCityName ? data.url : ''"
            v-html="data.cnName"
            :class="$style.card"
            @click="checkCityValue({type: data.name})"
          >
          </router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" src="@/assets/styles/firstselect/index.scss" module></style>

<script>
import { mapGetters, mapActions, mapMutations } from 'vuex';
import select from '@/components/UI/select.vue';
export default {
  components: {
    Select: select,
  },
  created() {
    this.log()
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
    log(){
    console.log(this.$style)
    },
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
