<template>
  <div class="user-center-page">
    <!-- 我的订单 -->
    <div class="custom-card margin-bottom-20">
      <h1 class="card-title">我的订单</h1>
      <div class="card-box">
        <div class="card-item margin-bottom-20">
          <div class="tour-item">
            <img class="tour-img" src="http://via.placeholder.com/80x80">
            <section class="tour-text">
              <h1 class="tour-title">大西洋旅游</h1>
              <p class="tour-introduce"><span class="tour-object">产品类型：跟团游</span><span class="tour-start">出发地：广州</span><span class="tour-num">出行人数：2成人</span></p>
              <p class="tour-time">出发时间：2017023033(星期二)</p>
            </section>
          </div>
          <div class="tour-status">
            等待商家确认
          </div>
          <div class="tour-price">
            2999.00
          </div>
        </div>

        <div class="card-item margin-bottom-20">
          <div class="tour-item">
            <img class="tour-img" src="http://via.placeholder.com/80x80">
            <section class="tour-text">
              <h1 class="tour-title">大西洋旅游</h1>
              <p class="tour-introduce"><span class="tour-object">产品类型：跟团游</span><span class="tour-start">出发地：广州</span><span class="tour-num">出行人数：2成人</span></p>
              <p class="tour-time">出发时间：2017023033(星期二)</p>
            </section>
          </div>
          <div class="tour-status">
            等待商家确认
          </div>
          <div class="tour-price">
            2999.00
          </div>
        </div>
      </div>
    </div>

        <!-- 我的订单 -->
    <div class="custom-card">
      <h1 class="card-title">收藏的线路</h1>
      <div class="card-box">
        <tour-card :arr-tours="innerTours"></tour-card>
      </div>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
import TourCard from '../../../home/tour-card/tour-card.vue'
export default {
    name: 'Center',
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
    }
  },
  components: {
    TourCard
  }
}
</script>

<style scoped lang="scss">
</style>
