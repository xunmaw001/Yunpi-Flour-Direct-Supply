<template>
  <div class="addEdit-block">
    <el-form
      class="detail-form-content"
      ref="ruleForm"
      :model="ruleForm"
      :rules="rules"
      label-width="80px"
	  :style="{backgroundColor:addEditForm.addEditBoxColor}"
    >
      <el-row>
      <el-col :span="12">
        <el-form-item class="input" v-if="type!='info'"  label="名称" prop="mingcheng">
          <el-input v-model="ruleForm.mingcheng" 
              placeholder="名称" clearable  :readonly="ro.mingcheng"></el-input>
        </el-form-item>
        <div v-else>
          <el-form-item class="input" label="名称" prop="mingcheng">
              <el-input v-model="ruleForm.mingcheng" 
                placeholder="名称" readonly></el-input>
          </el-form-item>
        </div>
      </el-col>
      <el-col :span="12">
        <el-form-item class="input" v-if="type!='info'"  label="原料" prop="yuanliao">
          <el-input v-model="ruleForm.yuanliao" 
              placeholder="原料" clearable  :readonly="ro.yuanliao"></el-input>
        </el-form-item>
        <div v-else>
          <el-form-item class="input" label="原料" prop="yuanliao">
              <el-input v-model="ruleForm.yuanliao" 
                placeholder="原料" readonly></el-input>
          </el-form-item>
        </div>
      </el-col>
      <el-col :span="12">
        <el-form-item class="input" v-if="type!='info'"  label="配料" prop="peiliao">
          <el-input v-model="ruleForm.peiliao" 
              placeholder="配料" clearable  :readonly="ro.peiliao"></el-input>
        </el-form-item>
        <div v-else>
          <el-form-item class="input" label="配料" prop="peiliao">
              <el-input v-model="ruleForm.peiliao" 
                placeholder="配料" readonly></el-input>
          </el-form-item>
        </div>
      </el-col>
      <el-col :span="12">
        <el-form-item class="select" v-if="type!='info'" label="种植基地" prop="zhongzhijidi">
          <el-select  @change="zhongzhijidiChange" v-model="ruleForm.zhongzhijidi" placeholder="请选择种植基地">
            <el-option
                v-for="(item,index) in zhongzhijidiOptions"
                v-bind:key="index"
                :label="item"
                :value="item">
            </el-option>
          </el-select>
        </el-form-item>
        <div v-else>
          <el-form-item class="input"v-if="ruleForm.zhongzhijidi" label="种植基地" prop="zhongzhijidi">
              <el-input v-model="ruleForm.zhongzhijidi" 
                placeholder="种植基地" readonly></el-input>
          </el-form-item>
        </div>
      </el-col>
      <el-col :span="12">
        <el-form-item class="input" v-if="type!='info'"  label="净含量" prop="jinghanliang">
          <el-input v-model="ruleForm.jinghanliang" 
              placeholder="净含量" clearable  :readonly="ro.jinghanliang"></el-input>
        </el-form-item>
        <div v-else>
          <el-form-item class="input" label="净含量" prop="jinghanliang">
              <el-input v-model="ruleForm.jinghanliang" 
                placeholder="净含量" readonly></el-input>
          </el-form-item>
        </div>
      </el-col>
      <el-col :span="12">
        <el-form-item class="input" v-if="type!='info'"  label="保质期" prop="baozhiqi">
          <el-input v-model="ruleForm.baozhiqi" 
              placeholder="保质期" clearable  :readonly="ro.baozhiqi"></el-input>
        </el-form-item>
        <div v-else>
          <el-form-item class="input" label="保质期" prop="baozhiqi">
              <el-input v-model="ruleForm.baozhiqi" 
                placeholder="保质期" readonly></el-input>
          </el-form-item>
        </div>
      </el-col>
      <el-col :span="12">
        <el-form-item class="input" v-if="type!='info'"  label="储存方法" prop="chucunfangfa">
          <el-input v-model="ruleForm.chucunfangfa" 
              placeholder="储存方法" clearable  :readonly="ro.chucunfangfa"></el-input>
        </el-form-item>
        <div v-else>
          <el-form-item class="input" label="储存方法" prop="chucunfangfa">
              <el-input v-model="ruleForm.chucunfangfa" 
                placeholder="储存方法" readonly></el-input>
          </el-form-item>
        </div>
      </el-col>
      <el-col :span="12">
        <el-form-item class="input" v-if="type!='info'"  label="适用" prop="shiyong">
          <el-input v-model="ruleForm.shiyong" 
              placeholder="适用" clearable  :readonly="ro.shiyong"></el-input>
        </el-form-item>
        <div v-else>
          <el-form-item class="input" label="适用" prop="shiyong">
              <el-input v-model="ruleForm.shiyong" 
                placeholder="适用" readonly></el-input>
          </el-form-item>
        </div>
      </el-col>
      <el-col :span="24">  
        <el-form-item class="upload" v-if="type!='info' && !ro.tupian" label="图片" prop="tupian">
          <file-upload
          tip="点击上传图片"
          action="file/upload"
          :limit="3"
          :multiple="true"
          :fileUrls="ruleForm.tupian?ruleForm.tupian:''"
          @change="tupianUploadChange"
          ></file-upload>
        </el-form-item>
        <div v-else>
          <el-form-item v-if="ruleForm.tupian" label="图片" prop="tupian">
            <img style="margin-right:20px;" v-bind:key="index" v-for="(item,index) in ruleForm.tupian.split(',')" :src="item" width="100" height="100">
          </el-form-item>
        </div>
      </el-col>
      <el-col :span="12">
        <el-form-item class="date" v-if="type!='info'" label="生产日期" prop="shengchanriqi">
            <el-date-picker
                value-format="yyyy-MM-dd HH:mm:ss"
                v-model="ruleForm.shengchanriqi" 
                type="datetime"
                placeholder="生产日期">
            </el-date-picker>
        </el-form-item>
        <div v-else>
          <el-form-item class="input" v-if="ruleForm.shengchanriqi" label="生产日期" prop="shengchanriqi">
              <el-input v-model="ruleForm.shengchanriqi" 
                placeholder="生产日期" readonly></el-input>
          </el-form-item>
        </div>
      </el-col>
      <el-col :span="12">
        <el-form-item class="select" v-if="type!='info'"  label="分类" prop="fenlei">
          <el-select v-model="ruleForm.fenlei" placeholder="请选择分类">
            <el-option
                v-for="(item,index) in fenleiOptions"
                v-bind:key="index"
                :label="item"
                :value="item">
            </el-option>
          </el-select>
        </el-form-item>
        <div v-else>
          <el-form-item class="input" label="分类" prop="fenlei">
	      <el-input v-model="ruleForm.fenlei"
                placeholder="分类" readonly></el-input>
          </el-form-item>
        </div>
      </el-col>
      <el-col :span="12">
        <el-form-item class="input" v-if="type!='info'"  label="价格" prop="price">
          <el-input v-model="ruleForm.price" 
              placeholder="价格" clearable  :readonly="ro.price"></el-input>
        </el-form-item>
        <div v-else>
          <el-form-item class="input" label="价格" prop="price">
              <el-input v-model="ruleForm.price" 
                placeholder="价格" readonly></el-input>
          </el-form-item>
        </div>
      </el-col>
      </el-row>
          <el-row>
            <el-col :span="24">
              <el-form-item v-if="type!='info'"  label="详情" prop="xiangqing">
                <editor 
                    style="min-width: 200px; max-width: 600px;"
                    v-model="ruleForm.xiangqing" 
                    class="editor" 
                    action="file/upload">
                </editor>
              </el-form-item>
              <div v-else>
                <el-form-item v-if="ruleForm.xiangqing" label="详情" prop="xiangqing">
                    <span v-html="ruleForm.xiangqing"></span>
                </el-form-item>
              </div>
            </el-col>
          </el-row>
      <el-form-item class="btn">
        <el-button v-if="type!='info'" type="primary" class="btn-success" @click="onSubmit">提交</el-button>
        <el-button v-if="type!='info'" class="btn-close" @click="back()">取消</el-button>
        <el-button v-if="type=='info'" class="btn-close" @click="back()">返回</el-button>
      </el-form-item>
    </el-form>
    

  </div>
