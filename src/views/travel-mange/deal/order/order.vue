<template>
    <div class="user-center-page user-order-list">
        <!-- 我的订单 -->
        <div class="custom-card margin-bottom-20">
            <h1 class="card-title">
                <span class="order-status-title" :class="{active: status === 'all'}" @click="status = 'all'">全部订单</span>
                <span class="order-status-title" :class="{active: status === 'pending'}" @click="status = 'pending'">待确认</span>
                <span class="order-status-title" :class="{active: status === 'success'}" @click="status = 'success'">已完成</span>
                <span class="order-status-title" :class="{active: status === 'cancle'}" @click="status = 'cancle'">已取消</span>
            </h1>
            <div class="card-box" v-if="status === 'all'">
                <order-item :orders="orders"></order-item>
            </div>
            <div class="card-box" v-else-if="status === 'pending'">
                <order-item :orders="orders | pendingFilter"></order-item>
            </div>
            <div class="card-box" v-else-if="status === 'success'">
                <order-item :orders="orders | successFilter"></order-item>
            </div>
            <div class="card-box" v-else>
                <order-item :orders="orders | cancleFilter"></order-item>
            </div>
        </div>
    </div>
</template>

<script type="text/ecmascript-6">
import OrderItem from '../../../common/order-item/order-item.vue'
export default {
    data() {
      return {
        status: '',
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
            {
                id: '22223332222',
                orderTime: '2018-09-12',
                imgUrl: 'http://via.placeholder.com/80x80',
                tourTitle: '泰国五日游',
                tourObject: '跟团游',
                tourStart: '深圳',
                adultNum: '2',
                childrenNum: '1',
                TourTime: '2018-5-1',
                tourPrice: '2999',
                status: 'pending'
            },
            {
                id: '22224442222',
                orderTime: '2018-09-12',
                imgUrl: 'http://via.placeholder.com/80x80',
                tourTitle: '泰国五日游',
                tourObject: '跟团游',
                tourStart: '深圳',
                adultNum: '2',
                childrenNum: '1',
                TourTime: '2018-5-1',
                tourPrice: '2999',
                status: 'cancle'
            }
        ]
      }
    },
    filters: {
        pendingFilter: function (value) {
            if (value.length > 0) {
                return value.filter(item => {
                    return item.status === 'pending'
                })
            }
        },
        successFilter: function (value) {
            if (value.length > 0) {
                return value.filter(item => {
                    return item.status === 'success'
                })
            }
        },
        cancleFilter: function (value) {
            if (value.length > 0) {
                return value.filter(item => {
                    return item.status === 'cancle'
                })
            }
        }
    },
    components: {
        OrderItem
    }
}
</script>

<style lang="scss">

</style>
