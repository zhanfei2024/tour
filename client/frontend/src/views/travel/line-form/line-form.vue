<template>
    <div class="line-form-page user-center-page">
        <div class="container">
            <div class="row">
                <!-- 国内游 -->
                <div class="custom-card  margin-top-20 margin-bottom-20">
                    <h1 class="card-title">提交订单{{$t('message.hello')}}</h1>
                    <div class="card-box">

                        <!-- 产品信息 -->
                        <div class="custom-card product-info">
                            <h1 class="card-title">产品信息</h1>
                            <div class="card-box">
                                <ul class="info-list">
                                    <li class="info-item">
                                        线路信息：乐享奢华普吉6天5晚【1晚甲米+2晚海边+2晚别墅】 [成都出发]
                                    </li>
                                    <li class="info-item">
                                        产品类型：
                                    </li>
                                    <li class="info-item">
                                        出发日期：2018-08-12（星期二）
                                    </li>
                                    <li class="info-item">
                                        出行人数：成人<InputNumber :max="10" :min="1" v-model="selectNum"></InputNumber>
                                    </li>
                                </ul>
                            </div>
                        </div>

                        <!-- 联系人信息 -->
                        <div class="custom-card product-info">
                            <h1 class="card-title">联系人信息<span>请务必确保以下联系方式准确及畅通，便于接收行程通知与确认信息</span></h1>
                            <div class="card-box">
                                <Form ref="contactForm" :model="contactForm" :rules="contactValidate" :label-width="80">
                                    <FormItem label="姓名" prop="name">
                                        <Input v-model="contactForm.name" placeholder="Enter your name"></Input>
                                    </FormItem>
                                    <FormItem label="手机号" prop="phone">
                                        <Input v-model="contactForm.phone" placeholder="Enter your phone"></Input>
                                    </FormItem>
                                </Form>
                            </div>
                        </div>

                        <!-- 出行人信息 -->
                        <div class="custom-card product-info">
                            <h1 class="card-title">出行人信息<span>为了确保您顺利出行，请务必仔细填写出行人的信息，避免因信息错误耽误您的旅行</span></h1>
                            <div class="card-box">
                                <Form v-for="form in selectTravelForm" :key="form.id" ref="travelForm" :model="form.form.travelForm" :rules="form.form.travelValidate" :label-width="80">
                                    <h1>第{{form.id + 1}}位出行人</h1>
                                    <FormItem label="姓名" prop="name">
                                        <Input v-model="form.form.travelForm.name" placeholder="Enter your name"></Input>
                                    </FormItem>
                                    <FormItem label="证件类型" prop="idType">
                                        <Select v-model="form.form.travelForm.idType" placeholder="Select your id">
                                            <Option value="beijing">New York</Option>
                                            <Option value="shanghai">London</Option>
                                            <Option value="shenzhen">Sydney</Option>
                                        </Select>
                                    </FormItem>
                                    <FormItem label="证件号码" prop="idNum">
                                        <Input v-model="form.form.travelForm.idNum" placeholder="Enter your id number"></Input>
                                    </FormItem>
                                    <FormItem label="手机号" prop="phone">
                                        <Input v-model="form.form.travelForm.phone" placeholder="Enter your phone"></Input>
                                    </FormItem>
                                </Form>
                            </div>
                        </div>
                        
                        <!-- 确认提交订单 -->
                        <div class="line-form-submit text-center">
                            <Button type="primary">保存</Button>
                        </div>
                        <!-- <FormItem>
                            <Button type="primary" @click="handleSubmit('')">Submit</Button>
                            <Button type="ghost" @click="handleReset('')" style="margin-left: 8px">Reset</Button>
                        </FormItem> -->
                    </div>
                </div>

                <div class="custom-card margin-top-20 margin-bottom-20">
                    <h1 class="card-title">订单信息</h1>
                </div>

                </div>
            </div>
        </div>
 

  </div>
</template>

<script type="text/ecmascript-6">
export default {
    name: 'line-form-page',
  data() {
    return {
        selectNum: 0,
        Form: {
            travelForm: {
                        name: '',
                        idType: '',
                        idNum: '',
                        phone: ''
                    },
            travelValidate: {
                        name: [
                            { required: true, message: 'The name cannot be empty', trigger: 'blur' }
                        ],
                        idType: [
                            { required: true, message: 'Please select the id type', trigger: 'change' },
                        ],
                        idNum: [
                            { required: true, message: 'The id number cannot be empty', trigger: 'blur' }
                        ],
                        phone: [
                            { required: true, message: 'The phone cannot be empty', trigger: 'blur' }
                        ],
            },
        },
        selectTravelForm: [ ],
        value1: 1,
        value14: 'Hello World',
        contactForm: {
                    name: '',
                    phone: '',
        },
        contactValidate: {
                    name: [
                        { required: true, message: 'The name cannot be empty', trigger: 'blur' }
                    ],
                    phone: [
                        { required: true, message: 'Mailbox cannot be empty', trigger: 'blur' },
                    ]
        },
        
    }
  },
  created() {
    //   console.log(this.selectTravelForm.push(this.Form), this.Form, '----------')
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
  components: {

  }
}
</script>

<style lang="scss">
</style>
