<template>
  <div class="enterprise-profile-page user-center-page">
    <!-- 基本信息 -->
    <div class="custom-card">
        <h1 class="card-title">基本信息</h1>
        <div class="card-box">
            <Form class="profile-form clearfix" ref="formValidate" :model="formValidate" :rules="ruleValidate" :label-width="100">
                <FormItem label="旅行社名称" prop="travelName">
                    <Input :disabled="true" v-model="formValidate.travelName" placeholder="travel name"></Input>
                </FormItem>
                <FormItem label="联系人" prop="contact">
                    <Input v-model="formValidate.contact" placeholder="Enter travel contact"></Input>
                </FormItem>
                <FormItem label="电话" prop="phone">
                    <Input v-model="formValidate.phone" placeholder="Enter travel phone"></Input>
                </FormItem>
                <FormItem label="所在地" prop="location">
                    <Select v-model="formValidate.city" placeholder="Select your location">
                        <Option value="beijing">New York</Option>
                        <Option value="shanghai">London</Option>
                        <Option value="shenzhen">Sydney</Option>
                    </Select>
                </FormItem>
                <FormItem label="地址" prop="address">
                    <Input v-model="formValidate.address" placeholder="Enter your address"></Input>
                </FormItem>
                <FormItem label="上传logo" prop="logo">
                    <image-upload></image-upload>
                </FormItem>
                <FormItem label="旅行社门脸" prop="front">
                    <image-upload></image-upload>
                </FormItem>
                <FormItem class="editor-markdown" label="旅行社简介" prop="sumamry">
                    <vue-editor-markdown :isPreview="true" :v-model="formValidate.sumamry"></vue-editor-markdown>
                </FormItem>
                <FormItem>
                    <Button type="primary" @click="handleSubmit('formValidate')">Submit</Button>
                    <Button type="ghost" @click="handleReset('formValidate')" style="margin-left: 8px">Reset</Button>
                </FormItem>
            </Form>
      </div>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
import ImageUpload from '../../../common/img-upload/img-upload.vue'
export default {
  data() {
    return {
        formValidate: {
            travelName: '',
            contact: '',
            phone: '',
            location: '',
            address: '',
            logo: '',
            front: '',
            sumamry: '',
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
  }
}
</script>

<style lang="scss">
@import './travel-info.scss';
</style>
