<template>
    <div class="orders">
        <div v-for="order in orders" :key="order.id" class="card-item-wrapper margin-bottom-20">
          <h1 class="item-title"><span class="order-time">下单时间：{{order.orderTime}}</span>
            <span class="order-id">订单编号：{{order.id}}</span>
          </h1>
          <div class="card-item">
            <div class="tour-item">
                <img class="tour-img" :src="order.imgUrl">
                <section class="tour-text">
                <h1 class="tour-title">{{order.tourTitle}}</h1>
                <p class="tour-introduce">
                    <span class="tour-object">产品类型：{{order.tourObject}}</span>
                    <span class="tour-start">出发地：{{order.tourStart}}</span>
                    <span class="tour-num">出行人数：{{order.adultNum}}成人,{{order.childrenNum}}</span>
                </p>
                <p class="tour-time">出发时间：{{order.TourTime}}</p>
                </section>
            </div>
            <div class="tour-status">
                <span v-if="order.status === 'pending'">
                    待商家确认
                </span>
                <span v-else-if="order.status === 'success'">
                    交易完成
                </span>
                <span v-else-if="order.status === 'cancle'">
                    已取消
                </span>
            </div>
            <div class="tour-price">
                {{order.tourPrice}}
            </div>
          </div>

        </div>
    </div>
</template>

<script type="text/ecmascript-6">
export default {
    name: 'order-item',
    data() {
      return {

      }
    },
    props: {
        orders: Array
    },
    components: {

    }
}
</script>

<style scoped lang="scss">
</style>




