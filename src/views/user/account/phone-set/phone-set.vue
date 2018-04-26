<template>
  <div class="user-center-page user-phone-set">
    <!-- 个人信息 -->
    <div class="custom-card">
        <h1 class="card-title">更换手机号码</h1>
        <div class="card-box">
            <custom-progress :progress="progress"></custom-progress>
            <div v-show="progress.currentNum === 1  || progress.currentNum === 2" class="form-list">
                <Form ref="formValidate" :model="formValidate" :rules="ruleValidate" :label-width="80">
                    <FormItem v-show="progress.currentNum === 1" label="验证码" prop="code">
                        <Input v-model="formValidate.code" :placeholder="codePlaceholder">
                        </Input>
                        <div class="phone-code text-right" @click="setCode()">{{codeStatus}}</div>
                    </FormItem>
                    <FormItem v-show="progress.currentNum === 2" label="手机号码" prop="phone">
                        <Input v-model="formValidate.code" placeholder="Enter your phone"></Input>
                    </FormItem>
                    <FormItem v-show="progress.currentNum === 2" label="验证码" prop="code">
                        <Input v-model="formValidate.code" placeholder="Enter your code"></Input>
                    </FormItem>
                    <FormItem>
                        <Button type="ghost" @click="handleStep()" style="margin-left: 8px">下一步</Button>
                        <Button type="primary" @click="handleSubmit('formValidate')">Submit</Button>
                    </FormItem>
                </Form>
            </div>
            <div v-show="progress.currentNum === 3" class="success">
               <div class="success-logo">
                   <Icon type="checkmark-circled"></Icon>
               </div>
               <section class="success-info">
                   <h1 class="success-title text-center">手机号码更换成功</h1>
                   <p class="success-content">您可以在下次使用新号码进行登录</p>
               </section>
               <Button class="success-button" type="primary"><router-link :to="'/user/123/safe'">返回</router-link></Button>
            </div>
        </div>

    </div>
  </div>
</template>

<script type="text/ecmascript-6">
import CustomProgress from '../../../common/custom-progress/custom-progress.vue'
export default {
    name: 'phone-set',
  data() {
    return {

        progress: {
            currentNum: 1,
            step1: '验证身份',
            step2: '修改手机号码',
            step3: '完成更换'
        },
        codePlaceholder: 'Enter your code',
        codeStatus: '发送验证码',
        codeTime: '',
        formValidate: {
            name: '',
            mail: '',
            city: '',
            gender: '',
            interest: [],
            date: '',
            time: '',
            desc: ''
        },
        ruleValidate: {
            name: [
                { required: true, message: 'The name cannot be empty', trigger: 'blur' }
            ],
            mail: [
                { required: true, message: 'Mailbox cannot be empty', trigger: 'blur' },
                { type: 'email', message: 'Incorrect email format', trigger: 'blur' }
            ],
            city: [
                { required: true, message: 'Please select the city', trigger: 'change' }
            ],
            gender: [
                { required: true, message: 'Please select gender', trigger: 'change' }
            ],
            interest: [
                { required: true, type: 'array', min: 1, message: 'Choose at least one hobby', trigger: 'change' },
                { type: 'array', max: 2, message: 'Choose two hobbies at best', trigger: 'change' }
            ],
            date: [
                { required: true, type: 'date', message: 'Please select the date', trigger: 'change' }
            ],
            time: [
                { required: true, type: 'string', message: 'Please select time', trigger: 'change' }
            ],
            desc: [
                { required: true, message: 'Please enter a personal introduction', trigger: 'blur' },
                { type: 'string', min: 20, message: 'Introduce no less than 20 words', trigger: 'blur' }
            ]
        }
    }
  },
    methods: {
        setCode() {
            this.timeInterval();
        },
        timeInterval() {
            let seconds = 3;
            var timer = setInterval( () => {
                if (seconds > 0) {
                    seconds--;
                    this.codeStatus = seconds+'s';
                } else {
                    seconds === 0;
                    this.codeStatus = '发送验证码';
                    clearInterval(timer);
                }
            }, 1000);
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
        },
        handleStep() {
            this.progress.currentNum++;
            console.log(this.currentNum, '-----------')
        }
    },
  components: {
    CustomProgress
  }
}
</script>

<style lang="scss">
</style>
