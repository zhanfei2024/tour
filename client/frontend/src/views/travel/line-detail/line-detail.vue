<template>
  <div class="line-detail-page user-center-page">
      <div class="container">
          <div class="row clearfix margin-between-30">
             <div class="line-carouse col-xs-12 col-sm-12 col-md-7 pull-left margin-top-20 ">
                 <img class="big-pic pull-left margin-right-10" src="http://via.placeholder.com/430x430">
                 <ul class="tab-pic pull-left ">
                     <li class="pic-item margin-bottom-10"><img src="http://via.placeholder.com/76x76"></li>
                     <li class="pic-item margin-bottom-10"><img src="http://via.placeholder.com/76x76"></li>
                     <li class="pic-item margin-bottom-10"><img src="http://via.placeholder.com/76x76"></li>
                     <li class="pic-item margin-bottom-10"><img src="http://via.placeholder.com/76x76"></li>
                     <li class="pic-item margin-bottom-10"><img src="http://via.placeholder.com/76x76"></li>
                 </ul>
             </div>
             <div class="line-content col-xs-12 col-sm-12 col-md-5 pull-left margin-top-20 ">
                <div class="line-summary">
                    <div class="line-info">
                        <h1 class="line-title">深圳往返泰国曼谷、芭堤雅、沙美岛经典6天5晚跟团游深圳往返泰国曼谷</h1>
                        <p class="line-price"><span class="hot-price">249起</span><span class="supplement-price">儿童价格： 198起</span></p>
                        <p class="start-city">出发城市：深圳</p>
                        <p class="start-day">发团日期：天天发团，请至少提前<span class="upday">1</span>天报名</p>
                        <p class="line-comment">
                            <Icon type="ios-heart-outline"></Icon><Icon type="ios-heart"></Icon>
                            <p class="comment-text">收藏</p>
                        </p>
                    </div>
                </div>
                <div class="line-form">
                    <Form ref="formValidate" :model="formValidate" :rules="ruleValidate" :label-width="80">
                        <FormItem label="产品类型" prop="object">
                            <RadioGroup v-model="formValidate.object">
                                <Radio label="male">Male</Radio>
                                <Radio label="female">Female</Radio>
                            </RadioGroup>
                        </FormItem>

                        <FormItem label="出发日期" prop="date">
                            <DatePicker type="date" placeholder="Select date" v-model="formValidate.date"></DatePicker>
                        </FormItem>

                        <FormItem label="出行人数" prop="date">
                            <InputNumber :max="10" :min="1" v-model="formValidate.adult"></InputNumber>

                            <InputNumber :max="10" :min="1" v-model="formValidate.children"></InputNumber>
                        </FormItem>
        
                        <FormItem>
                            <Button type="primary" @click="handleSubmit('formValidate')">立即预定</Button>
                        </FormItem>
                    </Form>
                </div>
             </div>

                     <!-- 我的订单 -->
            <div class="custom-card col-xs-12 col-sm-12 col-md-8 margin-top-20 margin-bottom-20">
                <div class="line-clause">
                    <h1 class="card-title clearfix">
                        <span class="order-status-title" :class="{active: tab === 'feature'}" @click="tab = 'feature'">线路特色</span>
                        <span class="order-status-title" :class="{active: tab === 'trip'}" @click="tab = 'trip'">参考行程</span>
                        <span class="order-status-title" :class="{active: tab === 'price'}" @click="tab = 'price'">费用说明</span>
                        <span class="order-status-title" :class="{active: tab === 'notice'}" @click="tab = 'notice'">预定须知</span>
                        <span class="order-status-title" :class="{active: tab === 'comment'}" @click="tab = 'comment'">游客点评</span>
                    </h1>
                    <div class="card-box" v-show="tab === 'feature'">
                        <ul class="line-feature">
                            <li class="feature-item">
                                1.因美娜多马路状况，旅游车一般以35座或以下车型为主，建议每辆车收客人数不超过30人，地接将根据团队人数安排，保证每人1正座。
                            </li>
                            <li class="feature-item">
                                2.因美娜多马路状况，旅游车一般以35座或以下车型为主，建议每辆车收客人数不超过30人，地接将根据团队人数安排，保证每人1正座。
                            </li>
                            <li class="feature-item">
                                3.因美娜多马路状况，旅游车一般以35座或以下车型为主，建议每辆车收客人数不超过30人，地接将根据团队人数安排，保证每人1正座。
                            </li>
                            <li class="feature-item">
                                4.因美娜多马路状况，旅游车一般以35座或以下车型为主，建议每辆车收客人数不超过30人，地接将根据团队人数安排，保证每人1正座。
                            </li>
                            <li class="feature-item">
                                5.因美娜多马路状况，旅游车一般以35座或以下车型为主，建议每辆车收客人数不超过30人，地接将根据团队人数安排，保证每人1正座。
                            </li>
                        </ul>
                    </div>
                    <div class="card-box" v-show="tab === 'trip'">
                        <div class="line-trip">
                            <Timeline>
                                <TimelineItem color="green">
                                    <Icon type="trophy" slot="dot"></Icon>
                                    <span>发布里程碑版本</span>
                                </TimelineItem>
                                <TimelineItem>发布1.0版本</TimelineItem>
                                <TimelineItem>发布2.0版本</TimelineItem>
                                <TimelineItem>发布3.0版本</TimelineItem>
                            </Timeline>
                            <ul class="trip-content">
                                <li class="trip-title trip-item"><span class="trip-icon">D1</span><span class="trip-head">第一天 深圳市万</span></li>
                                <li class="trip-title trip-item"><span class="trip-icon"><Icon type="ios-sunny-outline"></Icon></span><span class="trip-head">第一天 深圳市万</span></li>
                                <li class="trip-title trip-item"><span class="trip-icon"><Icon type="fork"></Icon></span><span class="trip-head">第一天 深圳市万</span></li>
                                <li class="trip-title trip-item"><span class="trip-icon"><Icon type="ios-home-outline"></Icon></span><span class="trip-head">第一天 深圳市万</span></li>
                            </ul>
                        </div>
                    </div>
                    <div class="card-box" v-show="tab === 'price'">
                        <div class="price-content">
                            <h1 class="price-title">费用包含</h1>
                            <ul class="price-item">
                                <li>广州往返机票、机场税</li>
                                <li>全程当地豪华酒店住宿</li>
                                <li>行程所列的餐食(4早6正)</li>
                                <li>交通以及景点第一门票</li>
                            </ul>
                        </div>

                        <div class="price-content">
                            <h1 class="price-title">费用包含</h1>
                            <ul class="price-item">
                                <li>广州往返机票、机场税</li>
                                <li>全程当地豪华酒店住宿</li>
                                <li>行程所列的餐食(4早6正)</li>
                                <li>交通以及景点第一门票</li>
                            </ul>
                        </div>
                    </div>
                    <div class="card-box" v-show="tab === 'notice'">
                        <div class="notice-content">
                            <h1 class="price-title">预订须知</h1>
                            <ul class="price-item">
                                <li>1：报名前请与本社客服联系，了解行程及实际出团时间及相关收费标准(注:以实际出团日期价格为准)，确认本社行程之后再支付定金，定金一旦支付之后若因自身原因取消行程定金不予退还</li>
                                <li>2：报名时请提供准确的出游客人名字和身份证号码（名字及证件号一定要与身份证上相符）、护照号或是通行证证件，小孩儿提供准确的</li>
                                <li>3：报名方式：</li>
                                <li>交通以及景点第一门票</li>
                            </ul>
                        </div>
                    </div>
                    <div class="card-box" v-show="tab === 'comment'">
                        <div class="comment-head">
                            <div class="trip-comment">
                                <div class="comment-collect">
                                    <span class="comment-title">食宿评分：</span>
                                    <Rate show-text allow-half v-model="valueCustomText">
                                        <span style="color: #f5a623">{{ valueCustomText }}</span>
                                    </Rate>
                                </div>
                                <div class="comment-collect">
                                    <span class="comment-title">行程评分：</span>
                                    <Rate show-text allow-half v-model="valueCustomText">
                                        <span style="color: #f5a623">{{ valueCustomText }}</span>
                                    </Rate>
                                </div>
                                <div class="comment-collect">
                                    <span class="comment-title">服务评分：</span>
                                    <Rate show-text allow-half v-model="valueCustomText">
                                        <span style="color: #f5a623">{{ valueCustomText }}</span>
                                    </Rate>
                                </div>
                            </div>
                            <div class="go-comment">
                                <Button type="primary">
                                    <router-link :to="'/user/123/comment'">我要点评</router-link>
                                </Button>
                            </div>
                        </div>
                        <div class="comment-list">
                            <div class="comment-item">
                                <div class="comment-start clearfix">
                                    <div class="comment-food col-xs-12 col-sm-12 col-md-4 padding-0">
                                        <span class="comment-title">食宿评分：</span>
                                        <Rate show-text allow-half v-model="valueCustomText">
                                            <span style="color: #f5a623">{{ valueCustomText }}</span>
                                        </Rate>
                                    </div>
                                    <div class="comment-collect col-xs-12 col-sm-12 col-md-4 padding-0">
                                        <span class="comment-trip">行程评分：</span>
                                        <Rate show-text allow-half v-model="valueCustomText">
                                            <span style="color: #f5a623">{{ valueCustomText }}</span>
                                        </Rate>
                                    </div>
                                    <div class="comment-collect col-xs-12 col-sm-12 col-md-4 padding-0">
                                        <span class="comment-service">服务评分：</span>
                                        <Rate show-text allow-half v-model="valueCustomText">
                                            <span style="color: #f5a623">{{ valueCustomText }}</span>
                                        </Rate>
                                    </div>
                                </div>
                                <div class="comment-text">
                                    评价晚了点儿，很棒，导游特别棒，驴妈妈真是很值得信赖，国内国外我们报了三次跟团了，导游相当专业，这次泰国行玩海也特别过瘾，吃得也还不错!
                                </div>
                                <div class="commnet-footer clearfix">
                                    <span class="comment-member pull-left">ss会员</span>
                                    <span class="comment-time pull-right">2017-12-03: 12:03</span>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>


            </div>

            <hot-line></hot-line>

          </div>
      </div>
  </div>
</template>

<script type="text/ecmascript-6">
import HotLine from '../../travel/hot-line/hot-line.vue'
export default {
  data() {
    return {
        tab: 'feature',
        valueCustomText: 3.8,
        formValidate: {
            object: '',
            adult: 0,
            children: 0,
            date: ''
        },
        ruleValidate: {
            object: [
                { required: true, message: 'The name cannot be empty', trigger: 'blur' }
            ],
            adult: [
                { required: true, message: 'Please select adult', trigger: 'change' }
            ],
            children: [
                { required: true, message: 'Please select children', trigger: 'change' }
            ],
            date: [
                { required: true, type: 'date', message: 'Please select the date', trigger: 'change' }
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
      HotLine
  }
}
</script>

<style lang="scss">
    @import './line-detail.scss';
</style>
