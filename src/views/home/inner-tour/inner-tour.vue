<template>
    <div class="inner-tour">
        <div class="container">
            <!-- 顶部筛选 -->
            <div class="row">
                <div class="inner-filter margin-top-20 margin-bottom-20">
                    <Form :model="formItem" :label-width="80" inline>
                        <FormItem>
                            <Select v-model="formItem.start">
                                <Option value="beijing">New York</Option>
                                <Option value="shanghai">London</Option>
                                <Option value="shenzhen">Sydney</Option>
                            </Select>
                        </FormItem>
                        <FormItem label="前往">
                            <Input v-model="formItem.end" placeholder="Enter something...">
                            </Input>
                        </FormItem>
                        <FormItem>
                            <Button type="primary">Submit</Button>
                            <Button type="ghost" style="margin-left: 8px">Cancel</Button>
                        </FormItem>
                    </Form>
                </div>
            </div>
            <!-- 国内游 -->
            <div class="row">
                <div class="inner-tour-wrapper clearfix">
                    <div class="col-xs-12 col-sm-12 col-md-9">
                    <div class="address-filter">
                        <section class="location-title">目的地:</section>
                        <ul class="location-list">
                            <li class="location-item" v-for="item in ends" 
                            :key="item.id">{{item.name}}</li>
                        </ul>
                    </div>
                    <div class="address-filter margin-bottom-20">
                        <section class="location-title">类型:</section>
                        <ul class="location-list">
                            <li class="location-item" v-for="item in types" 
                            :key="item.id">{{item.name}}</li>
                        </ul>
                    </div>
                    <div class="inner-tour-list">
                        <div class="inner-tour-item margin-bottom-20">
                            <div class="inner-summary">
                                <img class="pull-left margin-right-20" src="http://via.placeholder.com/80x80">
                                <article class="inner-info pull-left">
                                    <h1>大西洋号东莞出发深圳往返 深圳太子湾大西洋号东莞出发深圳往返 深圳太子湾</h1>
                                    <p><span>产品类型：跟团游</span><span>出发地：香港</span></p>
                                </article>
                            </div>
                            <div class="tour-price">
                                249起
                            </div>
                        </div>
                        <div class="inner-tour-item margin-bottom-20">
                            <div class="inner-summary">
                                <img class="pull-left margin-right-20" src="http://via.placeholder.com/80x80">
                                <article class="inner-info pull-left">
                                    <h1>大西洋号东莞出发深圳往返 深圳太子湾大西洋号东莞出发深圳往返 深圳太子湾</h1>
                                    <p><span>产品类型：跟团游</span><span>出发地：香港</span></p>
                                </article>
                            </div>
                            <div class="tour-price">
                                249起
                            </div>
                        </div>
                        <div class="inner-tour-item margin-bottom-20">
                            <div class="inner-summary">
                                <img class="pull-left margin-right-20" src="http://via.placeholder.com/80x80">
                                <article class="inner-info pull-left">
                                    <h1>大西洋号东莞出发深圳往返 深圳太子湾大西洋号东莞出发深圳往返 深圳太子湾</h1>
                                    <p><span>产品类型：跟团游</span><span>出发地：香港</span></p>
                                </article>
                            </div>
                            <div class="tour-price">
                                249起
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-xs-12 col-sm-12 col-md-3">
                    <tour-card :arr-tours="innerTours"></tour-card>
                </div>
                
                </div>
                
            </div>
        </div>
    </div>
</template>

<script type="text/ecmascript-6">
import TourCard from '../tour-card/tour-card.vue'
export default {
    name: 'inner-tour',
    data() {
      return {
        formItem: {
            start: '',
            end: '',
        },
        ends: [
              {
                  id: 1,
                  name: '全部'
              },
              {
                  id: 2,
                  name: '北京'
              },
              {
                  id: 3,
                  name: '上海'
              },
              {
                  id: 4,
                  name: '广州'
              },
              {
                  id: 5,
                  name: '武汉'
              },
              {
                  id: 6,
                  name: '湖北'
              },
        ],
        types: [
                {
                    id: 1,
                    name: '全部'
                },
                {
                    id: 2,
                    name: '跟团游'
                },
                {
                    id: 3,
                    name: '自助游'
                }
        ],
        innerTours: [
            {
                id: 1,
                class: {
                    'tour-card': true,
                    'col-xs-12': false,
                    'col-sm-12': false,
                    'col-md-12': false
                },
                url: '/index',
                imgSrc: 'http://via.placeholder.com/385x200',
                time: '清明节',
                dis: '七折',
                price: 299,
                start: '深圳',
                tag: '跟团游'
            },
            {
                id: 2,
                class: {
                    'tour-card': true,
                    'col-xs-12': false,
                    'col-sm-12': false,
                    'col-md-12': false
                },
                url: '/index',
                imgSrc: 'http://via.placeholder.com/385x200',
                time: '清明节',
                dis: '七折',
                price: 299,
                start: '深圳',
                tag: '跟团游'
            },
            {
                id: 3,
                class: {
                    'tour-card': true,
                    'col-xs-12': false,
                    'col-sm-12': false,
                    'col-md-12': false
                },
                url: '/index',
                imgSrc: 'http://via.placeholder.com/385x200',
                time: '清明节',
                dis: '七折',
                price: 299,
                start: '深圳',
                tag: '跟团游'
            },
            {
                id: 4,
                class: {
                    'tour-card': true,
                    'col-xs-12': false,
                    'col-sm-12': false,
                    'col-md-12': false
                },
                url: '/index',
                imgSrc: 'http://via.placeholder.com/385x200',
                time: '清明节',
                dis: '七折',
                price: 299,
                start: '深圳',
                tag: '跟团游'
            },
            {
                id: 5,
                class: {
                    'tour-card': true,
                    'col-xs-12': false,
                    'col-sm-12': false,
                    'col-md-12': false
                },
                url: '/index',
                imgSrc: 'http://via.placeholder.com/385x200',
                time: '清明节',
                dis: '七折',
                price: 299,
                start: '深圳',
                tag: '跟团游'
            },
            {
                id: 6,
                class: {
                    'tour-card': true,
                    'col-xs-12': true,
                    'col-sm-12': true,
                    'col-md-12': true
                },
                url: '/index',
                imgSrc: 'http://via.placeholder.com/385x200',
                time: '清明节',
                dis: '七折',
                price: 299,
                start: '深圳',
                tag: '跟团游'
            },
            
        ],
       }
    },
    components: {
        TourCard
    }
}
</script>

<style lang="scss" scoped>

</style>

