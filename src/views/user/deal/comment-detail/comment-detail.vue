<template>
    <div class="user-center-page user-comment-list">
            <!-- 我的订单 -->
        <div class="custom-card">
        <h1 class="card-title">评价订单</h1>
        <div class="card-box">
            <!-- <order-item :orders="orders"></order-item> -->
        </div>
        <div class="card-box">

                <Rate show-text allow-half v-model="valueCustomText">
                    <span style="color: #f5a623">{{ valueCustomText }}</span>
                </Rate>
                <Rate show-text allow-half v-model="valueCustomText">
                    <span style="color: #f5a623">{{ valueCustomText }}</span>
                </Rate>
                <Rate show-text allow-half v-model="valueCustomText">
                    <span style="color: #f5a623">{{ valueCustomText }}</span>
                </Rate>

        </div>
        </div>
    </div>
</template>

<script type="text/ecmascript-6">
// import OrderItem from '../../common/order-item/order-item.vue'
export default {
    name: 'comment',
    data() {
      return {
        valueText: 3,
        valueCustomText: 3.8,
        orders: [
            {
                id: '22221112222',
                orderTime: '2018-09-12',
                imgUrl: 'http://via.placeholder.com/80x80',
                tourTitle: '泰国五日游',
                tourObject: '跟团游',
                tourStart: '深圳',
                adultNum: '2',
                childrenNum: '1',
                TourTime: '2018-5-1',
                tourPrice: '2999',
                status: 'success'
            },
        ]
      }
    },
    components: {
        OrderItem
    }
}
</script>

<style scoped lang="scss">
</style>
