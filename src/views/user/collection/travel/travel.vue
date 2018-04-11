<template>
  <div class="user-center-page">
    <!-- 我的订单 -->
    <div class="custom-card">
      <h1 class="card-title">收藏的旅行社</h1>
      <div class="card-box">
        <tour-card :arr-tours="innerTours"></tour-card>
      </div>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
import TourCard from '../../../home/tour-card/tour-card.vue'
import OrderItem from '../../../common/order-item/order-item.vue'
export default {
    name: 'travel',
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
      orders: [
        {
          id: '22222222',
          orderTime: '2018-09-12',
          imgUrl: 'http://via.placeholder.com/80x80',
          tourTitle: '泰国五日游',
          tourObject: '跟团游',
          tourStart: '深圳',
          adultNum: '2',
          childrenNum: '1',
          TourTime: '2018-5-1',
          tourStatus: '待商家确认',
          tourPrice: '2999'
        }
      ]
    }
  },
  components: {
    TourCard,
    OrderItem
  }
}
</script>

<style scoped lang="scss">
</style>
