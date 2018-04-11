<template>
    <div class="top-navbar">
        <div class="container">
            <div class="row">
                <div class="pull-left">
                    <router-link class="welcome-info" :to="'/home/index'">欢迎您来到去哪儿旅游网站</router-link>
                </div>
                <!-- 未登录 -->
                <div v-if="authRole.role === 'public'" class="pull-right ">
                    <router-link class="top-nav-link" :to="`/enterprise-login`">旅行社管理</router-link>
                    <router-link class="top-nav-link" :to="'/enterprise-register'">旅行社注册</router-link>
                    <router-link class="top-nav-link" :to="'/user-login'">请先登录</router-link>
                    <router-link class="top-nav-link" :to="'/user-register'">免费注册</router-link>
                    <router-link class="top-nav-link" :to="'/user/1/order'">我的订单</router-link>
                </div>
                <!-- 用户登录成功 -->
                 <div v-else-if="authRole.role === 'user'" class="pull-right">
                    <Dropdown placement="bottom-start">
                        <a href="javascript:void(0)">
                            {{authRole.roleId}}
                            <Icon type="arrow-down-b"></Icon>
                        </a>
                        <DropdownMenu slot="list">
                            <DropdownItem><router-link class="top-nav-link" :to="`/user/${authRole.roleId}/center`">个人中心</router-link></DropdownItem>
                            <DropdownItem><router-link class="top-nav-link" :to="`/user/${authRole.roleId}/collection-line`">我的收藏</router-link></DropdownItem>
                            <DropdownItem><router-link class="top-nav-link" :to="`/user/${authRole.roleId}/safe`">安全设置</router-link></DropdownItem>
                            <DropdownItem><a class="top-nav-link" @click="logout()">退出登录</a></DropdownItem>
                        </DropdownMenu>
                    </Dropdown>
                    <router-link class="top-nav-link" :to="`/user/${authRole.roleId}/order`">我的订单</router-link>
                    <router-link class="top-nav-link" :to="`/user/${authRole.roleId}/collection-line`">我的收藏</router-link>
                    <router-link class="top-nav-link" :to="`/user/${authRole.roleId}/center`">会员中心</router-link>
                </div>
                <!-- 企业第一次登录 -->
                 <div v-else-if="authRole.role === 'candidate'" class="pull-right">
                    <Dropdown placement="bottom-start">
                        <a href="javascript:void(0)">
                            {{authRole.roleId}}
                            <Icon type="arrow-down-b"></Icon>
                        </a>
                        <DropdownMenu slot="list">
                            <DropdownItem><router-link class="top-nav-link" :to="`/enterprise/${enterpriseId}/center`">管理中心</router-link></DropdownItem>
                            <DropdownItem><a class="top-nav-link" @click="logout()">退出登录</a></DropdownItem>
                        </DropdownMenu>
                    </Dropdown>
                    <router-link class="top-nav-link" :to="`/enterprise/${authRole.roleId}/center`">管理中心</router-link>
                </div>
                <!-- 企业管理员登录 -->
                 <div v-else-if="authRole.role === 'enterprise'" class="pull-right">
                    <Dropdown placement="bottom-start">
                        <a href="javascript:void(0)">
                            {{authRole.roleId}}
                            <Icon type="arrow-down-b"></Icon>
                        </a>
                        <DropdownMenu slot="list">
                            <DropdownItem><router-link class="top-nav-link" :to="`/enterprise/${authRole.roleId}/center`">管理中心</router-link></DropdownItem>
                            <DropdownItem><router-link class="top-nav-link" :to="`/enterprise/${authRole.roleId}/order`">我的订单</router-link></DropdownItem>
                            <DropdownItem><router-link class="top-nav-link" :to="`/enterprise/${authRole.roleId}/safe`">安全设置</router-link></DropdownItem>
                            <DropdownItem><a class="top-nav-link" @click="logout()">退出登录</a></DropdownItem>
                        </DropdownMenu>
                    </Dropdown>
                    <router-link class="top-nav-link" :to="`/enterprise/${authRole.roleId}/order`">我的订单</router-link>
                    <router-link class="top-nav-link" :to="`/enterprise/${authRole.roleId}/info`">基本信息</router-link>
                    <router-link class="top-nav-link" :to="`/enterprise/${authRole.roleId}/center`">管理中心</router-link>
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
        console.log(this.$store.state.Auth, '-------------')
    },
    computed: {
        authRole() {
            return this.$store.state.Auth;
        }
    },
    methods: {
        logout() {
            this.$store.commit('setAuth', {
                role: 'public',
                roleId: null
            });
            this.$router.push({ path: `/index` });
            this.$Message.success('Success!');
            console.log(this.authRole, '-------------')
        }
    }
}
</script>

<style lang="scss" scoped>

</style>

