import request from '@/utils/server'
// 退出
export const exit = (data) => {
    return request({
        url: 'user-manage/exit',
        method: 'post',
        params: data.queryData,
        data: data.paramsData
    })
}

// 登录接口
export const login = (data) => {
    console.log(data)
    return request({
        url: 'user-manage/loginUser',
        method: 'post',
        params: data.queryData,
        data: data.paramsData
    })
}
// 注册
export const register = (data) => {
    return request({
        url: 'user-manage/register',
        method: 'post',
        params: data.queryData,
        data: data.paramsData
    })
}
// 发送短信验证码
export const send_code = (data) => {
    return request({
        url: 'user-manage/getCode',
        method: 'post',
        params: data.queryData,
        data: data.paramsData
    })
}
