<template>
  <div class="situation2">
    <div class="search">
      <input type="text" placeholder="Search..." class="search-box" v-model="message" />
      <div class="search-icon"><font-awesome-icon icon="search" class="icon" /></div>
    </div>
    <div class="doubleData">
      <div class="searching" v-if="getSearching">與 <span :class="changeTxtClass">{{ getSearching }}</span> 有關</div>
      <div class="data">共 
      <span> {{ length }} </span>
      筆資料
      <div class="line" :class="changeClass"></div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" src="@/assets/styles/components/_situation2.scss"></style>

<script>
import { mapGetters, mapMutations } from 'vuex';
export default {
  props:['length'],
  computed: {
    ...mapGetters('city', ['getcheckCategory']),
    ...mapGetters(['getSearching']),
    changeClass(){
      return{
        'line-blue': this.getcheckCategory == 'landscape',
        'line-red': this.getcheckCategory == 'restaurant',
        'line-green': this.getcheckCategory == 'hotel',
        'line-yellow': this.getcheckCategory == 'activity',
      }
    },
    changeTxtClass(){
      return{
        'line-blue-txt': this.getcheckCategory == 'landscape',
        'line-red-txt': this.getcheckCategory == 'restaurant',
        'line-green-txt': this.getcheckCategory == 'hotel',
        'line-yellow-txt': this.getcheckCategory == 'activity',
      }
    },
    message:{
      get(){
        return this.getSearching
      },
      set(val){
        this.checkingSearch(val)
      }
    }
  },
  methods: {
    ...mapMutations(['checkingSearch'])
  },
}
</script>
