// public home
const index = {
    path: '/',
    name: 'home',
    component: () => import('../views/common/full-layout/full-layout.vue'),
    children: [
        {
            path: 'index',
            name: 'index',
            component: () => import('../views/home/index/index.vue')
        },
        {
            path: 'travel',
            name: 'travel',
            component: () => import('../views/home/travel/travel.vue')
        },
        {
            path: 'inner-tour',
            name: 'inner-tour',
            component: () => import('../views/home/inner-tour/inner-tour.vue')
        },
        {
            path: 'out-tour',
            name: 'out-tour',
            component: () => import('../views/home/out-tour/out-tour.vue')
        }
    ]
}

// auth
const auth = {
    path: '/',
    name: 'auth',
    component: () => import('../views/common/simple-layout/simple-layout.vue'),
    children: [
        {
            path: 'user-register',
            name: 'user-register',
            component: () => import('../views/auth/signup/signup.vue')
        },
        {
            path: 'user-login',
            name: 'user-login',
            component: () => import('../views/auth/login/login.vue')
        },
        {
            path: 'travel-register',
            name: 'travel-register',
            component: () => import('../views/auth/signup/signup.vue')
        },
        {
            path: 'travel-login',
            name: 'travel-login',
            component: () => import('../views/auth/login/login.vue')
        },
        {
            path: 'reset-password',
            name: 'reset-password',
            component: () => import('../views/auth/rest/rest.vue')
        },
        {
            path: 'travel-enter',
            name: 'travel-enter',
            component: () => import('../views/auth/travel-enter/travel-enter.vue')
        }
    ]
}

const travel = {
    path: '/',
    name: 'travel-layout',
    component: () => import('../views/common/travel-layout/travel-layout.vue'),
    children: [
        {
            path: '/travel/123',
            name: 'travel',
            component: () => import('../views/travel/travel-navbar/travel-navbar.vue'),
            children: [
                {
                    path: 'index',
                    name: 'index',
                    component: () => import('../views/travel/index/index.vue')
                },
                {
                    path: 'inner-line',
                    name: 'inner-line',
                    components: {
                        default: () => import('../views/travel/inner-line/inner-line.vue'),
                        hotLine: () => import('../views/travel/hot-line/hot-line.vue')
                    }
                },
                {
                    path: 'out-line',
                    name: 'out-line',
                    components: {
                        default: () => import('../views/travel/out-line/out-line.vue'),
                        hotLine: () => import('../views/travel/hot-line/hot-line.vue')
                    }
                },
                {
                    path: 'line-detail/123',
                    name: 'line-detail',
                    component: () => import('../views/travel/line-detail/line-detail.vue')
                },
                {
                    path: 'summary',
                    name: 'summary',
                    components: {
                        default: () => import('../views/travel/summary/summary.vue'),
                        hotLine: () => import('../views/travel/hot-line/hot-line.vue')
                    }
                },
                {
                    path: 'connect',
                    name: 'connect',
                    components: {
                        default: () => import('../views/travel/connect/connect.vue'),
                        hotLine: () => import('../views/travel/hot-line/hot-line.vue')
                    }
                }
            ]
        }
       
    ]
   
}

const user = {
    path: '/',
    name: 'full-layout',
    component: () => import('../views/common/full-layout/full-layout.vue'),
    children: [
        {
            path: '/user/:id',
            name: 'user',
            component: () => import('../views/user/user-navbar/user-navbar.vue'),
            children: [
                {
                    path: 'center',
                    name: 'center',
                    component: () => import('../views/user/account/center/center.vue'),
                    meta: { requiresUserAuth: true }
                },
                {
                    path: 'profile',
                    name: 'profile',
                    component: () => import('../views/user/account/profile/profile.vue'),
                    meta: { requiresUserAuth: true }
                },
                {
                    path: 'safe',
                    name: 'safe',
                    component: () => import('../views/user/account/safe-list/safe-list.vue'),
                    meta: { requiresUserAuth: true }
                },
                {
                    path: 'phone-set',
                    name: 'phone-set',
                    component: () => import('../views/user/account/phone-set/phone-set.vue'),
                    meta: { requiresUserAuth: true }
                },
                {
                    path: 'order',
                    name: 'order',
                    component: () => import('../views/user/deal/order/order.vue'),
                    meta: { requiresUserAuth: true }
                },
                {
                    path: 'order-detail/:id',
                    name: 'order-detail',
                    component: () => import('../views/user/deal/order-detail/order-detail.vue'),
                    meta: { requiresUserAuth: true }
                },
                {
                    path: 'comment',
                    name: 'comment',
                    component: () => import('../views/user/deal/comment/comment.vue'),
                    meta: { requiresUserAuth: true }
                },
                {
                    path: 'comment-detail/123',
                    name: 'comment-detail',
                    component: () => import('../views/user/deal/comment-detail/comment-detail.vue'),
                    meta: { requiresUserAuth: true }
                },
                {
                    path: 'collection-line',
                    name: 'collection-line',
                    component: () => import('../views/user/collection/line/line.vue'),
                    meta: { requiresUserAuth: true }
                },
                {
                    path: 'collection-travel',
                    name: 'collection-travel',
                    component: () => import('../views/user/collection/travel/travel.vue'),
                    meta: { requiresUserAuth: true }
                }
            ]
        }
    ]
   
}

const enterprise = {
    path: '/',
    name: 'full-layout',
    component: () => import('../views/common/full-layout/full-layout.vue'),
    children: [
        {
            path: '/enterprise/:id',
            name: 'enterprise',
            component: () => import('../views/travel-mange/sidebar/sidebar.vue'),
            children: [
                {
                    path: 'center',
                    name: 'center',
                    component: () => import('../views/travel-mange/account/center/center.vue'),
                    meta: { requiresAuth: true }
                },
                {
                    path: 'info',
                    name: 'info',
                    component: () => import('../views/travel-mange/account/info/info.vue'),
                    meta: { requiresAuth: true }
                },
                {
                    path: 'safe',
                    name: 'safe',
                    component: () => import('../views/travel-mange/account/safe/safe.vue'),
                    meta: { requiresAuth: true }
                },
                {
                    path: 'safe-set',
                    name: 'safe-set',
                    component: () => import('../views/travel-mange/account/safe-set/safe-set.vue'),
                    meta: { requiresAuth: true }
                },
                {
                    path: 'order',
                    name: 'order',
                    component: () => import('../views/travel-mange/deal/order/order.vue'),
                    meta: { requiresAuth: true }
                },
                {
                    path: 'order-detail/123',
                    name: 'order-detail',
                    component: () => import('../views/travel-mange/deal/order-detail/order-detail.vue'),
                    meta: { requiresAuth: true }
                },
                {
                    path: 'reply',
                    name: 'reply',
                    component: () => import('../views/travel-mange/deal/reply/reply.vue'),
                    meta: { requiresAuth: true }
                },
                {
                    path: 'reply-detail',
                    name: 'reply-detail',
                    component: () => import('../views/travel-mange/deal/reply-detail/reply-detail.vue'),
                    meta: { requiresAuth: true }
                },
                {
                    path: 'line',
                    name: 'line',
                    component: () => import('../views/travel-mange/product/line/line.vue'),
                    meta: { requiresAuth: true }
                },
                {
                    path: 'carouse',
                    name: 'carouse',
                    component: () => import('../views/travel-mange/product/carouse/carouse.vue'),
                    meta: { requiresAuth: true }
                }
            ]
        }
    ]
    


}

module.exports = {
    index,
    auth,
    travel,
    user,
    enterprise
}