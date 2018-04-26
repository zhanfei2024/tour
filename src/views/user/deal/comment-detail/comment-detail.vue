<template>
    <div class="user-center-page user-comment-list">
            <!-- 我的订单 -->
        <div class="custom-card">
            <h1 class="card-title">评价订单</h1>
            <div class="card-box">
                <order-item :orders="orders"></order-item>
            </div>
            <div class="card-box">
                <div class="comment-item">
                    <span class="comment-label">食宿评分：</span>
                    <Rate show-text allow-half v-model="valueCustomText">
                        <span style="color: #f5a623">{{ valueCustomText }}</span>
                    </Rate>
                </div>
                <div class="comment-item">
                    <span class="comment-label">行程评分：</span>
                    <Rate show-text allow-half v-model="valueCustomText">
                        <span style="color: #f5a623">{{ valueCustomText }}</span>
                    </Rate>
                </div>
                <div class="comment-item">
                    <span class="comment-label">服务评分：</span>
                    <Rate show-text allow-half v-model="valueCustomText">
                        <span style="color: #f5a623">{{ valueCustomText }}</span>
                    </Rate>
                </div>

                <Form ref="formValidate" :model="formValidate" :rules="ruleValidate" :label-width="60">
                    <FormItem label="填写评价" prop="desc">
                        <Input v-model="formValidate.desc" type="textarea" :autosize="{minRows: 2,maxRows: 5}" placeholder="Enter something..."></Input>
                    </FormItem>
                    <FormItem>
                        <Button type="primary" @click="handleSubmit('formValidate')">提交</Button>
                    </FormItem>
                </Form>

            </div>
        </div>
    </div>
</template>

<script type="text/ecmascript-6">
import OrderItem from '@/views/common/order-item/order-item.vue'
export default {
    name: 'comment',
    data() {
      return {
        valueText: 3,
        valueCustomText: 3.8,
        orders: [
            {
                id: '22221112222',
                orderTime: '2018-09-12',
                imgUrl: 'http://via.placeholder.com/80x80',
                tourTitle: '泰国五日游',
                tourObject: '跟团游',
                tourStart: '深圳',
                adultNum: '2',
                childrenNum: '1',
                TourTime: '2018-5-1',
                tourPrice: '2999',
                status: 'success'
            },
        ],
        formValidate: {
            desc: ''
        },
        ruleValidate: {
            desc: [
                { required: true, message: 'Please enter a personal introduction', trigger: 'blur' },
                { type: 'string', min: 20, message: 'Introduce no less than 20 words', trigger: 'blur' }
            ]
        }
      }
    },
    components: {
        OrderItem
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
    }
}
</script>

<style lang="scss">
</style>
