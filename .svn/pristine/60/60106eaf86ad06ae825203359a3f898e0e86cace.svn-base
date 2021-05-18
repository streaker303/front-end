import request from '@/utils/server'
// 退出
export const exit = (data) => {
    return request({
        url: 'common/exit',
        method: 'post',
        params: data.queryData,
        data: data.paramsData
    })
}
export const get_history_messages = (data) => {
    return request({
        url: 'defense_drill/manage/greeting/getUserTopic',
        method: 'post',
        params: data.queryData,
        data: data.paramsData
    })
}
// 系统列表
export const get_menu = (data) => {
    return request({
        url: 'common/manage/permission/getIndexMenu',
        method: 'post',
        params: data.queryData,
        data: data.paramsData
    })
}

// 获取用户信息
export const get_user_info = (data) => {
    return request({
        url: 'common/manage/permission/getUserInfo',
        method: 'post',
        params: data.queryData,
        data: data.paramsData
    })
}

export const get_time = (data) => {
    return request({
        url: 'common/terminal/getSystemTime',
        method: 'post',
        params: data.queryData,
        data: data.paramsData
    })
}

// 登录接口
export const login = (data) => {
    console.log(data)
    return request({
        url: 'common/loginUser',
        method: 'post',
        params: data.queryData,
        data: data.paramsData
    })
}
// 修改密码
export const change_pwd = (data) => {
    return request({
        url: 'common/manage/permission/updatePassword',
        method: 'post',
        params: data.queryData,
        data: data.paramsData
    })
}

export const get_asset_info = (data) => {
    return request({
        url: 'common/terminal/getAdMsg',
        method: 'post',
        data: data
    })
}
export const change_theme = (data) => {
    return request({
        url: 'common/manage/themeConfig/save',
        method: 'post',
        params: data.queryData,
        data: data.paramsData
    })
}
export const get_theme = (data) => {
    return request({
        url: 'common/manage/themeConfig/getThemeConfig',
        method: 'post',
        params: data.queryData,
        data: data.paramsData
    })
}
export const get_login_theme = (data) => {
    return request({
        url: 'common/terminal/getThemeConfig',
        method: 'post',
        params: data.queryData,
        data: data.paramsData
    })
}

