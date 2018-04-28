<template>
  <div class="user-center-page user-safe-list-page">
    <!-- 个人信息 -->
    <div class="custom-card">
        <h1 class="card-title">安全设置</h1>
        <div class="card-box">
            <div class="safe-item">
                <div class="safe-text">
                    <div class="safe-logo"><Icon type="ios-locked"></Icon></div>
                    <section class="safe-introduce">
                        <p class="safe-title">登录密码</p>
                        <p class="safe-info">建议您定期更换密码，设置安全性高的密码可以使帐号更安全</p>
                    </section>
                </div>
                <Button @click="modal = true">修改</Button>
            </div>

            <div class="safe-item">
                <div class="safe-text">
                    <div class="safe-logo"><Icon type="iphone"></Icon></div>
                    <section class="safe-introduce">
                        <p class="safe-title">安全手机 186****5678</p>
                        <p class="safe-info">安全手机可以用于登录帐号，重置密码或其他安全验证</p>
                    </section>
                </div>
                <Button><router-link :to="'/user/123/phone-set'">更换</router-link></Button>
            </div>
        </div>
        <!-- 模态框 -->
        <Modal
            v-model="modal"
            title="修改密码"
            @on-ok="handleSubmit('formValidate')"
            @on-cancel="handleReset('formValidate')">
            <Form class="profile-form" ref="formValidate" :model="formValidate" :rules="ruleValidate" :label-width="100" style="width: 80%">
                <FormItem label="原密码" prop="oldPass">
                    <Input type="password" v-model="formValidate.oldPass" placeholder="请输入原密码"></Input>
                </FormItem>
                <FormItem label="新密码" prop="pass">
                    <Input type="password" v-model="formValidate.pass" placeholder="设置6至20位登录密码"></Input>
                </FormItem>
                <FormItem label="" prop="passCheck">
                    <Input type="password" v-model="formValidate.passCheck" placeholder="请再次输入登录密码"></Input>
                </FormItem>
            </Form>
        </Modal>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
import ImgUpload from '../../../common/img-upload/img-upload.vue'
export default {
  data() {
    const validatePass = (rule, value, callback) => {
        if (value === '') {
            callback(new Error('Please enter your password'));
        } else {
            if (this.formValidate.passCheck !== '') {
                // 对第二个密码框单独验证
                this.$refs.formValidate.validateField('passCheck');
            }
            callback();
        }
    };
    const validatePassCheck = (rule, value, callback) => {
        if (value === '') {
            callback(new Error('Please enter your password again'));
        } else if (value !== this.formValidate.pass) {
            callback(new Error('The two input passwords do not match!'));
        } else {
            callback();
        }
    };
    const validateOldPass = (rule, value, callback) => {
        if (!value) {
            return callback(new Error('Age cannot be empty'));
        }
    };
    return {
        modal: false,
        formValidate: {
            oldPass: '',
            pass: '',
            passCheck: '',
        },
        ruleValidate: {
            oldPass: [
                { validator: validateOldPass, trigger: 'blur' }
            ],
            pass: [
                { validator: validatePass, trigger: 'blur' }
            ],
            passCheck: [
                { validator: validatePassCheck, trigger: 'blur' }
            ]
        },
    }
  },
    methods: {
        del () {
            this.modal_loading = true;
            setTimeout(() => {
                this.modal_loading = false;
                this.modal2 = false;
                this.$Message.success('Successfully delete');
            }, 2000);
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
      ImgUpload
  }
}
</script>

<style lang="scss">
</style>
