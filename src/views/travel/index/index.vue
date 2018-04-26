<template>
  <div class="travel-index-page user-center-page">
    <!-- 轮播图 -->
    <div class="carouse margin-top-20 margin-bottom-20">
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
    <!-- 国内游 -->
    <div class="custom-card margin-bottom-20">
        <custom-title class="margin-0 margin-bottom-20" v-bind:title="innerTitle.title" 
                      v-bind:arrFilter="innerTitle.arrFilter"
              v-bind:reload-more="innerTitle.reloadMore"></custom-title>
        <div class="card-box">
            <tour-card :arr-tours="innerTours"></tour-card>
        </div>
    </div>

    <!-- 境外游 -->
    <div class="custom-card margin-bottom-20">
        <custom-title class="margin-0 margin-bottom-20" v-bind:title="outTitle.title" 
                v-bind:arrFilter="outTitle.arrFilter"
        v-bind:reload-more="outTitle.reloadMore"></custom-title>
      <div class="card-box">
        <tour-card :arr-tours="innerTours"></tour-card>
      </div>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
import TourCard from '../../home/tour-card/tour-card.vue'
import CustomTitle from '../../common/title/title.vue'
export default {
    name: 'travel-index',
  data() {
    return {
        innerTitle: {
            title: '国内游',
            arrFilter: [ ],
            reloadMore: {
                    show: true,
                    url: '/travel/123/inner-line'
            }
        },
        outTitle: {
            title: '境外游',
            arrFilter: [ ],
            reloadMore: {
                    show: true,
                    url: '/travel/123/out-line'
            }
        },
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
    TourCard,
    CustomTitle
  }
}
</script>

<style lang="scss">
@import './travel-content-layout.scss';
</style>
