import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'

Vue.use(Router)

const router = new Router({
    mode: 'history',
    base: process.env.BASE_URL,
    routes: [
        {
            path: '/',
            name: 'home',
            component: Home,
            meta: {
                authRequired: true
            }
        },
        {
            path: '/dashboard',
            name: 'dashboard',
            component: () => import(/* webpackChunkName: "about" */ './views/Dashboard.vue'),
            meta: {
                authRequired: true
            }
        },
        {
            path: '/about',
            name: 'about',
            component: () => import(/* webpackChunkName: "about" */ './views/About.vue'),
            meta: {
                authRequired: true
            }
        },
        {
            path: '/login',
            name: 'login',
            component: () => import(/* webpackChunkName: "about" */ './views/Login.vue'),
            meta: {
                authRequired: false
            }
        },
        {
            path: '/signup',
            name: 'signup',
            component: () => import(/* webpackChunkName: "about" */ './views/SignUp.vue'),
            meta: {
                authRequired: false
            }
        }
    ]
})

router.beforeEach((to, from, next) => {
    const user = sessionStorage.getItem('user');
    const authRequired = to.meta.authRequired;

    if (authRequired && !user) {
        return next('/login')
    }
    next();
})

export default router;

