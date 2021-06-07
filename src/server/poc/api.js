import request from '@/utils/server'

// 分析攻击列表
export const getPocList = (data) => 	{
    return request({
        url: '/poc/client/poc/page',
        method: 'post',
        params: data.queryData,
        data: data.paramsData
    })
}

// 执行分析攻击列表
export const runPocList = (data) => 	{
    return request({
        url: '/poc/client/poc/execute',
        method: 'post',
        params: data.queryData,
        data: data.paramsData
    })
}
