<template>
  <div>
    <top-header></top-header>
    <div class="backstageInfo">
      <el-tabs v-model="activeName" type="border-card" @tab-click="handleClick">
        <template v-if="[1,2,3,5,6,7,8,33].indexOf(this.$store.getters.roles.userIndex)>=0">
          <el-tab-pane label="体验卡激活" name="second">
            <add-activate-card :activateData='activateData'></add-activate-card>
          </el-tab-pane>
          <el-tab-pane label="会员卡审核" name="first">
            <card></card>
          </el-tab-pane>
        </template>
        <template v-if="[1,2,32,5,6,7,8,33].indexOf(this.$store.getters.roles.userIndex)>=0">
          <el-tab-pane label="红娘后台" name="fouth">
            <matchmaker :matchmakerInfo='matchmakerInfo'></matchmaker>
          </el-tab-pane>
        </template>
        <template v-if="[1,2,4,5,6,7,8,33].indexOf(this.$store.getters.roles.userIndex)>=0">
          <el-tab-pane label="体检卡激活" :name="this.$store.getters.roles.userIndex===4?'first':'third'">
            <add-check-card :checkData='checkData' :resultDataNumber='resultDataNumber'></add-check-card>
          </el-tab-pane>
        </template>

        <template v-if="[1,2,4,5,6,7,8,33].indexOf(this.$store.getters.roles.userIndex)>=0">
          <el-tab-pane label="暖心助资" name="fifth">
            <helpful-money :helpfulList='helpfulList'></helpful-money>
          </el-tab-pane>
        </template>
      </el-tabs>
    </div>
  </div>
</template>

<script>
  import ResizeMixin from '@/components/pages/layout/mixin/ResizeHandler'
  import {
    getMembershipCard,
    showCheckCard,
    showActivateCard,
    getMatchInfo,
    getloan
  } from '@/api/caseOperations'
  import topHeader from './layout/components/Header.vue'
  import addCheckCard from './addCheckCard'
  import addActivateCard from './addActivateCard'
  import matchmaker from './matchmaker'
  import helpfulMoney from './helpfulMoney'
  import card from './card'
  export default {
    components: {
      topHeader,
      addCheckCard,
      addActivateCard,
      helpfulMoney,
      card,
      matchmaker
    },
    mixins: [ResizeMixin],
    data() {
      return {
        resultDataNumber: 0,
        activeName: 'first',
        tab: '体验卡激活',
        checkData: [],
        activateData: [],
        matchmakerInfo: [],
        helpfulList:[],
      }
    },
    created() {
      if(this.$store.getters.roles.userIndex===32){
      this.showMatchInfo()
      this.activeName='fouth'
      }
    },
    methods: {
      handleClick(tab, event) {
        console.log(tab.label);
        if (tab.label === '会员卡审核') {

        } else if (tab.label === '体检卡激活') {
          this.showAll1()
        } else if (tab.label === '红娘后台') {
          this.showMatchInfo()
        }else if (tab.label === '暖心助资') {
          this.handleLoan()
        }  else {
          this.showAll2()
        }
      },
      handleLoan(){
        getloan().then(res=>{
          console.log(res)
          if(res.data.success){
            this.helpfulList=res.data.list
            console.log(this.helpfulList)
            this.$message.success(res.data.msg)
          }else{
            this.$message.error(res.data.msg)
          }
        }).catch(err=>{
          console.log(err)
        })
      },
      showMatchInfo(){
        getMatchInfo().then(res=>{
          console.log(res)
          if(res.data.success){
            this.matchmakerInfo=res.data.list
            this.$message.success(res.data.msg)
          }else{
            this.$message.error(res.data.msg)
          }
        }).catch(err=>{
          console.log(err)
        })
      },
      showAll1() {
        this.loading = true
        showCheckCard(1).then(res => {
          console.log(res)
          this.checkData = res.data.msg
          this.resultDataNumber = res.data.sum
          setTimeout(() => {
            this.loading = false;
          }, 500);
        }).catch(err => {
          console.log(err)
        })
      },

      //显示全部卡号
      showAll2() {
        this.loading = true
        showActivateCard().then(res => {
          console.log(res)
          this.activateData = res.data
          this.$store.commit('SET_ACTIVATEDATA', res.data)
          setTimeout(() => {
            this.loading = false;
          }, 500);
        }).catch(err => {
          console.log(err)
        })
      },
    }
  }
</script>

<style scoped>
  .backstageInfo {
    margin: 80px 20px;
  }
</style>