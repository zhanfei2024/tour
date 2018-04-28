<template>
    <div class="user-center-page user-comment-list">
            <!-- 我的订单 -->
        <div class="custom-card">
        <h1 class="card-title">回复订单</h1>
        <div class="card-box">
            <tour-card :arr-tours="innerTours"></tour-card>
        </div>
        </div>
    </div>
</template>

<script type="text/ecmascript-6">
import TourCard from '../../../home/tour-card/tour-card.vue'
export default {
    name: 'comment',
    data() {
      return {
        innerTours: [
            {
                id: 1,
                class: {
                    'tour-card': true,
                    'col-xs-12': true,
                    'col-sm-2': true,
                    'col-md-3': true
                },
                url: 'user/123/comment/123',
                imgSrc: 'http://via.placeholder.com/385x200',
                time: '清明节',
                dis: '七折',
                price: 299,
                start: '深圳',
                comment: true,
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
                url: 'user/123/comment/123',
                imgSrc: 'http://via.placeholder.com/385x200',
                time: '清明节',
                dis: '七折',
                price: 299,
                start: '深圳',
                comment: true,
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

<style lang="scss">
</style>
