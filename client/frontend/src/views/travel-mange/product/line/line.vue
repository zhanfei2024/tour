<template>
  <div class="user-profile-page user-center-page user-phone-set user-safe-list-page">
    <!-- 基本信息 -->
    <div class="custom-card">
        <h1 class="card-title">线路管理</h1>
        <div class="card-box">
            <div v-show="customProgress.currentNum === 1  || customProgress.currentNum === 2" class="form-list">
                <custom-progress :progress="customProgress"></custom-progress>
                <Form class="line-form clearfix" ref="formItem" :model="formItem" :rules="ruleValidate" :label-width="100">
                    <div v-show="customProgress.currentNum === 1">
                        <FormItem class="width-100" label="线路标题" prop="lineName">
                            <Input v-model="formItem.lineName" placeholder="Enter title, up to 35 words"></Input>
                        </FormItem>
                        <FormItem label="线路类型:">
                            <RadioGroup v-model="formItem.lineObject">
                                <Radio label="male">国内游</Radio>
                                <Radio label="female">境外游</Radio>
                            </RadioGroup>
                        </FormItem>
                        <FormItem label="产品性质:">
                            <RadioGroup v-model="formItem.productObject">
                                <Radio label="male">跟团游</Radio>
                                <Radio label="female">自助游</Radio>
                            </RadioGroup>
                        </FormItem>
                        <FormItem label="出发城市:" prop="startCity">
                            <Select v-model="formItem.startCity" placeholder="Select your start city">
                                <Option value="beijing">New York</Option>
                                <Option value="shanghai">London</Option>
                                <Option value="shenzhen">Sydney</Option>
                            </Select>
                        </FormItem>
                        <FormItem label="目的地:" prop="destination">
                            <Select v-model="formItem.destination" placeholder="Select your destination">
                                <Option value="beijing">New York</Option>
                                <Option value="shanghai">London</Option>
                                <Option value="shenzhen">Sydney</Option>
                            </Select>
                        </FormItem>
                        <FormItem label="成人价格:" prop="adultPrice">
                            <Input v-model="formItem.adultPrice" placeholder="Enter enter adult price"></Input>
                        </FormItem>
                        <FormItem label="儿童价格:" prop="childrenPrice">
                            <Input v-model="formItem.childrenPrice" placeholder="Enter enter children Price"></Input>
                        </FormItem>
                        <FormItem label="发团日期:" prop="startDay">
                            <CheckboxGroup v-model="formItem.startDay">
                                <Checkbox label="星期一"></Checkbox>
                                <Checkbox label="星期二"></Checkbox>
                                <Checkbox label="星期三"></Checkbox>
                                <Checkbox label="星期四"></Checkbox>
                                <Checkbox label="星期五"></Checkbox>
                                <Checkbox label="星期六"></Checkbox>
                                <Checkbox label="星期日"></Checkbox>
                            </CheckboxGroup>
                        </FormItem>
                        <FormItem label="指定时间段:">
                            <Row>
                                <Col span="11">
                                    <FormItem prop="startTime">
                                        <TimePicker type="time" placeholder="Select start Time" v-model="formItem.startTime"></TimePicker>
                                    </FormItem>
                                </Col>
                                <Col span="2" style="text-align: center">-</Col>
                                <Col span="11">
                                    <FormItem prop="endTime">
                                        <TimePicker type="time" placeholder="Select end Time" v-model="formItem.endTime"></TimePicker>
                                    </FormItem>
                                </Col>
                            </Row>
                        </FormItem>
                        <FormItem class="upload-img-item" label="上传图片:" prop="lineImgs">
                            <custom-img-upload></custom-img-upload>
                        </FormItem>
                        <FormItem label="排序:" prop="order">
                            <RadioGroup v-model="formItem.order">
                                <Radio label="male">按行程内容排序</Radio>
                                <Radio label="female">按时间顺序排序</Radio>
                            </RadioGroup>
                        </FormItem>
                    </div>
                    <div v-show="customProgress.currentNum === 2">
                        <h1 class="editor-title">行程                         
                            <p class="info-item pull-right">
                                输入天数<InputNumber :max="10" :min="1" v-model="selectNum"></InputNumber>
                            </p>
                        </h1>
                        <div class="trip-box">
                            <Form class="trip-form margin-bottom-20" v-for="form in selectTravelForm" :key="form.id" ref="travelForm" :model="form.form.travelForm" :rules="form.form.travelValidate" :label-width="80">
                                <h1>第{{form.id + 1}}天</h1>
                                <FormItem label="早餐描述" prop="breakfastAddress">
                                    <Input v-model="form.form.travelForm.breakfastAddress" placeholder="Enter breakfast address"></Input>
                                </FormItem>
                                <FormItem label="">
                                    <Row>
                                        <Col span="11">
                                            <FormItem prop="breakfastStartTime">
                                                <DatePicker type="time" placeholder="Select breakfast startTime" v-model="form.form.travelForm.breakfastStartTime"></DatePicker>
                                            </FormItem>
                                        </Col>
                                        <Col span="2" style="text-align: center">-</Col>
                                        <Col span="11">
                                            <FormItem prop="breakfastEndTime">
                                                <DatePicker type="time" placeholder="Select breakfast endTime" v-model="form.form.travelForm.breakfastEndTime"></DatePicker>
                                            </FormItem>
                                        </Col>
                                    </Row>
                                </FormItem>
                                <FormItem label="" prop="breakfastContent">
                                    <Input v-model="form.form.travelForm.breakfastContent" placeholder="Enter breakfast content"></Input>
                                </FormItem>

                                <FormItem label="中餐描述" prop="lunchAddress">
                                    <Input v-model="form.form.travelForm.lunchAddress" placeholder="Enter lunch address"></Input>
                                </FormItem>
                                <FormItem label="">
                                    <Row>
                                        <Col span="11">
                                            <FormItem prop="lunchStartTime">
                                                <DatePicker type="time" placeholder="Select lunch startTime" v-model="form.form.travelForm.lunchStartTime"></DatePicker>
                                            </FormItem>
                                        </Col>
                                        <Col span="2" style="text-align: center">-</Col>
                                        <Col span="11">
                                            <FormItem prop="lunchEndTime">
                                                <DatePicker type="time" placeholder="Select lunch endTime" v-model="form.form.travelForm.lunchEndTime"></DatePicker>
                                            </FormItem>
                                        </Col>
                                    </Row>
                                </FormItem>
                                <FormItem label="" prop="lunchContent">
                                    <Input v-model="form.form.travelForm.lunchContent" placeholder="Enter lunch content"></Input>
                                </FormItem>

                                <FormItem label="晚餐描述" prop="dinnerAddress">
                                    <Input v-model="form.form.travelForm.dinnerAddress" placeholder="Enter dinner address"></Input>
                                </FormItem>
                                <FormItem label="">
                                    <Row>
                                        <Col span="11">
                                            <FormItem prop="dinnerStartTime">
                                                <DatePicker type="time" placeholder="Select dinner startTime" v-model="form.form.travelForm.dinnerStartTime"></DatePicker>
                                            </FormItem>
                                        </Col>
                                        <Col span="2" style="text-align: center">-</Col>
                                        <Col span="11">
                                            <FormItem prop="dinnerEndTime">
                                                <DatePicker type="time" placeholder="Select dinner endTime" v-model="form.form.travelForm.dinnerEndTime"></DatePicker>
                                            </FormItem>
                                        </Col>
                                    </Row>
                                </FormItem>
                                <FormItem label="" prop="dinnerContent">
                                    <Input v-model="form.form.travelForm.dinnerContent" placeholder="Enter dinner content"></Input>
                                </FormItem>
                                <FormItem label="交通" prop="traffic">
                                    <Input v-model="form.form.travelForm.traffic" placeholder="Enter traffic"></Input>
                                </FormItem>
                                <FormItem label="住宿" prop="sleep">
                                    <Input v-model="form.form.travelForm.sleep" placeholder="Enter sleep"></Input>
                                </FormItem>
                            </Form>
                        </div>


                        <h1 class="editor-title">线路特色</h1>
                        <vue-editor-markdown class="margin-bottom-40" :v-model="formItem.feature"></vue-editor-markdown>
                       
                        <h1 class="editor-title">费用说明</h1>
                        <vue-editor-markdown class="margin-bottom-40" :v-model="formItem.costDescription"></vue-editor-markdown>
    
                        <h1 class="editor-title">预定须知</h1>
                        <vue-editor-markdown class="margin-bottom-40" :v-model="formItem.notice"></vue-editor-markdown>
                        </div>
                    <div v-show="customProgress.currentNum === 3"></div>
                        
                    <FormItem>
                        <Button type="primary" @click="proviousStep()">上一步</Button>
                        <Button type="primary" @click="nextStep()">下一步</Button>
                        <!-- <Button type="ghost" @click="handleReset('formValidate')" style="margin-left: 8px">Reset</Button> -->
                    </FormItem>
                </Form>
            </div>
   
            <div v-show="customProgress.currentNum === 3" class="safe-item">
                <div class="safe-text">
                    <div class="safe-logo"><Icon type="checkmark-circled"></Icon></div>
                    <section class="safe-introduce">
                        <p class="safe-title">线路发布成功</p>
                        <p class="safe-info">预计24小时内完成审核，请耐心等待</p>
                    </section>
                </div>
                <Button><router-link :to="'/user/123/safe'">返回</router-link></Button>
            </div>
      </div>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
