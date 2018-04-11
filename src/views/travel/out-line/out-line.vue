<template>
  <div class="inner-line-page travel-left-bar user-center-page">
    <div class="travel-layout-content">
          <!-- 国内游 -->
          <div class="custom-card margin-top-20 margin-bottom-20">
            <h1 class="card-title">境外游</h1>
            <div class="card-box">
              <tour-card :arr-tours="innerTours"></tour-card>
            </div>
            <!-- 分页 -->
            <div class="page-wrapper">
                <Page :total="100" :page-size="10"></Page>
            </div>
          </div>
    </div>
  </div>

</template>

<script type="text/ecmascript-6">
import TourCard from '../../home/tour-card/tour-card.vue'
export default {
    name: 'travel-index',
  data() {
    return {
      value3: 0,
      setting: {
          autoplay: false,
          autoplaySpeed: 2000,
          height: 350,
          dots: 'inside',
          radiusDot: false,
          trigger: 'click',
          arrow: 'hover'
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
  }
  },
  components: {
    TourCard
  }
}
</script>

<style scoped lang="scss">
  
</style>
