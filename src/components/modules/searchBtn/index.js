import searchBtn from './searchBtn.vue'
import cancelBtn from './cancelBtn.vue'

/* istanbul ignore next */
searchBtn.install = function(Vue) {
    Vue.component(searchBtn.name, searchBtn)
}
cancelBtn.install = function(Vue) {
    Vue.component(cancelBtn.name, cancelBtn)
}

export {
    searchBtn,
    cancelBtn
}
