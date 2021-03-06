import {
    getlocalStorage
} from '@/assets/js/public_fun.js'

let userInfo = getlocalStorage('userInfo')
const common = {
    state: {
        loginConfig: {
            show: false,
            type: 0
        },
        userInfo: userInfo
    },
    mutations: {
        switchLoginShow: (state, obj) => {
            state.loginConfig = obj
        },
        switchUserInfo: (state, obj) => {
            state.userInfo = obj
        }
    },
    actions: {

    }
}

export default common
