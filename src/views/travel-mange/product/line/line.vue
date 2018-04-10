<template>
  <div class="user-profile-page user-center-page user-phone-set">
    <!-- 基本信息 -->
    <div class="custom-card">
        <h1 class="card-title">线路管理</h1>
        <div class="card-box">
            <div v-show="progress.currentNum === 1  || progress.currentNum === 2" class="form-list">
                <custom-progress :progress="progress"></custom-progress>
                <Form class="profile-form" ref="formItem" :model="formItem" :rules="ruleValidate" :label-width="100">
                    <div v-show="progress.currentNum === 1">
                        <FormItem label="线路标题" prop="lineName">
                            <Input v-model="formItem.lineName" placeholder="Enter title, up to 35 words"></Input>
                        </FormItem>
                        <FormItem label="线路类型">
                            <RadioGroup v-model="formItem.lineObject">
                                <Radio label="male">国内游</Radio>
                                <Radio label="female">境外游</Radio>
                            </RadioGroup>
                        </FormItem>
                        <FormItem label="产品性质">
                            <RadioGroup v-model="formItem.productObject">
                                <Radio label="male">跟团游</Radio>
                                <Radio label="female">自助游</Radio>
                            </RadioGroup>
                        </FormItem>
                        <FormItem label="上传图片" prop="lineImgs">
                            <custom-img-upload></custom-img-upload>
                        </FormItem>
                        <FormItem label="出发城市" prop="startCity">
                            <Select v-model="formItem.startCity" placeholder="Select your start city">
                                <Option value="beijing">New York</Option>
                                <Option value="shanghai">London</Option>
                                <Option value="shenzhen">Sydney</Option>
                            </Select>
                        </FormItem>
                        <FormItem label="目的地" prop="destination">
                            <Select v-model="formItem.destination" placeholder="Select your destination">
                                <Option value="beijing">New York</Option>
                                <Option value="shanghai">London</Option>
                                <Option value="shenzhen">Sydney</Option>
                            </Select>
                        </FormItem>
                        <FormItem label="线路价格" prop="adultPrice">
                            <Input v-model="formItem.adultPrice" placeholder="Enter enter adult price"></Input>
                        </FormItem>
                        <FormItem label="" prop="childrenPrice">
                            <Input v-model="formItem.childrenPrice" placeholder="Enter enter children Price"></Input>
                        </FormItem>
                        <FormItem label="发团日期" prop="startDay">
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
                        <FormItem label="指定时间段">
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
                    </div>
                    <div v-show="progress.currentNum === 2">
                        <FormItem label="线路特色" prop="feature">
                            <vue-editor-markdown :v-model="formItem.feature"></vue-editor-markdown>
                        </FormItem>
                        <FormItem label="排序" prop="order">
                            <RadioGroup v-model="formItem.order">
                                <Radio label="male">按行程内容排序</Radio>
                                <Radio label="female">按时间顺序排序</Radio>
                            </RadioGroup>
                        </FormItem>
                        <FormItem label="参考行程" prop="trip">
                            <vue-editor-markdown :v-model="formItem.trip"></vue-editor-markdown>
                        </FormItem>
                        <FormItem label="费用说明" prop="costDescription">
                            <vue-editor-markdown :v-model="formItem.costDescription"></vue-editor-markdown>
                        </FormItem>
                        <FormItem label="预定须知" prop="notice">
                            <vue-editor-markdown :v-model="formItem.notice"></vue-editor-markdown>
                        </FormItem>
                    </div>
                    <div v-show="progress.currentNum === 3"></div>
                        
                    <FormItem>
                        <Button type="primary" @click="handleStep()">下一步</Button>
                        <!-- <Button type="ghost" @click="handleReset('formValidate')" style="margin-left: 8px">Reset</Button> -->
                    </FormItem>
                </Form>
            </div>
            <div v-show="progress.currentNum === 3" class="success">
               <div class="success-logo">
                   <Icon type="checkmark-circled"></Icon>
               </div>
               <section class="success-info">
                   <h1 class="success-title text-center">线路发布成功</h1>
                   <p class="success-content">预计24小时内完成审核，请耐心等待</p>
               </section>
               <Button class="success-button" type="primary"><router-link :to="'/user/123/safe'">返回</router-link></Button>
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
        progress: {
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
  methods: {
    handleStep() {
        this.progress.currentNum++;
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

<style scoped lang="scss">

</style>
