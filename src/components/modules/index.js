import backTop from './backTop/index.js'
import { searchBtn, cancelBtn } from './searchBtn/index.js'
import angleBtn from './angleBtn/index.js'
import { addBtn, deleteBtn } from './colorBtn/index.js'
const components = [
    backTop,
    searchBtn,
    angleBtn,
    cancelBtn,
    addBtn,
    deleteBtn
]
const install = function(Vue) {
    components.map(component => {
        Vue.component(component.name, component)
    })
}

export default {
    version: '0.0.1',
    install
}
