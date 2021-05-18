import addBtn from './addBtn.vue'
import deleteBtn from './deleteBtn.vue'

/* istanbul ignore next */
addBtn.install = function(Vue) {
    Vue.component(addBtn.name, addBtn)
}
deleteBtn.install = function(Vue) {
    Vue.component(deleteBtn.name, deleteBtn)
}

export {
    addBtn,
    deleteBtn
}
