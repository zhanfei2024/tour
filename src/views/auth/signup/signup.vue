<template>
    <div class="signup-page">
        <div class="container">
            <div class="row">
                <div class="signup-wrapper clearfix">
                    <h1 class="signup-title margin-bottom-20"><span>{{formTitle}}</span></h1>
                    <Form class="signup-form" ref="formInline" :model="formInline" :rules="ruleInline">
                        <FormItem prop="user">
                            <Input type="text" v-model="formInline.user" placeholder="Username">
                                <Icon type="ios-person-outline" slot="prepend"></Icon>
                            </Input>
                        </FormItem>
                        <FormItem prop="password">
                            <Input type="password" v-model="formInline.password" placeholder="Password">
                                <Icon type="ios-locked-outline" slot="prepend"></Icon>
                            </Input>
                        </FormItem>
                        <FormItem prop="confirmPassword">
                            <Input type="password" v-model="formInline.confirmPassword" placeholder="Confirm password">
                                <Icon type="ios-locked-outline" slot="prepend"></Icon>
                            </Input>
                        </FormItem>
                        <FormItem>
                            <RadioGroup v-model="formInline.agree">
                                <Radio label="male">已经阅读并同意<router-link :to="'/'">《用户服务条款》</router-link></Radio>
                            </RadioGroup>
                        </FormItem>
                        <FormItem>
                            <Button class="submit-login" type="primary" @click="handleSubmit('formInline')">注册</Button>
                        </FormItem>
                    </Form>
                </div>
            </div>
        </div>
    </div>
</template>

<script type="text/ecmascript-6">

export default {
    name: 'signup',
    props: {
        signupTitle: String,
        enterPriseSignup: Boolean,
    },

    data() {
        const validatePass = (rule, value, callback) => {
            if (value === '') {
                callback(new Error('Please enter your password'));
            } else {
                if (this.formInline.confirmPassword !== '') {
                    // 对第二个密码框单独验证
                    this.$refs.formInline.validateField('confirmPassword');
                }
                callback();
            }
        };
        const validatePassCheck = (rule, value, callback) => {
            if (value === '') {
                callback(new Error('Please enter your password again'));
            } else if (value !== this.formInline.password) {
                callback(new Error('The two input passwords do not match!'));
            } else {
                callback();
            }
        };
      return {
        formInline: {
                user: '',
                password: '',
                confirmPassword: '',
                agree: ''
        },
        ruleInline: {
            user: [
                { required: true, message: 'Please fill in the user name', trigger: 'blur' }
            ],
            password: [
                { validator: validatePass, trigger: 'blur' }
            ],
            confirmPassword: [
                { validator: validatePassCheck, trigger: 'blur' }
            ],
            agree: [
                { required: true, message: 'Please fill in the password.', trigger: 'blur' },
                { type: 'string', min: 6, message: 'The password length cannot be less than 6 bits', trigger: 'blur' }
            ]
        }
      }
    },
    components: {

    },
    created() {
        this.formInit(this.$route.path)
    },
    methods: {
        formInit(status) {
            switch (status) {
                case '/user-register':
                    this.formTitle = '新用户注册';
                    this.userSignup = false;
                    break;
                case '/enterprise-register':
                    this.formTitle = '旅行社注册';
                    this.enterPriseSignup = true;
                    break;
            }
        },
        handleSubmit(name) {
            this.$refs[name].validate((valid) => {
                if (valid) {
                    this.$Message.success('Success!');
                } else {
                    this.$Message.error('Fail!');
                }
            })
        }
    },
}
</script>

<style lang="scss">
    @import './signup.scss'
</style>

