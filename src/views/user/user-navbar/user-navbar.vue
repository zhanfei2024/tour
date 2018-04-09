<template>
  <div class="user-navbar-page padding-top-20 padding-bottom-20">
      <div class="container">
          <div class="row">
                <div class="user-navbar-wrapper">
                    <div class="user-navbar col-xs-12 col-sm-12 col-md-2">
                       <ul class="nav-list">
                           <li class="nav-item big-title"><a>我的账户</a></li>
                           <router-link tag="li" active-class="active" :to="'/user/123/center'">个人中心</router-link>
                           <router-link tag="li" active-class="active" :to="'/user/123/profile'">个人信息</router-link>
                           <router-link tag="li" active-class="active" :to="'/user/123/safe'">安全设置</router-link>
                           <li class="nav-item big-title"><a>交易管理</a></li>
                           <router-link tag="li" active-class="active" :to="'/user/123/order'">我的订单</router-link>
                           <router-link tag="li" active-class="active" :to="'/user/123/comment'">评价订单</router-link>
                           <li class="nav-item big-title"><a>我的收藏</a></li>
                           <router-link tag="li" active-class="active" :to="'/user/123/collection-line'">收藏的线路</router-link>
                           <router-link tag="li" active-class="active" :to="'/user/123/collection-travel'">收藏的旅行社</router-link>
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
