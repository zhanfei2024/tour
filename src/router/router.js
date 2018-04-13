// public home
const index = {
    path: '',
    redirect: '/index',
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
    path: '',
    name: 'auth',
    redirect: '/index',
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
            path: 'enterprise-register',
            name: 'travel-register',
            component: () => import('../views/auth/signup/signup.vue')
        },
        {
            path: 'enterprise-login',
            name: 'travel-login',
            component: () => import('../views/auth/login/login.vue')
        },
        {
            path: 'reset-password',
            name: 'reset-password',
            component: () => import('../views/auth/rest/rest.vue')
        },
        {
            path: 'enterprise-enter',
            name: 'travel-enter',
            component: () => import('../views/auth/travel-enter/travel-enter.vue')
        }
    ]
}

const travel = {
    path: '',
    name: 'travel-layout',
    redirect: '/index',
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
                    path: 'line-form/123',
                    name: 'line-form',
                    component: () => import('../views/travel/line-form/line-form.vue')
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
    path: '',
    redirect: '/index',
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
                    meta: { requiresAuth: true, role: 'user' }
                },
                {
                    path: 'profile',
                    name: 'profile',
                    component: () => import('../views/user/account/profile/profile.vue'),
                    meta: { requiresAuth: true, role: 'user' }
                },
                {
                    path: 'safe',
                    name: 'safe',
                    component: () => import('../views/user/account/safe-list/safe-list.vue'),
                    meta: { requiresAuth: true, role: 'user' }
                },
                {
                    path: 'phone-set',
                    name: 'phone-set',
                    component: () => import('../views/user/account/phone-set/phone-set.vue'),
                    meta: { requiresAuth: true, role: 'user' }
                },
                {
                    path: 'order',
                    name: 'order',
                    component: () => import('../views/user/deal/order/order.vue'),
                    meta: { requiresAuth: true, role: 'user' }
                },
                {
                    path: 'order-detail/:id',
                    name: 'order-detail',
                    component: () => import('../views/user/deal/order-detail/order-detail.vue'),
                    meta: { requiresAuth: true, role: 'user' }
                },
                {
                    path: 'comment',
                    name: 'comment',
                    component: () => import('../views/user/deal/comment/comment.vue'),
                    meta: { requiresAuth: true, role: 'user' }
                },
                {
                    path: 'comment-detail/123',
                    name: 'comment-detail',
                    component: () => import('../views/user/deal/comment-detail/comment-detail.vue'),
                    meta: { requiresAuth: true, role: 'user' }
                },
                {
                    path: 'collection-line',
                    name: 'collection-line',
                    component: () => import('../views/user/collection/line/line.vue'),
                    meta: { requiresAuth: true, role: 'user' }
                },
                {
                    path: 'collection-travel',
                    name: 'collection-travel',
                    component: () => import('../views/user/collection/travel/travel.vue'),
                    meta: { requiresAuth: true, role: 'user' }
                }
            ]
        }
    ]
   
}

const enterprise = {
    path: '',
    redirect: '/index',
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
                    meta: { requiresAuth: true, role: 'enterprise'}
                },
                {
                    path: 'info',
                    name: 'info',
                    component: () => import('../views/travel-mange/account/info/info.vue'),
                    meta: { requiresAuth: true, role: 'enterprise' }
                },
                {
                    path: 'safe',
                    name: 'safe',
                    component: () => import('../views/travel-mange/account/safe/safe.vue'),
                    meta: { requiresAuth: true, role: 'enterprise' }
                },
                {
                    path: 'safe-set',
                    name: 'safe-set',
                    component: () => import('../views/travel-mange/account/safe-set/safe-set.vue'),
                    meta: { requiresAuth: true, role: 'enterprise' }
                },
                {
                    path: 'order',
                    name: 'order',
                    component: () => import('../views/travel-mange/deal/order/order.vue'),
                    meta: { requiresAuth: true, role: 'enterprise' }
                },
                {
                    path: 'order-detail/123',
                    name: 'order-detail',
                    component: () => import('../views/travel-mange/deal/order-detail/order-detail.vue'),
                    meta: { requiresAuth: true, role: 'enterprise' }
                },
                {
                    path: 'reply',
                    name: 'reply',
                    component: () => import('../views/travel-mange/deal/reply/reply.vue'),
                    meta: { requiresAuth: true, role: 'enterprise' }
                },
                {
                    path: 'reply-detail',
                    name: 'reply-detail',
                    component: () => import('../views/travel-mange/deal/reply-detail/reply-detail.vue'),
                    meta: { requiresAuth: true, role: 'enterprise' }
                },
                {
                    path: 'line',
                    name: 'line',
                    component: () => import('../views/travel-mange/product/line/line.vue'),
                    meta: { requiresAuth: true, role: 'enterprise' }
                },
                {
                    path: 'carouse',
                    name: 'carouse',
                    component: () => import('../views/travel-mange/product/carouse/carouse.vue'),
                    meta: { requiresAuth: true, role: 'enterprise' }
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