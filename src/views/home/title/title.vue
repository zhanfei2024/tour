<template>
    <div class="row page-title">
        <h1 class="big-title col-xs-2 col-sm-2 col-md-2">{{title}}</h1>
        <p v-if="reloadMore.show" class="reload-more col-xs-2 col-sm-2 col-md-2 pull-right">
            <router-link class="pull-right" :to="reloadMore.url">查看全部<Icon type="chevron-right"></Icon></router-link>
        </p>
        <ul v-if="arrFilter.length > 0" class="second-list  col-xs-8 col-sm-8 col-md-8 pull-right">
            <li v-for="item in arrFilter" :key="item.id" class="filter-item pull-right">
                <router-link :to="item.url">{{item.name}}<span>/</span></router-link>
            </li>
        </ul>

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

