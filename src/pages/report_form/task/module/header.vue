<template>
    <div class="ub w100" style="box-sizing: border-box">
        <div class="ub event-content w100">
            <el-form ref="query" class="w100" :model="query">
                <div class="ub ub-ver ub-ac ub-f1">
                    <el-row type="flex" align="middle" class="w100" style="border-radius: 0 0 5px 5px">
                        <el-col :span="6" class="event-btn-col">
                            <el-form-item label="报表名称：" label-width="90px">
                                <el-input v-model="query.name" placeholder="请输入" size="small" clearable />
                            </el-form-item>
                        </el-col>
                        <el-col :span="6" class="event-btn-col">
                            <el-form-item label="报表类型：" label-width="90px">
                                <el-select v-model="query.type" clearable filterable placeholder="请选择" size="small">
                                    <el-option v-for="item in types" :key="item.value" :label="item.label" :value="item.value" />
                                </el-select>
                            </el-form-item>
                        </el-col>
                        <el-col :span="6" class="event-btn-col">
                            <el-form-item label="创建人：" label-width="90px">
                                <el-select v-model="query.createUserId" clearable filterable placeholder="请选择" size="small">
                                    <el-option v-for="item in users" :key="item.value" :label="item.label" :value="item.value" />
                                </el-select>
                            </el-form-item>
                        </el-col>
                        <el-col :span="6" class="ub ub-ac ub-pe event-btn-col">
                            <searchBtn title="搜 索" @click="search" />
                        </el-col>
                    </el-row>
                </div>
            </el-form>
        </div>
    </div>
</template>

<script>
import {
    get_all_users
} from '@/server/report_form/api.js'
export default {
    props: {
        query: {
            type: Object,
            required: true
        },
        types: {
            type: Array,
            default: null
        }
    },
    data() {
        return {
            users: []
        }
    },
    created() {
        this.initUser()
    },
    methods: {
        // 执行检索
        search() {
            this.$emit('searchInit')
        },
        initUser() {
            this.users = []
            const data = {
                queryData: {},
                paramsData: {}
            }
            get_all_users(data)
                .then((res) => {
                    console.log('所有人员', res)
                    if (res.length > 0) {
                        res.forEach((item) => {
                            const obj = {}
                            obj.value = item.id
                            obj.label = item.chineseName
                            this.users.push(obj)
                        })
                    }
                })
                .catch((error) => {
                    console.log('error' + error)
                })
        }
    }
}
</script>
