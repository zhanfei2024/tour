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
            title="轮播图"
            @on-ok="handleSubmit('formValidate')"
            @on-cancel="handleReset('formValidate')">
            <Form class="profile-form" ref="formValidate" :model="formValidate" :rules="ruleValidate" :label-width="100" style="width: 80%">
                <FormItem label="标题" prop="carouseTitle">
                    <Input v-model="formValidate.carouseTitle" placeholder="travel name"></Input>
                </FormItem>
                <FormItem label="链接地址" prop="url">
                    <Input v-model="formValidate.url" placeholder="Enter url"></Input>
                </FormItem>
                <FormItem label="排序" prop="order">
                    <Input v-model="formValidate.order" placeholder="Enter order"></Input>
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
    return {
        modal: false,
        formValidate: {
            carouseTitle: '',
            pic: '',
            url: '',
            order: '',
        },
        ruleValidate: {
            carouseTitle: [
                { required: true, message: 'The carouse title cannot be empty', trigger: 'blur' },
            ],
            pic: [
                { required: true, message: 'The image cannot be empty', trigger: 'blur' },
            ],
            url: [
                { required: true, message: 'The url cannot be empty', trigger: 'blur' },
            ],
            order: [
                { required: true, message: 'Theorderurl cannot be empty', trigger: 'blur' },
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
