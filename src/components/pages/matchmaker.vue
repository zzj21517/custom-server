<template>
  <div >
    <div>
      <el-table :data="matchmakerInfo2" v-loading="loading" border fit highlight-current-row>
        <el-table-column type="index" label="序号" :index="indexMethod" align="center" width="80">
        </el-table-column>
        <el-table-column label="姓名" align="center">
          <template slot-scope="scope">
            {{ scope.row.name }}
          </template>
        </el-table-column>
        <el-table-column label="性别" align="center">
          <template slot-scope="scope">
            {{ scope.row.sex }}
          </template>
        </el-table-column>
        <el-table-column label="手机号" align="center">
          <template slot-scope="scope">
            {{ scope.row.phone }}
          </template>
        </el-table-column>
        <el-table-column label="身份证号" align="center">
          <template slot-scope="scope">
            {{ scope.row.identityCard}}
          </template>
        </el-table-column>
        <el-table-column label="提交时间" align="center">
          <template slot-scope="scope">
            {{ scope.row.time}}
          </template>
        </el-table-column>
        <el-table-column label="操作" align="center">
          <template slot-scope="scope">
            <el-button type="success" size="small" @click="seeDetail(scope.row)">查看详情</el-button>
          </template>
        </el-table-column>
      </el-table>
      <el-dialog title="详情" :visible.sync="dialogFormVisible" width="90%">
          <el-form :model="form" label-width="120px" size='mini' :inline="true" :disabled="disabled">
            <el-form-item label="身份证" prop='identityCard'>
              <el-input type='text' v-model="form.identityCard"></el-input>
            </el-form-item>
            <el-form-item label="手机号" prop='phone'>
              <el-input type='text' v-model="form.phone"></el-input>
            </el-form-item>
            <el-form-item label="姓名" prop='name'>
              <el-input type='text' v-model="form.name"></el-input>
            </el-form-item>
            <el-form-item label="身高" prop='height'>
              <el-input type='text' v-model="form.height"></el-input>
            </el-form-item>
            <el-form-item label="体重" prop='weight'>
              <el-input type='text' v-model="form.weight"></el-input>
            </el-form-item>
            <el-form-item label="学历" prop='education'>
              <el-input type='text' v-model="form.education"></el-input>
            </el-form-item>
            <el-form-item label="职业" prop='profession'>
              <el-input type='text' v-model="form.profession"></el-input>
            </el-form-item>
            <el-form-item label="单位" prop='company'>
              <el-input type='text' v-model="form.company"></el-input>
            </el-form-item>
            <el-form-item label="收入" prop='income'>
              <el-input type='text' v-model="form.income"></el-input>
            </el-form-item>
            <el-form-item label="家庭住址" prop='houseAddress'>
              <el-input type='text' v-model="form.houseAddress"></el-input>
            </el-form-item>
            <el-form-item label="感情婚姻情况" prop='marriageStatus'>
              <el-input type='textarea' v-model="form.marriageStatus"></el-input>
            </el-form-item>
            <el-form-item label="财产情况" prop='property'>
              <el-input type='textarea' v-model="form.property"></el-input>
            </el-form-item>
            <el-form-item label="家庭成员" prop='familyMember'>
              <el-input type='text' v-model="form.familyMember"></el-input>
            </el-form-item>
            <el-form-item label="择偶条件" prop='marryTerms'>
              <el-input type='text' v-model="form.marryTerms"></el-input>
            </el-form-item>
            <el-form-item label="对方职业" prop='oppoProfession'>
              <el-input type='text' v-model="form.oppoProfession"></el-input>
            </el-form-item>
            <el-form-item label="对方地域范围" prop='oppoAddress'>
              <el-input type='text' v-model="form.oppoAddress"></el-input>
            </el-form-item>
            <el-form-item label="对方家庭成员" prop='oppoFamilyMember'>
              <el-input type='text' v-model="form.oppoFamilyMember"></el-input>
            </el-form-item>
            <el-form-item label="对方财产情况" prop='oppoPropery'>
              <el-input type='text' v-model="form.oppoPropery"></el-input>
            </el-form-item>
            <el-form-item label="对方年龄" prop='oppoAge'>
              <el-input type='text' v-model="form.oppoAge"></el-input>
            </el-form-item>

            <el-form-item label="对方身高" prop='oppoHeight'>
              <el-input type='text' v-model="form.oppoHeight"></el-input>
            </el-form-item>
            <el-form-item label="对方收入" prop='oppoIncome'>
              <el-input type='text' v-model="form.oppoIncome"></el-input>
            </el-form-item>
            <el-form-item label="对方才貌" prop='oppoStatus'>
              <el-input type='text' v-model="form.oppoStatus"></el-input>
            </el-form-item>
            <el-form-item label="兴趣爱好" prop='interest'>
              <el-input type='text' v-model="form.interest"></el-input>
            </el-form-item>
            <el-form-item label="其它" prop='elseInfo'>
              <el-input type='text' v-model="form.elseInfo"></el-input>
            </el-form-item>
          </el-form>
      </el-dialog>
    </div>
  </div>
</template>

<script>
  import {
    getMatchInfo
  } from '@/api/caseOperations'
  export default {
    data() {
      return {
        disabled:true,
        loading: false,
        dialogFormVisible: false,
        form: {
          identityCard: '',
          name: '',
          weight: '',
          height: '',
          education: '',
          profession: '',
          company: '',
          income: '',
          houseAddress: '',
          property: '',
          phone: '',
          marriageStatus: '',
          familyMember: '',
          marryTerms: '',
          oppoProfession: '',
          oppoAddress: '',
          oppoFamilyMember: '',
          oppoPropery: '',
          oppoAge: '',
          oppoHeight: '',
          oppoIncome: '',
          oppoStatus: '',
          interest: '',
          elseInfo: '',
        },
        // matchmakerInfo:{

        // }
      }
    },
    computed: {
      matchmakerInfo2:{
        get(){
          return this.matchmakerInfo 
        },
        set(newValue){
          console.log(newValue)
        }
      }
    },
    props: ['matchmakerInfo'],
    created(){
      // if(this.$store.getters.roles.userIndex===32){
      // this.showMatchInfo()
      // }
    },
    methods: {
      seeDetail(row) {
        console.log(row)
        this.form=row
        this.dialogFormVisible = true
      },
      indexMethod(index) {
        return index + 1;
      },
      showMatchInfo(){
        console.log('hhh')
        getMatchInfo().then(res=>{
          console.log(res)
          if(res.data.success){
            this.matchmakerInfo2=res.data.list
            console.log(this.matchmakerInfo2)
            this.$message.success(res.data.msg)
          }else{
            this.$message.error(res.data.msg)
          }
        }).catch(err=>{
          console.log(err)
        })
      },
    }
  }
</script>

<style scoped>

</style>