</template>
<script>
// 数字，邮件，手机，url，身份证校验
import { isNumber,isIntNumer,isEmail,isPhone, isMobile,isURL,checkIdCard } from "@/utils/validate";
export default {
  data() {
    let self = this
    var validateIdCard = (rule, value, callback) => {
      if(!value){
        callback();
      } else if (!checkIdCard(value)) {
        callback(new Error("请输入正确的身份证号码"));
      } else {
        callback();
      }
    };
    var validateUrl = (rule, value, callback) => {
      if(!value){
        callback();
      } else if (!isURL(value)) {
        callback(new Error("请输入正确的URL地址"));
      } else {
        callback();
      }
    };
    var validateMobile = (rule, value, callback) => {
      if(!value){
        callback();
      } else if (!isMobile(value)) {
        callback(new Error("请输入正确的手机号码"));
      } else {
        callback();
      }
    };
    var validatePhone = (rule, value, callback) => {
      if(!value){
        callback();
      } else if (!isPhone(value)) {
        callback(new Error("请输入正确的电话号码"));
      } else {
        callback();
      }
    };
    var validateEmail = (rule, value, callback) => {
      if(!value){
        callback();
      } else if (!isEmail(value)) {
        callback(new Error("请输入正确的邮箱地址"));
      } else {
        callback();
      }
    };
    var validateNumber = (rule, value, callback) => {
      if(!value){
        callback();
      } else if (!isNumber(value)) {
        callback(new Error("请输入数字"));
      } else {
        callback();
      }
    };
    var validateIntNumber = (rule, value, callback) => {
      if(!value){
        callback();
      } else if (!isIntNumer(value)) {
        callback(new Error("请输入整数"));
      } else {
        callback();
      }
    };
    return {
	  addEditForm: {"btnSaveFontColor":"#fff","selectFontSize":"14px","btnCancelBorderColor":"#DCDFE6","inputBorderRadius":"4px","inputFontSize":"14px","textareaBgColor":"#fff","btnSaveFontSize":"14px","textareaBorderRadius":"4px","uploadBgColor":"#fff","textareaBorderStyle":"solid","btnCancelWidth":"88px","textareaHeight":"120px","dateBgColor":"#fff","btnSaveBorderRadius":"4px","uploadLableFontSize":"14px","textareaBorderWidth":"1px","inputLableColor":"rgba(199, 21, 133, 1)","addEditBoxColor":"rgba(242, 241, 242, 1)","dateIconFontSize":"14px","btnSaveBgColor":"rgba(199, 21, 133, 1)","uploadIconFontColor":"#8c939d","textareaBorderColor":"#DCDFE6","btnCancelBgColor":"rgba(253, 252, 254, 1)","selectLableColor":"rgba(199, 21, 133, 1)","btnSaveBorderStyle":"solid","dateBorderWidth":"1px","dateLableFontSize":"14px","dateBorderRadius":"4px","btnCancelBorderStyle":"solid","selectLableFontSize":"14px","selectBorderStyle":"solid","selectIconFontColor":"#C0C4CC","btnCancelHeight":"44px","inputHeight":"40px","btnCancelFontColor":"rgba(106, 0, 138, 1)","dateBorderColor":"#DCDFE6","dateIconFontColor":"#C0C4CC","uploadBorderStyle":"solid","dateBorderStyle":"solid","dateLableColor":"rgba(199, 21, 133, 1)","dateFontSize":"14px","inputBorderWidth":"1px","uploadIconFontSize":"28px","selectHeight":"40px","inputFontColor":"#606266","uploadHeight":"148px","textareaLableColor":"rgba(199, 21, 133, 1)","textareaLableFontSize":"14px","btnCancelFontSize":"14px","inputBorderStyle":"solid","btnCancelBorderRadius":"4px","inputBgColor":"#fff","inputLableFontSize":"14px","uploadLableColor":"rgba(199, 21, 133, 1)","uploadBorderRadius":"4px","btnSaveHeight":"44px","selectBgColor":"rgba(255, 255, 255, 1)","btnSaveWidth":"88px","selectIconFontSize":"14px","dateHeight":"40px","selectBorderColor":"#DCDFE6","inputBorderColor":"#DCDFE6","uploadBorderColor":"#DCDFE6","textareaFontColor":"#606266","selectBorderWidth":"1px","dateFontColor":"#606266","btnCancelBorderWidth":"1px","uploadBorderWidth":"1px","textareaFontSize":"14px","selectBorderRadius":"4px","selectFontColor":"rgba(10, 10, 10, 1)","btnSaveBorderColor":"#409EFF","btnSaveBorderWidth":"0px"},
      id: '',
      type: '',
      ro:{
	mingcheng : false,
	yuanliao : false,
	peiliao : false,
	zhongzhijidi : false,
	jinghanliang : false,
	baozhiqi : false,
	chucunfangfa : false,
	shiyong : false,
	xiangqing : false,
	tupian : false,
	shengchanriqi : false,
	fenlei : false,
	thumbsupnum : false,
	crazilynum : false,
	clicktime : false,
	price : false,
      },
      ruleForm: {
        mingcheng: '',
        yuanliao: '',
        peiliao: '',
        zhongzhijidi: '',
        jinghanliang: '',
        baozhiqi: '',
        chucunfangfa: '',
        shiyong: '',
        xiangqing: '',
        tupian: '',
        shengchanriqi: '',
        fenlei: '',
        clicktime: '',
        price: '',
      },
          zhongzhijidiOptions: [],
          fenleiOptions: [],
      rules: {
          mingcheng: [
                { required: true, message: '名称不能为空', trigger: 'blur' },
          ],
          yuanliao: [
                { required: true, message: '原料不能为空', trigger: 'blur' },
          ],
          peiliao: [
                { required: true, message: '配料不能为空', trigger: 'blur' },
          ],
          zhongzhijidi: [
          ],
          jinghanliang: [
          ],
          baozhiqi: [
          ],
          chucunfangfa: [
          ],
          shiyong: [
          ],
          xiangqing: [
          ],
          tupian: [
          ],
          shengchanriqi: [
          ],
          fenlei: [
                { required: true, message: '分类不能为空', trigger: 'blur' },
          ],
          thumbsupnum: [
                { validator: validateIntNumber, trigger: 'blur' },
          ],
          crazilynum: [
                { validator: validateIntNumber, trigger: 'blur' },
          ],
          clicktime: [
          ],
          price: [
                { required: true, message: '价格不能为空', trigger: 'blur' },
                { validator: validateNumber, trigger: 'blur' },
          ],
      }
    };
  },
  props: ["parent"],
  computed: {
  },
  created() {
	this.addEditStyleChange()
	this.addEditUploadStyleChange()
  },
  methods: {
    // 下载
    download(file){
      window.open(`${file}`)
    },
    // 初始化
    init(id,type) {
      if (id) {
        this.id = id;
        this.type = type;
      }
      if(this.type=='info'||this.type=='else'){
        this.info(id);
      }else if(this.type=='cross'){
        var obj = this.$storage.getObj('crossObj');
        for (var o in obj){
          if(o=='mingcheng'){
            this.ruleForm.mingcheng = obj[o];
	    this.ro.mingcheng = true;
            continue;
          }
          if(o=='yuanliao'){
            this.ruleForm.yuanliao = obj[o];
	    this.ro.yuanliao = true;
            continue;
          }
          if(o=='peiliao'){
            this.ruleForm.peiliao = obj[o];
	    this.ro.peiliao = true;
            continue;
          }
          if(o=='zhongzhijidi'){
            this.ruleForm.zhongzhijidi = obj[o];
	    this.ro.zhongzhijidi = true;
            continue;
          }
          if(o=='jinghanliang'){
            this.ruleForm.jinghanliang = obj[o];
	    this.ro.jinghanliang = true;
            continue;
          }
          if(o=='baozhiqi'){
            this.ruleForm.baozhiqi = obj[o];
	    this.ro.baozhiqi = true;
            continue;
          }
          if(o=='chucunfangfa'){
            this.ruleForm.chucunfangfa = obj[o];
	    this.ro.chucunfangfa = true;
            continue;
          }
          if(o=='shiyong'){
            this.ruleForm.shiyong = obj[o];
	    this.ro.shiyong = true;
            continue;
          }
          if(o=='xiangqing'){
            this.ruleForm.xiangqing = obj[o];
	    this.ro.xiangqing = true;
            continue;
          }
          if(o=='tupian'){
            this.ruleForm.tupian = obj[o];
	    this.ro.tupian = true;
            continue;
          }
          if(o=='shengchanriqi'){
            this.ruleForm.shengchanriqi = obj[o];
	    this.ro.shengchanriqi = true;
            continue;
          }
          if(o=='fenlei'){
            this.ruleForm.fenlei = obj[o];
	    this.ro.fenlei = true;
            continue;
          }
          if(o=='thumbsupnum'){
            this.ruleForm.thumbsupnum = obj[o];
	    this.ro.thumbsupnum = true;
            continue;
          }
          if(o=='crazilynum'){
            this.ruleForm.crazilynum = obj[o];
	    this.ro.crazilynum = true;
            continue;
          }
          if(o=='clicktime'){
            this.ruleForm.clicktime = obj[o];
	    this.ro.clicktime = true;
            continue;
          }
          if(o=='price'){
            this.ruleForm.price = obj[o];
	    this.ro.price = true;
            continue;
          }
        }
      }
      // 获取用户信息
      this.$http({
        url: `${this.$storage.get('sessionTable')}/session`,
        method: "get"
      }).then(({ data }) => {
        if (data && data.code === 0) {
          var json = data.data;
        } else {
          this.$message.error(data.msg);
        }
      });
            this.$http({
              url: `option/zhongzhijidi/zhongzhijidi`,
              method: "get"
            }).then(({ data }) => {
              if (data && data.code === 0) {
                this.zhongzhijidiOptions = data.data;
              } else {
                this.$message.error(data.msg);
              }
            });
            this.$http({
              url: `option/mianfenfenlei/fenlei`,
              method: "get"
            }).then(({ data }) => {
              if (data && data.code === 0) {
                this.fenleiOptions = data.data;
              } else {
                this.$message.error(data.msg);
              }
            });
         
    },
    // 下二随
    zhongzhijidiChange () {
      this.$http({
        url: `follow/zhongzhijidi/zhongzhijidi?columnValue=`+ this.ruleForm.zhongzhijidi,
        method: "get"
      }).then(({ data }) => {
        if (data && data.code === 0) {
        } else {
          this.$message.error(data.msg);
        }
      });
    },
    // 多级联动参数
    info(id) {
      this.$http({
        url: `yunpimianfen/info/${id}`,
        method: "get"
      }).then(({ data }) => {
        if (data && data.code === 0) {
        this.ruleForm = data.data;
	//解决前台上传图片后台不显示的问题
	let reg=new RegExp('../../../upload','g')//g代表全部
	this.ruleForm.xiangqing = this.ruleForm.xiangqing.replace(reg,'../../../springbootw307l/upload');
        } else {
          this.$message.error(data.msg);
        }
      });
    },
    // 提交
    onSubmit() {
      // ${column.compare}
      // ${column.compare}
      // ${column.compare}
      // ${column.compare}
      // ${column.compare}
      // ${column.compare}
      // ${column.compare}
      // ${column.compare}
      // ${column.compare}
      // ${column.compare}
      // ${column.compare}
      // ${column.compare}
      // ${column.compare}
      // ${column.compare}
      // ${column.compare}
      // ${column.compare}
















      this.$refs["ruleForm"].validate(valid => {
        if (valid) {
          this.$http({
            url: `yunpimianfen/${!this.ruleForm.id ? "save" : "update"}`,
            method: "post",
            data: this.ruleForm
          }).then(({ data }) => {
            if (data && data.code === 0) {
              this.$message({
                message: "操作成功",
                type: "success",
                duration: 1500,
                onClose: () => {
                  this.parent.showFlag = true;
                  this.parent.addOrUpdateFlag = false;
                  this.parent.yunpimianfenCrossAddOrUpdateFlag = false;
                  this.parent.search();
                  this.parent.contentStyleChange();
                }
              });
            } else {
              this.$message.error(data.msg);
            }
          });
        }
      });
    },
    // 获取uuid
    getUUID () {
      return new Date().getTime();
    },
    // 返回
    back() {
      this.parent.showFlag = true;
      this.parent.addOrUpdateFlag = false;
      this.parent.yunpimianfenCrossAddOrUpdateFlag = false;
      this.parent.contentStyleChange();
    },
    tupianUploadChange(fileUrls) {
	this.ruleForm.tupian = fileUrls;
			this.addEditUploadStyleChange()
    },
	addEditStyleChange() {
	  this.$nextTick(()=>{
	    // input
	    document.querySelectorAll('.addEdit-block .input .el-input__inner').forEach(el=>{
	      el.style.height = this.addEditForm.inputHeight
	      el.style.color = this.addEditForm.inputFontColor
	      el.style.fontSize = this.addEditForm.inputFontSize
	      el.style.borderWidth = this.addEditForm.inputBorderWidth
	      el.style.borderStyle = this.addEditForm.inputBorderStyle
	      el.style.borderColor = this.addEditForm.inputBorderColor
	      el.style.borderRadius = this.addEditForm.inputBorderRadius
	      el.style.backgroundColor = this.addEditForm.inputBgColor
	    })
	    document.querySelectorAll('.addEdit-block .input .el-form-item__label').forEach(el=>{
	      el.style.lineHeight = this.addEditForm.inputHeight
	      el.style.color = this.addEditForm.inputLableColor
	      el.style.fontSize = this.addEditForm.inputLableFontSize
	    })
	    // select
	    document.querySelectorAll('.addEdit-block .select .el-input__inner').forEach(el=>{
	      el.style.height = this.addEditForm.selectHeight
	      el.style.color = this.addEditForm.selectFontColor
	      el.style.fontSize = this.addEditForm.selectFontSize
	      el.style.borderWidth = this.addEditForm.selectBorderWidth
	      el.style.borderStyle = this.addEditForm.selectBorderStyle
	      el.style.borderColor = this.addEditForm.selectBorderColor
	      el.style.borderRadius = this.addEditForm.selectBorderRadius
	      el.style.backgroundColor = this.addEditForm.selectBgColor
	    })
	    document.querySelectorAll('.addEdit-block .select .el-form-item__label').forEach(el=>{
	      el.style.lineHeight = this.addEditForm.selectHeight
	      el.style.color = this.addEditForm.selectLableColor
	      el.style.fontSize = this.addEditForm.selectLableFontSize
	    })
	    document.querySelectorAll('.addEdit-block .select .el-select__caret').forEach(el=>{
	      el.style.color = this.addEditForm.selectIconFontColor
	      el.style.fontSize = this.addEditForm.selectIconFontSize
	    })
	    // date
	    document.querySelectorAll('.addEdit-block .date .el-input__inner').forEach(el=>{
	      el.style.height = this.addEditForm.dateHeight
	      el.style.color = this.addEditForm.dateFontColor
	      el.style.fontSize = this.addEditForm.dateFontSize
	      el.style.borderWidth = this.addEditForm.dateBorderWidth
	      el.style.borderStyle = this.addEditForm.dateBorderStyle
	      el.style.borderColor = this.addEditForm.dateBorderColor
	      el.style.borderRadius = this.addEditForm.dateBorderRadius
	      el.style.backgroundColor = this.addEditForm.dateBgColor
	    })
	    document.querySelectorAll('.addEdit-block .date .el-form-item__label').forEach(el=>{
	      el.style.lineHeight = this.addEditForm.dateHeight
	      el.style.color = this.addEditForm.dateLableColor
	      el.style.fontSize = this.addEditForm.dateLableFontSize
	    })
	    document.querySelectorAll('.addEdit-block .date .el-input__icon').forEach(el=>{
	      el.style.color = this.addEditForm.dateIconFontColor
	      el.style.fontSize = this.addEditForm.dateIconFontSize
	      el.style.lineHeight = this.addEditForm.dateHeight
	    })
	    // upload
	    let iconLineHeight = parseInt(this.addEditForm.uploadHeight) - parseInt(this.addEditForm.uploadBorderWidth) * 2 + 'px'
	    document.querySelectorAll('.addEdit-block .upload .el-upload--picture-card').forEach(el=>{
	      el.style.width = this.addEditForm.uploadHeight
	      el.style.height = this.addEditForm.uploadHeight
	      el.style.borderWidth = this.addEditForm.uploadBorderWidth
	      el.style.borderStyle = this.addEditForm.uploadBorderStyle
	      el.style.borderColor = this.addEditForm.uploadBorderColor
	      el.style.borderRadius = this.addEditForm.uploadBorderRadius
	      el.style.backgroundColor = this.addEditForm.uploadBgColor
	    })
	    document.querySelectorAll('.addEdit-block .upload .el-form-item__label').forEach(el=>{
	      el.style.lineHeight = this.addEditForm.uploadHeight
	      el.style.color = this.addEditForm.uploadLableColor
	      el.style.fontSize = this.addEditForm.uploadLableFontSize
	    })
	    document.querySelectorAll('.addEdit-block .upload .el-icon-plus').forEach(el=>{
	      el.style.color = this.addEditForm.uploadIconFontColor
	      el.style.fontSize = this.addEditForm.uploadIconFontSize
	      el.style.lineHeight = iconLineHeight
	      el.style.display = 'block'
	    })
	    // 多文本输入框
	    document.querySelectorAll('.addEdit-block .textarea .el-textarea__inner').forEach(el=>{
	      el.style.height = this.addEditForm.textareaHeight
	      el.style.color = this.addEditForm.textareaFontColor
	      el.style.fontSize = this.addEditForm.textareaFontSize
	      el.style.borderWidth = this.addEditForm.textareaBorderWidth
	      el.style.borderStyle = this.addEditForm.textareaBorderStyle
	      el.style.borderColor = this.addEditForm.textareaBorderColor
	      el.style.borderRadius = this.addEditForm.textareaBorderRadius
	      el.style.backgroundColor = this.addEditForm.textareaBgColor
	    })
	    document.querySelectorAll('.addEdit-block .textarea .el-form-item__label').forEach(el=>{
	      // el.style.lineHeight = this.addEditForm.textareaHeight
	      el.style.color = this.addEditForm.textareaLableColor
	      el.style.fontSize = this.addEditForm.textareaLableFontSize
	    })
	    // 保存
	    document.querySelectorAll('.addEdit-block .btn .btn-success').forEach(el=>{
	      el.style.width = this.addEditForm.btnSaveWidth
	      el.style.height = this.addEditForm.btnSaveHeight
	      el.style.color = this.addEditForm.btnSaveFontColor
	      el.style.fontSize = this.addEditForm.btnSaveFontSize
	      el.style.borderWidth = this.addEditForm.btnSaveBorderWidth
	      el.style.borderStyle = this.addEditForm.btnSaveBorderStyle
	      el.style.borderColor = this.addEditForm.btnSaveBorderColor
	      el.style.borderRadius = this.addEditForm.btnSaveBorderRadius
	      el.style.backgroundColor = this.addEditForm.btnSaveBgColor
	    })
	    // 返回
	    document.querySelectorAll('.addEdit-block .btn .btn-close').forEach(el=>{
	      el.style.width = this.addEditForm.btnCancelWidth
	      el.style.height = this.addEditForm.btnCancelHeight
	      el.style.color = this.addEditForm.btnCancelFontColor
	      el.style.fontSize = this.addEditForm.btnCancelFontSize
	      el.style.borderWidth = this.addEditForm.btnCancelBorderWidth
	      el.style.borderStyle = this.addEditForm.btnCancelBorderStyle
	      el.style.borderColor = this.addEditForm.btnCancelBorderColor
	      el.style.borderRadius = this.addEditForm.btnCancelBorderRadius
	      el.style.backgroundColor = this.addEditForm.btnCancelBgColor
	    })
	  })
	},
	addEditUploadStyleChange() {
		this.$nextTick(()=>{
		  document.querySelectorAll('.addEdit-block .upload .el-upload-list--picture-card .el-upload-list__item').forEach(el=>{
			el.style.width = this.addEditForm.uploadHeight
			el.style.height = this.addEditForm.uploadHeight
			el.style.borderWidth = this.addEditForm.uploadBorderWidth
			el.style.borderStyle = this.addEditForm.uploadBorderStyle
			el.style.borderColor = this.addEditForm.uploadBorderColor
			el.style.borderRadius = this.addEditForm.uploadBorderRadius
			el.style.backgroundColor = this.addEditForm.uploadBgColor
		  })
	  })
	},
  }
};
</script>
<style lang="scss">
.editor{
  height: 500px;
  
  & /deep/ .ql-container {
	  height: 310px;
  }
}
.amap-wrapper {
  width: 100%;
  height: 500px;
}
.search-box {
  position: absolute;
}
.addEdit-block {
	margin: -10px;
}
.detail-form-content {
	padding: 12px;
}
.btn .el-button {
  padding: 0;
}
</style>
