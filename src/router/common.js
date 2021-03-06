const errorPage = () => import('@/pages/common/error.vue')
const home = () => import('@/pages/common/home.vue')
// 首页
import home_index from './home'
// poc
import poc_page from './poc.js'
export default [
    {
        path: '/',
        redirect: '/home/index'
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
        path: '/home',
        name: 'home',
        component: home,
        redirect: '/home/index',
        children: [
            ...home_index,
            ...poc_page
        ]
    }
]
