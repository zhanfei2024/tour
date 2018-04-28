<template>
    <div class="top-navbar">
        <div class="container">
            <div class="row">
                <div class="pull-left">
                    <router-link class="welcome-info" :to="'/home/index'">{{$t('message.hello')}}欢迎您来到去哪儿旅游网站</router-link>
                </div>
                <!-- 未登录 -->
                <div v-if="!authRole" class="pull-right ">
                    <router-link class="top-nav-link" :to="`/enterprise-login`">旅行社管理</router-link>
                    <router-link class="top-nav-link" :to="'/enterprise-register'">旅行社注册</router-link>
                    <router-link class="top-nav-link" :to="'/user-login'">请先登录</router-link>
                    <router-link class="top-nav-link" :to="'/user-register'">免费注册</router-link>
                    <router-link class="top-nav-link" :to="'/user/1/order'">我的订单</router-link>
                    <!-- 语言切换 -->
                    <Dropdown placement="bottom-start">
                        <a href="javascript:void(0)">
                            <Icon type="earth"></Icon>
                        </a>
                        <DropdownMenu class="custom-color" slot="list">
                            <DropdownItem><a class="top-nav-link" @click="setlanguage('CN')">简体中文</a></DropdownItem>
                            <DropdownItem><a class="top-nav-link" @click="setlanguage('TW')">繁体中文</a></DropdownItem>
                            <DropdownItem><a class="top-nav-link" @click="setlanguage('EN')">英语</a></DropdownItem>
                        </DropdownMenu>
                    </Dropdown>
                </div>
                <!-- 用户登录成功 -->
                 <div v-else-if="authRole === 'user'" class="pull-right">
                    <Dropdown placement="bottom-start">
                        <a href="javascript:void(0)">
                            {{authId}}
                            <Icon type="arrow-down-b"></Icon>
                        </a>
                        <DropdownMenu class="custom-color" slot="list">
                            <DropdownItem><router-link class="top-nav-link" :to="`/user/${authId}/center`">个人中心</router-link></DropdownItem>
                            <DropdownItem><router-link class="top-nav-link" :to="`/user/${authId}/collection-line`">我的收藏</router-link></DropdownItem>
                            <DropdownItem><router-link class="top-nav-link" :to="`/user/${authId}/safe`">安全设置</router-link></DropdownItem>
                            <DropdownItem><a class="top-nav-link" @click="logout()">退出登录</a></DropdownItem>
                        </DropdownMenu>
                    </Dropdown>
                    <router-link class="top-nav-link" :to="`/user/${authId}/order`">我的订单</router-link>
                    <router-link class="top-nav-link" :to="`/user/${authId}/collection-line`">我的收藏</router-link>
                    <router-link class="top-nav-link" :to="`/user/${authId}/center`">会员中心</router-link>
                </div>
                <!-- 企业第一次登录 -->
                 <div v-else-if="authRole === 'candidate'" class="pull-right">
                    <Dropdown placement="bottom-start">
                        <a href="javascript:void(0)">
                            {{authId}}
                            <Icon type="arrow-down-b"></Icon>
                        </a>
                        <DropdownMenu slot="list">
                            <DropdownItem><router-link class="top-nav-link" :to="`/enterprise/${authId}/center`">管理中心</router-link></DropdownItem>
                            <DropdownItem><a class="top-nav-link" @click="logout()">退出登录</a></DropdownItem>
                        </DropdownMenu>
                    </Dropdown>
                    <router-link class="top-nav-link" :to="`/enterprise/${authId}/center`">管理中心</router-link>
                </div>
                <!-- 企业管理员登录 -->
                 <div v-else-if="authRole === 'enterprise'" class="pull-right">
                    <Dropdown placement="bottom-start">
                        <a href="javascript:void(0)">
                            {{authId}}
                            <Icon type="arrow-down-b"></Icon>
                        </a>
                        <DropdownMenu class="custom-color"  slot="list">
                            <DropdownItem><router-link class="top-nav-link" :to="`/enterprise/${authId}/center`">管理中心</router-link></DropdownItem>
                            <DropdownItem><router-link class="top-nav-link" :to="`/enterprise/${authId}/order`">我的订单</router-link></DropdownItem>
                            <DropdownItem><router-link class="top-nav-link" :to="`/enterprise/${authId}/safe`">安全设置</router-link></DropdownItem>
                            <DropdownItem><a class="top-nav-link" @click="logout()">退出登录</a></DropdownItem>
                        </DropdownMenu>
                    </Dropdown>
                    <router-link class="top-nav-link" :to="`/enterprise/${authId}/order`">我的订单</router-link>
                    <router-link class="top-nav-link" :to="`/enterprise/${authId}/info`">基本信息</router-link>
                    <router-link class="top-nav-link" :to="`/enterprise/${authId}/center`">管理中心</router-link>
                </div>
            </div>
        </div>
    </div>
</template>

<script type="text/ecmascript-6">
export default {
    name: 'TopNavbar',
    data() {
        return {
            userId: '123',
            userPhone: '15643345555',
            enterpriseId: '123456'
        }
    },
    components: {

    },
    created() {
        
    },
    computed: {
        authRole() {
            return this.$store.state.Auth.role
        },
        authId() {
            return window.localStorage.getItem('roleId')
        }
    },
    methods: {
        setlanguage(state) {
            this.$store.commit('setLang', {
                type: state
            });
            this.$i18n.locale = this.$store.state.Lang.type
            console.log(this.$store.state.Lang.type)
        },
        logout() {
            let role = {}
            window.localStorage.removeItem('role')
            window.localStorage.removeItem('roleId')
            this.$store.commit('setAuth', role)
            this.$router.push({ path: `/index` });
            this.$Message.success('Success!');
        }
    }
}
</script>

<style lang="scss">
@import './top-navbar.scss';
</style>

