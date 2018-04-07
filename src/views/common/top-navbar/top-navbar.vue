<template>
    <div class="top-navbar">
        <div class="container">
            <div class="row">
                <div class="pull-left">
                    <router-link class="welcome-info" :to="'/home/index'">欢迎您来到去哪儿旅游网站</router-link>
                </div>
                <div class="pull-right ">
                    <router-link class="top-nav-link" :to="'/travel-login'">旅行社管理</router-link>
                    <router-link class="top-nav-link" :to="'/travel-register'">旅行社注册</router-link>
                    <router-link class="top-nav-link" :to="'/user-login'">请先登录</router-link>
                    <router-link class="top-nav-link" :to="'/user-register'">免费注册</router-link>
                    <router-link class="top-nav-link" :to="'/user/1/order'">我的订单</router-link>
                </div>
            </div>
        </div>
    </div>
</template>

<script type="text/ecmascript-6">
export default {
    name: 'TopNavbar',
    data() {
        return {

        }
    },
    components: {

    }
}
</script>

<style lang="scss" scoped>

</style>

