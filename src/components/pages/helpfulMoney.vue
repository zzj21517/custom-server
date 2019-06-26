<template>
  <div>
    <div>
      <el-table :data="helpfulList" v-loading="loading" border fit  highlight-current-row>
        <el-table-column type="index" label="序号" :index="indexMethod" align="center" width="80">
        </el-table-column>
        <el-table-column label="手机号" align="center" >
          <template slot-scope="scope">
            {{ scope.row.phone }}
          </template>
        </el-table-column>
        <el-table-column label="城市" align="center">
          <template slot-scope="scope">
            {{ scope.row.city}}
          </template>
        </el-table-column>
        <el-table-column label="房产地址" align="center">
          <template slot-scope="scope">
            {{ scope.row.houseAddr}}
          </template>
        </el-table-column>
        <el-table-column label="房产面积" align="center" >
          <template slot-scope="scope">
            {{ scope.row.houseArea}}
          </template>
        </el-table-column>
        <el-table-column label="创建时间" align="center">
          <template slot-scope="scope">
            {{ scope.row.createTime}}
          </template>
        </el-table-column>
      </el-table>
    </div>
  </div>
</template>

<script>
  import {
    getloan
  } from '@/api/caseOperations'
  export default {
    data() {
      return {
        loading: false,
        dialogFormVisible: false,
      }
    },
    props:['helpfulList'],
    methods: {
      indexMethod(index) {
        return index + 1;
      },
      //显示全部卡号
      showAll() {
        this.loading = true
        showActivateCard().then(res => {
          console.log(res)
          this.$store.commit('SET_ACTIVATEDATA',res.data)
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
  /* .checkCard {
    position: absolute;
    top: 60px;
    left: 20px;
    right: 20px;
    margin: 20px auto;
  } */

  .tab {
    height: 60px;
    border: 1px solid #e1e1e1;
    line-height: 60px;
    padding: 0 20px;
    background: #f1f2f7;
    display: flex;
    justify-content: space-between;
  }

</style>