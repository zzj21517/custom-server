<template>
    <div>
<el-form :inline="true" :disabled='disabled' :model="entiretyLawsuit" :rules="rules" ref="entiretyLawsuit" label-width="140px" size="small" label-position="right" >
    <el-form-item label="立案时间：" prop="caseDate">
              <el-date-picker value-format="yyyy-MM-dd" v-model="entiretyLawsuit.caseDate" type="date" placeholder="选择日期" ></el-date-picker>
            </el-form-item>
            <el-form-item label="预收诉讼费方式：" prop="chargeType">
              <el-select v-model="entiretyLawsuit.chargeType" clearable placeholder="" >
                <el-option label="现金" value="现金"></el-option>
                <el-option label="客户法院自缴" value="客户法院自缴"></el-option>
                <el-option label="支付宝" value="支付宝"></el-option>
                <el-option label="微信" value="微信"></el-option>
                <el-option label="银行卡" value="银行卡"></el-option>
                <el-option label="其它" value="其它"></el-option>
              </el-select>
            </el-form-item>
            <el-form-item label="担保金额：" prop="assureMoney">
              <el-input type="number" step="0.01" v-model="entiretyLawsuit.assureMoney" auto-complete="off"></el-input>
            </el-form-item>
            <el-form-item label="传票送达时间：" prop="citationDate">
              <el-date-picker value-format="yyyy-MM-dd" v-model="entiretyLawsuit.citationDate" type="date" placeholder="选择日期" ></el-date-picker>
            </el-form-item>
            <el-form-item label="受理法院：" prop="court">
              <el-input type="text" v-model="entiretyLawsuit.court" auto-complete="off" ></el-input>
            </el-form-item>
            <el-form-item label="书记员电话：" prop="penPhone">
              <el-input type="text" v-model="entiretyLawsuit.penPhone" auto-complete="off" ></el-input>
            </el-form-item>
            <el-form-item label="诉讼期状态：" prop="assureStatus">
              <el-select v-model="entiretyLawsuit.assureStatus" clearable placeholder="" >
                <el-option label="案件移交" value="案件移交"></el-option>
                <el-option label="传票" value="传票"></el-option>
                <el-option label="开庭" value="开庭"></el-option>
                <el-option label="立案" value="立案"></el-option>
                <el-option label="文书传达" value="文书传达"></el-option>
              </el-select>
            </el-form-item>
            <el-form-item label="立案律师1：" prop="lawerFirst">
              <el-select v-model="entiretyLawsuit.lawerFirst" clearable placeholder="" >
                <el-option v-for="item in lawyer" :key="item.userName" :label="item.userName" :value="item.userName">
          </el-option>
              </el-select>
            </el-form-item>
            <el-form-item label="实际诉讼费：" prop="assureMoneyOfReally">
              <el-input type="number" step="0.01" v-model="entiretyLawsuit.assureMoneyOfReally" auto-complete="off" ></el-input>
            </el-form-item>
            <el-form-item label="保全费：" prop="confirmMoney">
              <el-input type="number" step="0.01" v-model="entiretyLawsuit.confirmMoney" auto-complete="off"></el-input>
            </el-form-item>
            <el-form-item label="调解时间：" prop="mediateDate">
              <el-date-picker value-format="yyyy-MM-dd" v-model="entiretyLawsuit.mediateDate" type="date" placeholder="选择日期" ></el-date-picker>
            </el-form-item>
            <el-form-item label="开庭地点：" prop="courtPosition">
              <el-input type="text" v-model="entiretyLawsuit.courtPosition" auto-complete="off"></el-input>
            </el-form-item>
            <el-form-item label="起诉费金额：" prop="moneyOfAssure">
              <el-input type="number" step="0.01" v-model="entiretyLawsuit.moneyOfAssure" auto-complete="off"></el-input>
            </el-form-item>
            <el-form-item label="立案律师2：" prop="lawerSecond">
              <el-select v-model="entiretyLawsuit.lawerSecond" clearable placeholder="" >
                <el-option v-for="item in lawyer" :key="item.userName" :label="item.userName" :value="item.userName">
          </el-option>
              </el-select>
            </el-form-item>
            <el-form-item label="补缴诉讼费：" prop="completeMoney">
              <el-input type="number" step="0.01" v-model="entiretyLawsuit.completeMoney" auto-complete="off"></el-input>
            </el-form-item>
            <el-form-item label="公告时间：" prop="fileDate">
              <el-date-picker value-format="yyyy-MM-dd" v-model="entiretyLawsuit.fileDate" type="date" placeholder="选择日期" ></el-date-picker>
            </el-form-item>
            <el-form-item label="开庭时间：" prop="courtDate">
              <el-date-picker type="datetime" value-format="yyyy-MM-dd hh:mm:ss" v-model="entiretyLawsuit.courtDate" placeholder="选择日期" ></el-date-picker>
            </el-form-item>
            <el-form-item label="案号：" prop="caseNumber">
              <el-input type="text" v-model="entiretyLawsuit.caseNumber" auto-complete="off"></el-input>
            </el-form-item>
            <el-form-item label="调解/判决金额：" prop="judgeMoney">
              <el-input type="number" step="0.01" v-model="entiretyLawsuit.judgeMoney" auto-complete="off"></el-input>
            </el-form-item>
            <el-form-item label="诉讼费预收确认人：" prop="assurePerson">
              <el-select v-model="entiretyLawsuit.assurePerson" clearable placeholder="" >
                <el-option label="张三" value="张三"></el-option>
                <el-option label="李四" value="李四"></el-option>
              </el-select>
            </el-form-item>
            <el-form-item label="是否财产保全：" prop="isAllMoney">
              <el-select v-model="entiretyLawsuit.isAllMoney" clearable placeholder="" >
                <el-option label="是" value="是"></el-option>
                <el-option label="否" value="否"></el-option>
              </el-select>
            </el-form-item>
            <el-form-item label="公告事项：" prop="fileItem">
              <el-select v-model="entiretyLawsuit.fileItem" clearable placeholder="" >
                <el-option label="传票" value="传票"></el-option>
                <el-option label="判决书" value="判决书"></el-option>
                <el-option label="其它" value="其它"></el-option>
              </el-select>
            </el-form-item>
            <el-form-item label="开庭律师1：" prop="courtLawer">
              <el-select v-model="entiretyLawsuit.courtLawer" clearable placeholder="" >
                <el-option v-for="item in lawyer" :key="item.userName" :label="item.userName" :value="item.userName">
          </el-option>
              </el-select>
            </el-form-item>
            <el-form-item label="承办法官：" prop="judge">
             <el-select v-model="entiretyLawsuit.judge" clearable placeholder="" >
                <el-option v-for="item in judge" :key="item.name" :label="item.name" :value="item.name">
          </el-option>
              </el-select>
            </el-form-item>
            <el-form-item label="文本送达时间：" prop="fileReceiveDate">
              <el-date-picker value-format="yyyy-MM-dd" v-model="entiretyLawsuit.fileReceiveDate" type="date" placeholder="选择日期" ></el-date-picker>
            </el-form-item>
             <el-form-item label="预收诉讼费金额：" prop="assurSum">
              <el-input type="number" step="0.01" v-model="entiretyLawsuit.assurSum" auto-complete="off"></el-input>
            </el-form-item>
             <el-form-item label="保全标的金额：" prop="ensureMoney">
              <el-input type="number" step="0.01" v-model="entiretyLawsuit.ensureMoney" auto-complete="off"></el-input>
            </el-form-item>
             <el-form-item label="公告费金额：" prop="fileMoney">
              <el-input type="number" step="0.01" v-model="entiretyLawsuit.fileMoney" auto-complete="off"></el-input>
            </el-form-item>
            <el-form-item label="开庭律师2：" prop=":courtLawerSecond">
              <el-select v-model="entiretyLawsuit.courtLawerSecond" clearable placeholder="" >
                <el-option v-for="item in lawyer" :key="item.userName" :label="item.userName" :value="item.userName">
          </el-option>
              </el-select>
            </el-form-item>
            <el-form-item label="书记员姓名：" prop="penName">
              <el-input type="text" v-model="entiretyLawsuit.penName" auto-complete="off"></el-input>
            </el-form-item>
            <el-form-item label="是否上诉：" prop="isAssure">
              <el-select v-model="entiretyLawsuit.isAssure" clearable placeholder="" >
                <el-option label="是" value="是"></el-option>
                <el-option label="否" value="否"></el-option>
              </el-select>
            </el-form-item>
            <el-form-item label="备注：" prop="tips">
              <el-input type="text" v-model="entiretyLawsuit.tips" auto-complete="off" style="width:517px"></el-input>
            </el-form-item>
            <el-form-item label="下一功能节点：" prop="nextFunction">
              <el-select v-model="entiretyLawsuit.nextFunction" clearable placeholder="" >
                <el-option v-for="item in allFunctionNode" :key="item.value" :label="item.value" :value="item.value">
          </el-option>
              </el-select>
            </el-form-item>
            <el-form-item label="下一接收人：" prop="nextPerson">
              <el-select v-model="entiretyLawsuit.nextPerson" clearable placeholder="" >
                <el-option v-for="item in nextPerson" :key="item.userName" :label="item.userName" :value="item.userIndex">
          </el-option>
              </el-select>
            </el-form-item>

            <el-form-item style="float:right">
               <el-button :loading="loadingsave" @click="submitForm(1)">保存</el-button>
          <el-button :loading="loadingsubmit" type="primary" @click="submitForm(2)">提交</el-button>
      </el-form-item>
