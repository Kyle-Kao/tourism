<template>
  <div>
    <Header></Header>
    <div class="place">
      <div class="place-container">
        <button @click="showUrl">click</button>
        <div class="left">
          <div class="title">
            <h2>猫囒山茶業改良場</h2>
            <div class="stag">遊憩類</div>
          </div>
          <img src="" alt="" />
          <div class="line"></div>
          <div class="txtbox">
            2006年3月11日開幕的福德水車園區，是三芝水車文化景觀中最大的水車園區，座落於三芝區鬧區南側，三芝遊客中心對面，佔地近0.6公頃。沿著環園步道，除了有以高架引水道空中給水以帶動水車運行的大型引導式木造水車之外，還有一座用來維護水源乾淨的沉砂池，可以欣賞到多樣化的水車景觀及隨著四季舞弄風情的繽紛植物。穿越紅色景觀橋，即可一覽八連溪兩岸風光。 此處結合『觀光』、『生態』、『健康』三大主題，不僅可享受山林鳥野間純淨的氣息，周圍所視更是盈盈綠意、處處生機。 如藝術品般散落於三芝各地的水車造景，靜靜緩慢地一格一格順水轉動著，不僅訴說著早期農業發展的歷程與痕跡，也多了一份靜謐和知性的氛圍。
          </div>
        </div>
        <div class="right">
          <div class="tag">其他景點</div>
          <ul>
            <li>
              <img src="" alt="">
              <div class="info">
                <div class="where">猫囒山步道</div>
                <div class="stag">遊憩類</div>
                <div class="des">南投縣555魚池鄉中山路29 2號</div>
                <div class="detail">詳細資訊</div>
              </div>
            </li>
            <li>
              <img src="" alt="">
              <div class="info">
                <div class="where">猫囒山步道</div>
                <div class="stag">遊憩類</div>
                <div class="des">南投縣555魚池鄉中山路29 2號</div>
                <div class="detail">詳細資訊</div>
              </div>
            </li>
            <li>
              <img src="" alt="">
              <div class="info">
                
                <div class="where">猫囒山步道</div>
                <div class="stag">遊憩類</div>
                <div class="des">南投縣555魚池鄉中山路29 2號</div>
                <div class="detail">詳細資訊</div>
              </div>
            </li>
          </ul>
          <div class="btnbox">
            <button class="prev">上一頁</button>
            <button class="next">下一頁</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss">
@import '@/assets/styles/place/_index.scss';
</style>

<script>
import header from '@/components/header.vue';
import { mapGetters,mapActions } from 'vuex';
export default {
  components: {
    Header: header,
  },
  data(){
    return{
      datas:[],
    }
  },
  created(){
    this.getCity()
  },
  computed:{
    ...mapGetters('single',['getPlaceDatas'])
  },
  methods: {
    ...mapActions('single',["getCity"]),
    showUrl(){
      // console.log(window.location.pathname , this.getPlaceDatas)
      this.getPlaceDatas.filter((arr,self)=>{
        // return arr.ID.indexOf('window.location.pathname.split('/')[2]')
        const path = window.location.pathname.split('/')[2]
        if(arr.ID.indexOf(path)> -1){
          console.log(self)
        }
        // console.log(arr.ID.indexOf(path))
      })
    },
    
  },
};
</script>
