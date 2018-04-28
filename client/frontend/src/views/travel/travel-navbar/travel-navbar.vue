<template>
  <div class="travel-layout">
      <div class="container">
          <div class="row">
             <div class="travel-navbar">
                <div class="navbar-info">
                    <img class="travel-logo" src="http://via.placeholder.com/80x80">
                    <div class="travel-text">
                        <h1 class="travel-name">四川省中国青年旅行社少城分社</h1>
                        <p class="travel-ensure"><span>实名认证</span><span>游客保障</span></p>
                    </div>
                </div>
                <ul class="navbar-tab clearfix">
                    <router-link class="tab-item" tag="li" :to="'/travel/123/index'">首页</router-link>
                    <router-link class="tab-item" tag="li" :to="'/travel/123/inner-line'">国内游</router-link>
                    <router-link class="tab-item" tag="li" :to="'/travel/123/out-line'">境外游</router-link>
                    <router-link class="tab-item" tag="li" :to="'/travel/123/summary'">企业简介</router-link>
                    <router-link class="tab-item" tag="li" :to="'/travel/123/connect'">联系我们</router-link>
                </ul>
                <div class="travel-comment" :class="{active: true}">
                    <Icon type="ios-star-outline"></Icon><Icon type="ios-star"></Icon><span>收藏</span>
                </div>
             </div>
            <div class="travel-content-layout clearfix">
                <router-view class="view one"></router-view>

                <router-view class="view two" name="hotLine"></router-view>
            </div>

        </div>
      </div>
  </div>
</template>

<script type="text/ecmascript-6">
export default {
  data() {
    return {

    }
  },
  components: {

  }
}
</script>

<style lang="scss">
@import './travel-navbar.scss';
</style>

