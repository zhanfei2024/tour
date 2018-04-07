<template>
    <div class="second-navbar">
        <div class="container padding-0">
            <div class="row">
                <div class="col-xs-12 col-sm-12 col-md-7">
                    <div class="tour-logo pull-left clearfix">
                        <img class="logo" src="../../../assets/img/69x69.png"/>
                        <section class="tour-primary">
                            <h1 class="web-title">旅游网</h1>
                            <p class="web-purpose">汇集优质旅行社</p>
                        </section>
                    </div>
                    <ul class="home-list pull-left clearfix">
                        <li class="home-item pull-left">
                            <router-link :to="'/index'">首页</router-link>
                        </li>
                        <li class="home-item pull-left">
                            <router-link :to="'/travel'">旅行社</router-link>
                        </li>
                        <li class="home-item pull-left">
                            <router-link :to="'/inner-tour'">国内游</router-link>
                        </li>
                        <li class="home-item pull-left">
                            <router-link :to="'/out-tour'">境外游</router-link>
                        </li>
                    </ul>
                </div>
                <div class="col-xs-12 col-sm-12 col-md-5 top-nav-service">
                    <input type="text" class="form-control search" id="inputSuccess4" aria-describedby="inputSuccess4Status">
                    <div class="contact-hot pull-left text-center">
                        <div class="contact-phone">400-0800-080</div>
                        <div class="service-time">
                            <span class="week">周一至周日</span>
                            <span>08：00-18：00</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script type="text/ecmascript-6">
export default {
    name: 'SecondNavbar',
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

