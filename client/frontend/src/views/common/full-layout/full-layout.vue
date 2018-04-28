<template>
    <div class="full-layout">
        <div class="full-layout-wrapper">
            <top-navbar/>
            <second-navbar/>
            <router-view></router-view>
        </div>
        <custom-footer :footer-list-show="true" :background-color="'rgb(51, 51, 51)'"></custom-footer>
    </div>
</template>

<script type="text/ecmascript-6">
import TopNavbar from '../top-navbar/top-navbar.vue'
import SecondNavbar from '../second-navbar/second-navbar.vue'
import CustomFooter from '../custom-footer/custom-footer.vue'
export default {
    name: 'full-layout',
    data() {
      return {

      }
    },
    components: {
        TopNavbar,
        SecondNavbar,
        CustomFooter
    }
}
</script>

<style lang="scss">
    @import './full-layout.scss';
</style>

