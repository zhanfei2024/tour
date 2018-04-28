<template>
    <div class="tour-card-wrapper clearfix">
        <router-link v-for="item in arrTours" 
            :key="item.id" :class="item.class" 
            :to="item.url">
            <div class="tour-card-inner">
                <div class="tour-pic-wrapper">
                    <img class="tour-pic" :src="item.imgSrc">
                    <div class="tour-mask-wrapper">
                        <div class="tour-pic-mask"><p class="tour-pic-text">好玩的嗨起来好玩的嗨起来好的嗨起来好玩的嗨起来的玩的嗨起来好玩的嗨起来好玩的嗨起来好玩的嗨起来</p></div>
                    </div>
                </div>
                <p v-if="!item.comment" class="tour-summary">
                    <span>{{item.time}}</span><span>{{item.dis}}</span>
                </p>
                <p v-if="!item.comment" class="tour-info clearfix">
                    <span class="tour-price pull-left">{{item.price}}元起</span>
                    <span class="start-address pull-right">{{item.start}}</span>
                </p>
                <p v-if="item.comment" class="tour-comment">
                    <Button class="comment-btn" type="primary">
                        <router-link :to="'/user/123/comment/123'">发布评价</router-link>
                    </Button>
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

<style lang="scss">
    @import './tour-card.scss';
</style>

