<template>
  <div class="user-profile-page user-center-page">
    <!-- 个人信息 -->
    <div class="custom-card">
        <h1 class="card-title">个人信息</h1>
        <div class="card-box">
            <Form class="profile-form" ref="formValidate" :model="formValidate" :rules="ruleValidate" :label-width="80">
                <FormItem label="手机号" prop="phone">
                    <Input :disabled="true" v-model="formValidate.name" placeholder="Enter your phone"></Input>
                </FormItem>
                <FormItem label="性别" prop="gender">
                    <RadioGroup v-model="formValidate.gender">
                        <Radio label="male">Male</Radio>
                        <Radio label="female">Female</Radio>
                    </RadioGroup>
                </FormItem>
                <FormItem label="生日">
                    <Row>
                        <Col span="11">
                            <FormItem prop="birthday">
                                <DatePicker type="date" placeholder="Select date" v-model="formValidate.birthday"></DatePicker>
                            </FormItem>
                        </Col>
                    </Row>
                </FormItem>
                <FormItem label="真实姓名" prop="name">
                    <Input v-model="formValidate.name" placeholder="Enter your name"></Input>
                </FormItem>
                <FormItem label="身份证" prop="id">
                    <Input v-model="formValidate.id" placeholder="Enter your id"></Input>
                </FormItem>
                <FormItem label="邮箱" prop="mail">
                    <Input v-model="formValidate.mail" placeholder="Enter your e-mail"></Input>
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
export default {
  data() {
    return {
        formValidate: {
            phone: '',
            gender: '',
            birthday: '',
            name: '',
            id: '',
            mail: '',
        },
        ruleValidate: {
            phone: [
                { required: true, message: 'The phone cannot be empty', trigger: 'blur' },
                { type: 'number', message: 'Incorrect number format', trigger: 'blur' }
            ],
            gender: [
                { required: true, message: 'Please select gender', trigger: 'change' }
            ],
            birthday: [
                { required: true, type: 'date', message: 'Please select the date', trigger: 'change' }
            ],
            name : [
                { required: true, message: 'The name cannot be empty', trigger: 'blur' },
            ],
            id: [
                { required: true, message: 'The id cannot be empty', trigger: 'blur' },
                { type: 'number', message: 'Incorrect id format', trigger: 'blur' }
            ],
            mail: [
                { required: true, message: 'Mailbox cannot be empty', trigger: 'blur' },
                { type: 'email', message: 'Incorrect email format', trigger: 'blur' }
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

  }
}
</script>

<style lang="scss">
    @import './user-profile.scss';
</style>