</el-form>
    </div>
</template>

<script>
import {postOtherInfo} from '@/api/login'
    export default {
       data() {
         const checkNextFunction = (rule, value, callback) => {
        if (!value) {
          return callback(new Error('下一功能节点不能为空'))
        } else {
          callback()
        }
      }
      const checkNextPerson = (rule, value, callback) => {
        if (!value) {
          return callback(new Error('下一接收人不能为空'))
        } else {
          callback()
        }
      }
      return {
        loadingsave: false,
        loadingsubmit: false,
        disabled:false,
            rules: {
              nextFunction:[{
            required:true,
            validator:checkNextFunction,
            trigger:'blur'
          }],
          nextPerson:[{
            required:true,
            validator:checkNextPerson,
            trigger:'blur'
          }]
            }
      }
    },
        props:['entiretyLawsuit','allFunctionNode','nextPerson','lawyer','judge','court'],
        created(){
      if(this.entiretyLawsuit.caseStatus===2||this.entiretyLawsuit.caseStatus===4){
        this.disabled=true
      }
      if(this.entiretyLawsuit.label===0){
        this.disabled=true
      }
    },
        methods:{
           submitForm(val) {
        (val==2)?this.loadingsubmit=true:this.loadingsave=true
        console.log(val)
        console.log(this.entiretyLawsuit)
        this.$refs.entiretyLawsuit.validate(valid => {
          if (valid) {
             this.entiretyLawsuit.caseStatus = val//将表单的案件状态改为save或者submit
            postOtherInfo(this.entiretyLawsuit,'entiretyLawSuit').then(response => {
              console.log(response)
              if (response.data.code === 4||response.data.code===5) {
                if(this.entiretyLawsuit.nowStatus==='已结案'){
                  this.$emit('listenActiveName',this.entiretyLawsuit.nextFunction)
                }
                if(val===2){
                  this.disabled=true
                }
                setTimeout(() => {
                 (val==2)?this.loadingsubmit=false:this.loadingsave=false
                }, 500);
                this.$message.success(response.data.msg)
              }else {
                setTimeout(() => {
                  (val==2)?this.loadingsubmit=false:this.loadingsave=false
                }, 500);
                this.$message.error(response.data.msg)
              }
            }).catch(error => {
              setTimeout(() => {
               (val==2)?this.loadingsubmit=false:this.loadingsave=false
              }, 500);
              console.log(error)
            })
          } else {
            setTimeout(() => {
              (val==2)?this.loadingsubmit=false:this.loadingsave=false
            }, 500);
            this.$message.error('必填项不能为空')
          }
        })
      }
        }
    }
</script>

<style scoped>

</style>