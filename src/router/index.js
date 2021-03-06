import Vue from 'vue'
import Router from 'vue-router'
import {
    getlocalStorage
} from '@/assets/js/public_fun.js'
import store from '@/store/index'
Vue.use(Router)
const VueRouterReplace = Router.prototype.replace
Router.prototype.replace = function replace(to) {
    return VueRouterReplace.call(this, to).catch(err => err)
}
const VueRouterPush = Router.prototype.push
Router.prototype.push = function push(to) {
    return VueRouterPush.call(this, to).catch(err => err)
}
import common from './common'
const router = new Router({
    routes: [
        ...common
    ]
})
// 路由切换加载进度条
import LoadingBar from '../components/loading-bar'
LoadingBar.config({
    color: '#5cb85c'
})
router.beforeEach((to, from, next) => {
    const { need_login = false } = to.meta
    const userInfo = getlocalStorage('userInfo')
    console.log('need_login', need_login)
    console.log('userInfo', userInfo)
    if (need_login && !userInfo) {
        console.log(11111111111111)
        store.commit('switchUserInfo', '')
        store.commit('switchLoginShow', {
            show: true,
            type: 0
        })
        router.push('/')
    } else {
        if (to.meta.title) {
            document.title = to.meta.title
        }
        LoadingBar.start()
        next()
    }
})
router.afterEach(transition => {
    LoadingBar.finish()
})
export default router
