// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import Element from 'element-ui'
// import $ from 'jquery'
import './assets/css/element-variables.scss'
import 'element-ui/lib/theme-chalk/index.css'
require('./icon/iconfont.css')
Vue.use(Element)
import store from './store'
// 防抖节流
import Debounce from './assets/js/utils'
Vue.component('Debounce', Debounce)

// 自定义全局组件库
import FLYmodules from './components/modules/index.js'
Vue.use(FLYmodules)

// 自定义全局方法库
import PublicFun from './assets/js/exit_fun.js'
Vue.use(PublicFun)

// 自定义全局过滤器
import filters from './assets/js/filters.js'
// 过滤器统一处理加载
Object.keys(filters).forEach(key => {
    Vue.filter(key, filters[key])
})

// 国际化
// import { i18n } from './i18n/index'
// 自定义全局指令
import directives from './assets/js/directives.js'
Object.keys(directives).forEach(key => {
    Vue.directive(key, {
        bind: directives[key].bind,
        inserted: directives[key].inserted,
        update: directives[key].update,
        componentUpdated: directives[key].componentUpdated,
        unbind: directives[key].unbind
    })
})

Vue.config.productionTip = false

/* eslint-disable no-new */
export default new Vue({
    el: '#app',
    router,
    store,
    // i18n,
    components: { App },
    template: '<App/>'
})
