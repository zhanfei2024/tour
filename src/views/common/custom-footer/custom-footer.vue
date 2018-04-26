<template>
    <div class="custom-footer">
        <div class="container">
            <div v-if="footerListShow" class="row footer-list">
                <div class="col-xs-12 col-sm-4 col-md-4">
                    <div class="footer-item">
                        <img class="footer-logo" src="http://via.placeholder.com/50x50">
                        <p class="footer-title"><router-link :to="'/'">服务保障</router-link></p>
                    </div>
                </div>
                <div class="col-xs-12 col-sm-4 col-md-4">
                    <div class="footer-item">
                        <img class="footer-logo" src="http://via.placeholder.com/50x50">
                        <p class="footer-title"><router-link :to="'/'">价格透明</router-link></p>
                    </div>
                </div>
                <div class="col-xs-12 col-sm-4 col-md-4">
                    <div class="footer-item">
                        <img class="footer-logo" src="http://via.placeholder.com/50x50">
                        <p class="footer-title"><router-link :to="'/'">服务至上</router-link></p>
                    </div>
                </div>
            </div>
            <div class="row">
                <div class="col-xs-12 col-sm-12 col-md-12">
                    <ul class="bottom-list">
                        <li class="bottom-item">
                            <router-link :to="'/'">关于我们</router-link><span>|</span>
                        </li>
                        <li class="bottom-item">
                            <router-link :to="'/'">联系我们</router-link><span>|</span>
                        </li>
                        <li class="bottom-item">
                            <router-link :to="'/'">售后服务</router-link><span>|</span>
                        </li>
                        <li class="bottom-item">
                            <router-link :to="'/'">帮助中心</router-link><span>|</span>
                        </li>
                        <li class="bottom-item">
                            <router-link :to="'/'">加入我们</router-link>
                        </li>
                    </ul>
                </div>
                <div class="col-xs-12 col-sm-12 col-md-12">
                    <p class="text-company">
                        CopyRight&copy;旅游网
                    </p>
                </div>

            </div>
        </div>
    </div>
</template>

<script type="text/ecmascript-6">
export default {
    props: {
        footerListShow: Boolean,
        backgroundColor: String
    },
    data() {
      return {

      }
    },
    components: {

    }
}
</script>

<style lang="scss">
    @import './custom-footer.scss';
</style>

