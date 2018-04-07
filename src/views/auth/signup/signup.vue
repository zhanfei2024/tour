<template>
    <div class="signup">
        <div class="container">
            <div class="row">
                <div class="signup-wrapper">
                    <h1 class="signup-title"><span>{{formTitle}}</span></h1>
                    <Form class="signup-form" ref="formInline" :model="formInline" :rules="ruleInline">
                        <FormItem v-if="enterPriseSignup" prop="user">
                            <Input type="text" v-model="formInline.user" placeholder="Username">
                                <Icon type="ios-person-outline" slot="prepend"></Icon>
                            </Input>
                        </FormItem>
                        <FormItem prop="user">
                            <Input type="text" v-model="formInline.user" placeholder="Username">
                                <Icon type="ios-person-outline" slot="prepend"></Icon>
                            </Input>
                        </FormItem>
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
                        <FormItem>
                            <RadioGroup v-model="formInline.password">
                                <Radio label="male">已经阅读并同意<router-link :to="'/'">《用户服务条款》</router-link></Radio>
                            </RadioGroup>
                        </FormItem>
                        <FormItem>
                            <Button class="submit-login" type="primary" @click="handleSubmit('formInline')">Signin</Button>
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
      return {
        formInline: {
                user: '',
                password: ''
            },
            ruleInline: {
                user: [
                    { required: true, message: 'Please fill in the user name', trigger: 'blur' }
                ],
                password: [
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
                    this.enterPriseSignup = false;
                    break;
                case '/travel-register':
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

<style lang="scss" scoped>

</style>

