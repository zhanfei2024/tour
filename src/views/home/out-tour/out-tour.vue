<template>
    <div class="out-tour">
        <div class="container">
            <div class="row">
                <div class="hot-recommend margin-top-20 margin-bottom-20">
                    <h1 class="hot-title text-center">热门推荐</h1>
                    <div class="conutry-list">
                        <div class="country-item">
                            <img class="country-logo" src="http://via.placeholder.com/208x192">
                            <p class="country-name">美国</p>
                        </div>
                        <div class="country-item">
                            <img class="country-logo" src="http://via.placeholder.com/208x192">
                            <p class="country-name">美国</p>
                        </div>
                        <div class="country-item">
                            <img class="country-logo" src="http://via.placeholder.com/208x192">
                            <p class="country-name">美国</p>
                        </div>
                        <div class="country-item">
                            <img class="country-logo" src="http://via.placeholder.com/208x192">
                            <p class="country-name">美国</p>
                        </div>
                     </div>
                </div>
                <div class="out-follow-tour margin-bottom-20">
                    <h1 class="follow-title text-center">境外游&nbsp;自助游</h1>
                    <tour-card :arr-tours="outTours"></tour-card>
                </div>
                <div class="out-help-tour margin-bottom-20">
                    <h1 class="help-title text-center">境外游&nbsp;自助游</h1>
                    <tour-card :arr-tours="helpTours"></tour-card>
                </div>
            </div>
        </div>
    </div>
</template>

<script type="text/ecmascript-6">
import TourCard from '../tour-card/tour-card.vue'
export default {
    name: 'out-tour',
    data() {
      return {
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
                    tag: '自助游'
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
                    tag: '自助游'
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
                    tag: '自助游'
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
                    tag: '自助游'
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
                    tag: '自助游'
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
                    tag: '自助游'
                },
                
            ],
            helpTours: [
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
                    tag: '自助游'
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
                    tag: '自助游'
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
                    tag: '自助游'
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
                    tag: '自助游'
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
                    tag: '自助游'
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
                    tag: '自助游'
                },
                
            ],
      }
    },
    components: {
        TourCard
    }
}
</script>

<style lang="scss">

</style>

