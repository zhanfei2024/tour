<template>
    <div class="tour-card-wrapper clearfix">
        <router-link v-for="item in arrTours" 
            :key="item.id" :class="item.class" 
            :to="item.url">
            <div class="tour-card-inner">
                <img class="tour-pic" :src="item.imgSrc">
                <p class="tour-summary">
                    <span>{{item.time}}</span><span>{{item.dis}}</span>
                </p>
                <p class="tour-info clearfix">
                    <span class="tour-price pull-left">{{item.price}}元起</span>
                    <span class="start-address pull-right">{{item.start}}</span>
                </p>
                <p class="tour-tag">
                    {{item.tag}}
                </p>
            </div>
        </router-link>
    </div>
</template>

<script type="text/ecmascript-6">
export default {
    name: 'tour-card',
    props: {
        arrTours: Array
    },
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

