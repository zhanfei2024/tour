<template>
    <div class="simple-layout">
        <div class="simple-layout-wrapper">
            <second-navbar></second-navbar>
            <router-view></router-view>
        </div>
        <custom-footer :footer-list-show="false" :background-color="'#f7f7f7'"></custom-footer>
     </div>
</template>

<script type="text/ecmascript-6">
import SecondNavbar from '../second-navbar/second-navbar.vue'
import CustomFooter from '../custom-footer/custom-footer.vue'
export default {
    name: 'simple-layout',
    data() {
      return {

      }
    },
    components: {
        SecondNavbar,
        CustomFooter
    }
}
</script>

<style>
</style>