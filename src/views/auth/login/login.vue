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
                  <Input type="password" v-model="formInline.password" placeholder="Password" v-on:keyup.enter="test">
                      <Icon type="ios-locked-outline" slot="prepend"></Icon>
                  </Input>
              </FormItem>
              <FormItem>
                  <Button  class="submit-login" type="primary" v-on:keyup.enter="test" @click="handleSubmit('formInline')" >Signin</Button>
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
  mounted() {
    //   this.addEventListener()
  },
  created() {
    //   console.log(this.$refs.submit)
    //   this.formInit(this.$route.path)
    console.log(this.object()(1));
    console.log(Object.prototype)
  },
  methods: {
    object() {
        return Object.print = function(o) {
            console.log(o)
        }
    },
    push(array, ...items) {
        array.push(...items);
        console.log(array, 'array')
    },
    arrAdd() {
        let arr1 = [0, 1, 2];
        let arr2 = [3, 4, 5];
        // arr1.push(...arr2);
        console.log(arr1)
    },
    test() {
        console.log('ok')
    },
    // addEventListener() {
    //     this.$refs.submit.addEventListener('click', this.test, false)
    // },
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
        console.log('ok')
        this.$refs[name].validate((valid) => {
            if (valid) {
                switch (this.$route.path) {
                    case '/user-login':
                        let user = {
                            'role': 'user',
                            'roleId': this.formInline.phone
                        }
                        for (const key in user) {
                            if (user.hasOwnProperty(key)) {
                                const element = user[key];
                                window.localStorage.setItem(key, element)
                                this.$store.commit('setAuth', user)
                            }
                        }
                        console.log(this.$route.query.redirect);
                        let userUrl = this.$route.query.redirect ? this.$route.query.redirect : `/user/${this.formInline.phone}/center`
                        this.$router.push({ path: userUrl })
                        this.$Message.success('Success!');
                        break;
                    case '/enterprise-login':
                        let enterprise = {
                            'role': 'enterprise',
                            'roleId': this.formInline.phone
                        }
                        for (const key in enterprise) {
                            if (enterprise.hasOwnProperty(key)) {
                                const element = enterprise[key];
                                window.localStorage.setItem(key, element)
                                this.$store.commit('setAuth', enterprise)
                            }
                        }
                        let enterpriseUrl = this.$route.query.redirect ? this.$route.query.redirect : `/enterprise/${this.formInline.phone}/center`
                        this.$router.push({ path: enterpriseUrl });
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


