<template>
    <div class="row page-title">
        <h1 class="big-title col-xs-2 col-sm-2 col-md-2">{{title}}</h1>
        <ul v-if="arrFilter.length > 0" class="second-list text-left  col-xs-8 col-sm-8 col-md-8">
            <li v-for="item in arrFilter" :key="item.id" class="filter-item pull-left">
                <router-link :to="item.url">{{item.name}}<span>/</span></router-link>
            </li>
        </ul>
        <p v-if="reloadMore.show" class="reload-more col-xs-2 col-sm-2 col-md-2">
            <router-link class="pull-right" :to="reloadMore.url">查看全部<Icon type="chevron-right"></Icon></router-link>
        </p>


    </div>
</template>

<script type="text/ecmascript-6">
export default {
    name: 'custom-title',
    props: {
        title: String,
        arrFilter: Array,
        reloadMore: Object
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

