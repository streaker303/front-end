const login = () => import('@/pages/common/login.vue')
const login_new = () => import('@/pages/common/login_new.vue')

const errorPage = () => import('@/pages/common/error.vue')
const home = () => import('@/pages/common/home.vue')
/* 大屏*/
const bigScreen = () => import('@/pages/common/bigScreen.vue')
// 上报
import report_form from './report_form'
export default [
    {
        path: '/',
        redirect: '/login'
    },
    {
        path: '/error',
        name: 'error',
        component: errorPage,
        meta: {
            title: '系统出错了'
        }
    },
    {
        path: '/login',
        name: 'login',
        component: login,
        meta: {
            title: '积极安全防御分析工具'
        }
    },
    {
        path: '/login_new',
        name: 'login_new',
        component: login_new,
        meta: {
            title: '积极安全防御分析工具'
        }
    },
    {
        path: '/bigScreen',
        name: 'bigScreen',
        component: bigScreen,
        meta: {
            title: '大屏'
        }
    },
    {
        path: '/home',
        name: 'home',
        component: home,
        children: [
            ...report_form
        ]
    }
]