import ImageUpload from '../../../common/img-upload/img-upload.vue'
import CustomProgress from '../../../common/custom-progress/custom-progress.vue'
import CustomImgUpload from '../../../common/custom-img-upload/custom-img-upload.vue'
export default {
  data() {
    return {
        selectNum: 0,
        Form: {
            travelForm: {
                        breakfastAddress: '',
                        breakfastStartTime: '',
                        breakfastEndTime: '',
                        breakfastContent: '',
                        lunchAddress: '',
                        lunchStartTime: '',
                        lunchEndTime: '',
                        lunchContent: '',
                        dinnerAddress: '',
                        dinnerStartTime: '',
                        dinnerEndTime: '',
                        dinnerContent: '',
                        traffic: '',
                        sleep: '',
                    },
            travelValidate: {
                        breakfastAddress: [
                            { required: true, message: 'The breakfast address cannot be empty', trigger: 'blur' }
                        ],
                        breakfastStartTime: [
                            { required: true, message: 'The breakfast start time cannot be empty', trigger: 'blur' }
                        ],
                        breakfastEndTime: [
                            { required: true, message: 'The breakfast end time cannot be empty', trigger: 'blur' }
                        ],
                        breakfastContent: [
                            { required: true, message: 'The breakfast content cannot be empty', trigger: 'blur' }
                        ],
                        lunchAddress: [
                            { required: true, message: 'The lunch address cannot be empty', trigger: 'blur' }
                        ],
                        lunchStartTime: [
                            { required: true, message: 'The lunch start time cannot be empty', trigger: 'blur' }
                        ],
                        lunchEndTime: [
                            { required: true, message: 'The lunch end time cannot be empty', trigger: 'blur' }
                        ],
                        lunchContent: [
                            { required: true, message: 'The lunch content cannot be empty', trigger: 'blur' }
                        ],
                        dinnerAddress: [
                            { required: true, message: 'The dinner address cannot be empty', trigger: 'blur' }
                        ],
                        dinnerStartTime: [
                            { required: true, message: 'The dinner start time cannot be empty', trigger: 'blur' }
                        ],
                        dinnerEndTime: [
                            { required: true, message: 'The dinner end time cannot be empty', trigger: 'blur' }
                        ],
                        dinnerContent: [
                            { required: true, message: 'The dinner content cannot be empty', trigger: 'blur' }
                        ],
                        traffic: [
                            { required: true, message: 'The traffic content cannot be empty', trigger: 'blur' }
                        ],
                        sleep: [
                            { required: true, message: 'The sleep content cannot be empty', trigger: 'blur' }
                        ],
            },
        },
        selectTravelForm: [ ],
        customProgress: {
            currentNum: 1,
            step1: '基本信息',
            step2: '详细描述',
            step3: '发布成功'
        },
        formItem: {
            lineName: '',
            lineObject: '',
            productObject: '',
            lineImgs: '',
            startCity: '',
            destination: '',
            adultPrice: '',
            childrenPrice: '',
            startDay: [],
            startTime: '',
            endTime: '',
            feature: '',
            order: '',
            trip: '',
            costDescription: '',
            notice: ''
        },
        ruleValidate: {
            travelName: [
                { required: true, message: 'The travel name cannot be empty', trigger: 'blur' },
            ],
            contact: [
                { required: true, message: 'The contact cannot be empty', trigger: 'blur' },
            ],
            phone: [
                { required: true, message: 'The phone cannot be empty', trigger: 'blur' },
            ],
            location: [
                { required: true, type: 'date', message: 'Please select the location', trigger: 'change' }
            ],
            address: [
                { required: true, message: 'The address cannot be empty', trigger: 'blur' },
            ],
            logo: [
                { required: true, message: 'The logo cannot be empty', trigger: 'blur' },
            ],
            front: [
                { required: true, message: 'The front cannot be empty', trigger: 'blur' },
            ],
            sumamry: [
                { required: true, message: 'The sumamry cannot be empty', trigger: 'blur' },
            ],

        }
    }
  },
  watch: {
      selectNum: function (newSelectNum, oldSelectNum) {
          let direction = newSelectNum - oldSelectNum
          if (direction>0) {
              this.selectTravelForm.push({form: this.Form, id: oldSelectNum})
          } else {
              this.selectTravelForm.pop({form: this.Form, id: newSelectNum})
          }
          console.log(this.selectTravelForm, '---------')
      }
  },
  methods: {
    proviousStep() {
        this.customProgress.currentNum--;
    },
    nextStep() {
        this.customProgress.currentNum++;
    },
    handleSubmit (name) {
        this.$refs[name].validate((valid) => {
            if (valid) {
                this.$Message.success('Success!');
            } else {
                this.$Message.error('Fail!');
            }
        })
    },
    handleReset (name) {
        this.$refs[name].resetFields();
    }
    },
  components: {
      ImageUpload,
      CustomProgress,
      CustomImgUpload
  }
}
</script>

<style lang="scss">
@import './line.scss';
</style>
