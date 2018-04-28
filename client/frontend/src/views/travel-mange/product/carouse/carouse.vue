<template>
  <div class="user-center-page travel-manage-carouse">
    <!-- 我的订单 -->
    <div class="custom-card margin-bottom-20">
        <h1 class="travel-manage-title margin-bottom-20"><span>轮播图</span><span class="pull-right" @click="modal = true">添加</span></h1>

        <h1 class="card-title clearfix"><span class="top-title text-left">标题</span><span class="order text-left">排序</span><span class="operate pull-right">操作</span></h1>
        <div class="card-box">
            <div class="carouse-item clearfix">
                <div class="carouse-info">
                    <img class="carouse-image" src="http://via.placeholder.com/80x80">
                    <p class="text-wrapper"><span class="carouse-text">大西洋莞出发大西洋号东莞出发深圳往返 深圳太子湾</span></p>
                </div>
                <div class="carouse-order">20</div>
                <div class="carouse-oprate pull-right"><span class="carouse-edit" @click="modal = true">编辑</span><span class="carouse-delete">删除</span></div>
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
            <FormItem label="图片" prop="pic">
                <image-upload></image-upload>
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
import ImageUpload from '../../../common/img-upload/img-upload.vue'
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
            }
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
        ImageUpload
    }
}
</script>

<style lang="scss">
@import './manage-carouse.scss';
</style>
