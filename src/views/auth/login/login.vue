<template>
  <div class="user-login">
    <div class="container">
      <div class="row">
        <div class="user-login-inner">
          <div class="col-xs-12 col-sm-4 col-md-4 pull-right">
          <div class="form-wrapper">
            <h1 class="form-title text-center">{{formTitle}}</h1>
            <Form ref="formInline" :model="formInline" :rules="ruleInline">
              <FormItem prop="phone">
                  <Input type="text" v-model="formInline.phone" placeholder="Phone">
                      <Icon type="ios-person-outline" slot="prepend"></Icon>
                  </Input>
              </FormItem>
              <FormItem prop="password">
                  <Input type="password" v-model="formInline.password" placeholder="Password">
                      <Icon type="ios-locked-outline" slot="prepend"></Icon>
                  </Input>
              </FormItem>
              <FormItem>
                  <Button class="submit-login" type="primary" @click="handleSubmit('formInline')">Signin</Button>
              </FormItem>
            </Form>
            <ul class="form-add">
              <li class="pull-left"><router-link :to="'reset-password'">忘记密码</router-link></li>
              <li class="pull-right"><router-link :to="formRegisterUrl">新用户注册</router-link></li>
            </ul>
          </div>
        </div>
      </div>
    </div>
        
    </div>
      
  </div>
</template>

<script type="text/ecmascript-6">
export default {
  name: 'user-login',
  data() {
    return {
        formTitle: '',
        formRegisterUrl: '',
        formInline: {
            phone: '',
            password: ''
        },
        ruleInline: {
            phone: [
                { required: true, message: 'Please fill in the user phone', trigger: 'blur' }
            ],
            password: [
                { required: true, message: 'Please fill in the password.', trigger: 'blur' },
                { type: 'string', min: 6, message: 'The password length cannot be less than 6 bits', trigger: 'blur' }
            ]
      }
    }
  },
  created() {
      this.formInit(this.$route.path)
  },
  methods: {
    formInit(status) {
        switch (status) {
            case '/user-login':
                this.formTitle = '用户登录';
                this.formRegisterUrl = '/user-register';
                break;
            case '/enterprise-login':
                this.formTitle = '企业登录';
                this.formRegisterUrl = '/travel-register';
                break;
        }
    },
    handleSubmit(name) {
        this.$refs[name].validate((valid) => {
            if (valid) {
                switch (this.$route.path) {
                    case '/user-login':
                        console.log(this.$route.path, this.formInline.phone,'111')
                        this.$router.push({ path: `/user/${this.formInline.phone}/center` });
                        this.$store.commit('setAuth', {
                            role: 'user',
                            roleId: this.formInline.phone
                        });
                        this.$Message.success('Success!');
                        break;
                    case '/enterprise-login':
                        console.log(this.$route.path, this.formInline.phone, `/enterprise/${this.formInline.phone}/center` ,'2222')
                        this.$router.push({ path: `/enterprise/${this.formInline.phone}/center` });
                        this.$store.commit('setAuth', {
                            role: 'enterprise',
                            roleId: this.formInline.phone
                        });
                        this.$Message.success('Success!');
                        break;
                }
                
            } else {
                this.$Message.error('Fail!');
            }
        })
    }
  },
  components: {

  }
}
</script>

<style lang="scss" scoped>

</style>


