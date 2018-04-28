<template>
    <div class="home-travel">
        <div class="container">
            <div class="row">
                <div class="address-filter margin-top-20 margin-bottom-20">
                    <section class="location-title">地区:</section>
                    <ul class="location-list">
                        <li class="location-item" v-for="item in locations" :key="item.id">{{item.name}}</li>
                    </ul>
                </div>
                <div class="travel-list margin-top-20 margin-bottom-20">
                    <div class="second-filter">
                        <span class="second-title">最新入驻</span>
                        <span class="second-title">人气推荐</span>
                        <span class="second-title">好评最多</span>
                    </div>
                    <div class="travel-wrapper clearfix">
                        <router-link v-for="item in travels" :key="item.id" :to="'/travel/123/index'" class="clearfix col-xs-12 col-sm-2 col-md-3 travel-card">
                            <div class="travel-card-inner">
                                <img class="travel-pic" src="http://via.placeholder.com/107x100">
                                <p class="travel-name text-center">{{item.name}}</p>
                            </div>
                        </router-link>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script type="text/ecmascript-6">
export default {
    data() {
      return {
          locations: [
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
          travels: [
              {
                  id: 1,
                  name: '深圳旅行社'
              },
              {
                  id: 2,
                  name: '深圳旅行社'
              }
              ,
              {
                  id: 3,
                  name: '深圳旅行社'
              }
              ,
              {
                  id: 4,
                  name: '深圳旅行社'
              }
          ]
      }
    },
    components: {

    }
}
</script>

<style lang="scss">
    @import './travel.scss';
</style>

