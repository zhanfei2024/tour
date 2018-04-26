<template>
    <div class="index">
        <div class="container">
            <!-- 轮播图 -->
            <div class="row">
                <div class="carouse">
                    <Carousel
                        v-model="value3"
                        :autoplay="setting.autoplay"
                        :height="setting.height"
                        :autoplay-speed="setting.autoplaySpeed"
                        :dots="setting.dots"
                        :radius-dot="setting.radiusDot"
                        :trigger="setting.trigger"
                        :arrow="setting.arrow">
                        <CarouselItem>
                            <div class="demo-carousel">1</div>
                        </CarouselItem>
                        <CarouselItem>
                            <div class="demo-carousel">2</div>
                        </CarouselItem>
                        <CarouselItem>
                            <div class="demo-carousel">3</div>
                        </CarouselItem>
                        <CarouselItem>
                            <div class="demo-carousel">4</div>
                        </CarouselItem>
                    </Carousel>
                </div>
            </div>
            <!-- 平台精选 -->
            <custom-title v-bind:title="choiceTitle.title" 
                    v-bind:arr-filter="choiceTitle.arrFilter" 
                    v-bind:reload-more="choiceTitle.reloadMore"></custom-title>
            <div class="row clearfix margin-bottom-40">
                <tour-card :arr-tours="choiceTours"></tour-card>
            </div>
            <!-- 旅行社 -->
            <custom-title v-bind:title="travelTitle.title" 
                    v-bind:arr-filter="travelTitle.arrFilter" 
                    v-bind:reload-more="travelTitle.reloadMore"></custom-title>
            <div class="row clearfix margin-bottom-40">
                <tour-card :arr-tours="travels"></tour-card>
            </div>
            <!-- 国内游 -->
            <custom-title v-bind:title="innerTitle.title" 
                    v-bind:arr-filter="innerTitle.arrFilter" 
                    v-bind:reload-more="innerTitle.reloadMore"></custom-title>
            <div class="row clearfix margin-bottom-40">
                <tour-card :arr-tours="innerTours"></tour-card>
            </div>
            <!-- 境外游 -->
            <custom-title v-bind:title="outTitle.title" 
                    v-bind:arr-filter="outTitle.arrFilter" 
                    v-bind:reload-more="outTitle.reloadMore"></custom-title>
            <div class="row clearfix margin-bottom-40">
                <tour-card :arr-tours="outTours"></tour-card>
            </div>
        </div>
    </div>
</template>

<script type="text/ecmascript-6">
import customTitle from '../title/title.vue'
import tourCard from '../tour-card/tour-card.vue'
export default {
    name: 'index',
    data() {
      return {
            choiceTitle: {
                title: '平台精选',
                arrFilter: [
                    {
                        id: 1,
                        name: '深圳',
                        url: '/index'
                    },
                    {
                        id: 2,
                        name: '上海',
                        url: '/index'
                    },
                    {
                        id: 3,
                        name: '广州',
                        url: '/index'
                    }
                ],
                reloadMore: {
                    show: false,
                    url: '/index'
                }
            },
            choiceTours: [
                {
                    id: 1,
                    class: {
                        'tour-card': true,
                        'col-xs-12': true,
                        'col-sm-2': true,
                        'col-md-4': true
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
                        'col-xs-12': true,
                        'col-sm-2': true,
                        'col-md-4': true
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
                        'col-xs-12': true,
                        'col-sm-2': true,
                        'col-md-4': true
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
                        'col-xs-12': true,
                        'col-sm-2': true,
                        'col-md-4': true
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
                        'col-xs-12': true,
                        'col-sm-2': true,
                        'col-md-4': true
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
                        'col-sm-2': true,
                        'col-md-4': true
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
            innerTitle: {
                title: '国内游',
                arrFilter: [
                    {
                        id: 1,
                        name: '深圳',
                        url: '/index'
                    },
                    {
                        id: 2,
                        name: '上海',
                        url: '/index'
                    },
                    {
                        id: 3,
                        name: '广州',
                        url: '/index'
                    }
                ],
                reloadMore: {
                    show: true,
                    url: '/index'
                }
            },
            innerTours: [
                {
                    id: 1,
                    class: {
                        'tour-card': true,
                        'col-xs-12': true,
                        'col-sm-2': true,
                        'col-md-3': true
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
                        'col-xs-12': true,
                        'col-sm-2': true,
                        'col-md-3': true
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
                        'col-xs-12': true,
                        'col-sm-2': true,
                        'col-md-3': true
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
                        'col-xs-12': true,
                        'col-sm-2': true,
                        'col-md-3': true
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
                        'col-xs-12': true,
                        'col-sm-2': true,
                        'col-md-3': true
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
                        'col-sm-2': true,
                        'col-md-3': true
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
            travelTitle: {
                title: '旅行社',
                arrFilter: [
                    {
                        id: 1,
                        name: '深圳',
                        url: '/index'
                    },
                    {
                        id: 2,
                        name: '上海',
                        url: '/index'
                    },
                    {
                        id: 3,
                        name: '广州',
                        url: '/index'
                    }
                ],
                reloadMore: {
                    show: true,
                    url: '/index'
                }
            },
            travels: [
                {
                    id: 1,
                    class: {
                        'tour-card': true,
                        'col-xs-12': true,
                        'col-sm-2': true,
                        'col-md-3': true
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
                        'col-xs-12': true,
                        'col-sm-2': true,
                        'col-md-3': true
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
                        'col-xs-12': true,
                        'col-sm-2': true,
                        'col-md-3': true
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
                        'col-xs-12': true,
                        'col-sm-2': true,
                        'col-md-3': true
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
                        'col-xs-12': true,
                        'col-sm-2': true,
                        'col-md-3': true
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
                        'col-sm-2': true,
                        'col-md-3': true
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
            outTitle: {
                title: '境外游',
                arrFilter: [
                    {
                        id: 1,
                        name: '深圳',
                        url: '/index'
                    },
                    {
                        id: 2,
                        name: '上海',
                        url: '/index'
                    },
                    {
                        id: 3,
                        name: '广州',
                        url: '/index'
                    }
                ],
                reloadMore: {
                    show: true,
                    url: '/index'
                }
            },
            outTours: [
                {
                    id: 1,
                    class: {
                        'tour-card': true,
                        'col-xs-12': true,
                        'col-sm-2': true,
                        'col-md-3': true
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
                        'col-xs-12': true,
                        'col-sm-2': true,
                        'col-md-3': true
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
                        'col-xs-12': true,
                        'col-sm-2': true,
                        'col-md-3': true
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
                        'col-xs-12': true,
                        'col-sm-2': true,
                        'col-md-3': true
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
                        'col-xs-12': true,
                        'col-sm-2': true,
                        'col-md-3': true
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
                        'col-sm-2': true,
                        'col-md-3': true
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
            value3: 0,
                setting: {
                    autoplay: false,
                    autoplaySpeed: 2000,
                    height: 350,
                    dots: 'inside',
                    radiusDot: false,
                    trigger: 'click',
                    arrow: 'hover'
            }
      }
    },
    components: {
        customTitle,
        tourCard
    },
    methods() {
        console.log('111')
    }
}
</script>

<style lang="scss">

</style>

