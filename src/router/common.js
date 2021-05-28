const login = () => import('@/pages/common/login.vue')

const errorPage = () => import('@/pages/common/error.vue')
const home = () => import('@/pages/common/home.vue')
// 首页
import home_index from './home'
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
        path: '/home',
        name: 'home',
        component: home,
        redirect: '/home/index',
        children: [
            ...home_index
        ]
    }
]
