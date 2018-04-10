<template>
  <div class="user-navbar-page padding-top-20 padding-bottom-20">
      <div class="container">
          <div class="row">
                <div class="user-navbar-wrapper">
                    <div class="user-navbar col-xs-12 col-sm-12 col-md-2">
                       <ul class="nav-list">
                           <li class="nav-item big-title"><a>我的账户</a></li>
                           <router-link tag="li" active-class="active" :to="'/enterprise/123/center'">管理中心</router-link>
                           <router-link tag="li" active-class="active" :to="'/enterprise/123/info'">基本信息</router-link>
                           <router-link tag="li" active-class="active" :to="'/enterprise/123/safe'">安全设置</router-link>
                           <li class="nav-item big-title"><a>交易管理</a></li>
                           <router-link tag="li" active-class="active" :to="'/enterprise/123/order'">我的订单</router-link>
                           <router-link tag="li" active-class="active" :to="'/enterprise/123/reply'">待回复订单</router-link>
                           <li class="nav-item big-title"><a>产品管理</a></li>
                           <router-link tag="li" active-class="active" :to="'/enterprise/123/line'">线路管理</router-link>
                           <router-link tag="li" active-class="active" :to="'/enterprise/123/carouse'">轮播图管理</router-link>
                        </ul>
                    </div>
                    <router-view class="col-xs-12 col-sm-12 col-md-10">

                    </router-view>
                </div>
          </div>
      </div>

  </div>
</template>

<script type="text/ecmascript-6">
export default {
    name: 'UserNavbar',
  data() {
    return {

    }
  },
  components: {

  }
}
</script>

<style scoped lang="scss">
</style>
