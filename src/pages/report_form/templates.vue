<template>
    <div class="event event-wrapper">
        <div class="ub w100" style="box-sizing: border-box;">
            <div class="ub event-content w100">
                <div class="ub ub-ver ub-ac ub-f1">
                    <el-row type="flex" align="middle" class="w100" style="border-radius:0 0 5px 5px;">
                        <el-col :span="6" class="event-btn-col">
                            <el-form :model="get_params">
                                <el-form-item label="模板名称：" label-width="90px">
                                    <el-input v-model="get_params.name" placeholder="请输入" clearable size="small" />
                                </el-form-item>
                            </el-form>
                        </el-col>
                        <el-col :span="18" class="ub ub-ac ub-pe event-btn-col">
                            <searchBtn title="搜 索" @click="searchAssets" />
                        </el-col>
                    </el-row>
                </div>
            </div>
        </div>
        <div class="attendance-list">
            <div class="ub ub-pj w100">
                <div class="list-tips">
                    报表模板
                </div>
                <div>
                    <addBtn icon="el-icon-plus" title="添加模板" @click="addShow" />
                    <deleteBtn style="margin-left: 10px;" icon="el-icon-delete" title="刪 除" @click="handleDelAll" />
                </div>
            </div>
            <el-table
                ref="multipleTable"
                v-loading="loading"
                :row-key="(row)=>{ return row.id}"
                class="bigTable"
                :data="tableData"
                border
                stripe
                tooltip-effect="dark"
                @selection-change="handleSelectionChange"
            >
                <el-table-column type="selection" :reserve-selection="true" width="50" />
                <el-table-column align="center" type="index" width="50" :index="indexMethod" label="序号" />
                <el-table-column prop="name" label="模板名称" />
                <el-table-column prop="createUserName" label="创建人" width="170" />
                <el-table-column prop="createTime" label="创建时间" />
                <el-table-column prop="updateTime" label="修改时间" />
                <el-table-column align="center" label="操作" width="130">
                    <template slot-scope="scope">
                        <el-button type="text" @click="handleEdit(scope.row)">
                            编辑
                        </el-button>
                        <el-button type="text" @click="handleDelete(scope.row)">
                            删除
                        </el-button>
                    </template>
                </el-table-column>
            </el-table>
            <div class="pagination">
                <el-pagination
                    background
                    :current-page="get_params.page"
                    :page-sizes="[10, 20, 30, 40,50]"
                    :page-size="get_params.size"
                    layout="total, sizes, prev, pager, next"
                    prev-text="上一页"
                    next-text="下一页"
                    :total="total_num"
                    @size-change="handleSizeChange"
                    @current-change="handleCurrentChange"
                />
            </div>
        </div>
        <el-dialog
            :title="isEdit===true?'编辑模板':'新增模板'"
            :visible.sync="addDialog"
            width="790px"
            custom-class="attendance-dialog"
        >
            <div style="width:90%;margin: 0 auto;" @click="closeDialog">
                <el-form ref="reportForm" label-width="90px" label-position="right" :rules="rules" :model="reportForm">
                    <el-form-item label="模板名称：" label-width="100px" prop="name">
                        <el-input
                            v-model="reportForm.name"
                            placeholder="请输入"
                            style="width: 80%"
                            size="small"
                            clearable
                        />
                    </el-form-item>
                    <el-form-item label="日志来源：" label-width="100px" style="margin-bottom: 20px">
                        <div class="select-box ruleName tree" style="width: 80%">
                            <div
                                style="cursor:pointer;"
                                class="ub ub-ac select-title"
                                @click.stop="onOff_log=!onOff_log"
                            >
                                <div
                                    class="ub ub-f1 ub-pc line1"
                                    :class="{'selected':checkedRealNodes_log.length>0}"
                                    style="text-indent: 14px;line-height: 28px;color:#ccc;font-size:12px;"
                                >
                                    {{ currentGroup_log }}
                                </div>
                                <div style="width:28px;height:28px;text-align: center;line-height: 28px;">
                                    <i
                                        style="color:#1cd7fa;"
                                        :class="{'el-icon-arrow-up':onOff_log,'el-icon-arrow-down':!onOff_log}"
                                    />
                                </div>
                            </div>
                            <div v-show="onOff_log" class="select-mask">
                                <div class="list">
                                    <div class="ub w100 list-item-title" @click.stop="allSelect_log">
                                        <div class="circle">
                                            <i
                                                class="iconfont"
                                                :class="{'icon-selected':isAllChecked_log,'icon-circle':!isAllChecked_log}"
                                            />
                                        </div>
                                        <div class="ub ub-f1 title">
                                            全部
                                        </div>
                                        <!-- <div @click.stop="item.isShow=!item.isShow"><i :class="{'el-icon-arrow-up':item.isShow,'el-icon-arrow-down':!item.isShow}"></i></div> -->
                                    </div>
                                    <div v-for="(item,index) in reports_log" :key="index" class="list-item w100">
                                        <div class="ub w100 list-item-title" @click.stop="groupSelect_log(item)">
                                            <div class="circle">
                                                <i
                                                    class="iconfont"
                                                    :class="{'icon-selected':item.isChecked,'icon-circle':!item.isChecked,}"
                                                />
                                            </div>
                                            <div class="ub ub-f1 title">
                                                {{ item.name }}
                                            </div>
                                            <div @click.stop="item.isShow=!item.isShow">
                                                <i :class="{'el-icon-arrow-up':item.isShow,'el-icon-arrow-down':!item.isShow}" />
                                            </div>
                                        </div>
                                        <ul v-if="item.isShow" class="list-inner w100">
                                            <li
                                                v-for="_item in item.list"
                                                :key="_item.id"
                                                class="ub w100"
                                                @click.stop="itemSelect_log(item,_item)"
                                            >
                                                <div class="circle">
                                                    <i
                                                        class="iconfont"
                                                        :class="{'icon-selected':_item.isChecked,'icon-circle':!_item.isChecked,}"
                                                    />
                                                </div>
                                                <div class="ub ub-f1 title">
                                                    {{ _item.name }}
                                                </div>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <div
                                v-if="groupIsSelected_log"
                                style="position:absolute;left:0;top:32px;line-height:20px;font-size:12px;color:#F56C6C;"
                            >
                                请选择分组
                            </div>
                        </div>
                    </el-form-item>
                    <el-form-item label="子报表：" label-width="100px" style="margin-bottom: 20px" class="child-from">
                        <div class="select-box ruleName tree" style="width: 80%">
                            <div style="cursor:pointer;" class="ub ub-ac select-title" @click.stop="onOff=!onOff">
                                <div
                                    class="ub ub-f1 ub-pc line1 selected-title"
                                    :class="{'selected':checkedRealNodes.length>0}"
                                    style="text-indent: 14px;line-height: 28px;font-size:12px;"
                                >
                                    {{ currentGroup }}
                                </div>
                                <div style="width:28px;height:28px;text-align: center;line-height: 28px;">
                                    <i
                                        style="color:#1cd7fa;"
                                        :class="{'el-icon-arrow-up':onOff,'el-icon-arrow-down':!onOff}"
                                    />
                                </div>
                            </div>
                            <div v-show="onOff" class="select-mask">
                                <div class="list">
                                    <div class="ub w100 list-item-title" @click.stop="allSelect">
                                        <div class="circle">
                                            <i
                                                class="iconfont"
                                                :class="{'icon-selected':isAllChecked,'icon-circle':!isAllChecked}"
                                            />
                                        </div>
                                        <div class="ub ub-f1 title">
                                            全部
                                        </div>
                                        <!-- <div @click.stop="item.isShow=!item.isShow"><i :class="{'el-icon-arrow-up':item.isShow,'el-icon-arrow-down':!item.isShow}"></i></div> -->
                                    </div>
                                    <div v-for="(item,index) in reports" :key="index" class="list-item w100">
                                        <div class="ub w100 list-item-title" @click.stop="groupSelect(item)">
                                            <div class="circle">
                                                <i
                                                    class="iconfont"
                                                    :class="{'icon-selected':item.isChecked,'icon-circle':!item.isChecked,}"
                                                />
                                            </div>
                                            <div class="ub ub-f1 title">
                                                {{ item.name }}
                                            </div>
                                            <div @click.stop="item.isShow=!item.isShow">
                                                <i :class="{'el-icon-arrow-up':item.isShow,'el-icon-arrow-down':!item.isShow}" />
                                            </div>
                                        </div>
                                        <ul v-if="item.isShow" class="list-inner w100">
                                            <li
                                                v-for="_item in item.list"
                                                :key="_item.id"
                                                class="ub w100"
                                                @click.stop="itemSelect(item,_item)"
                                            >
                                                <div class="circle">
                                                    <i
                                                        class="iconfont"
                                                        :class="{'icon-selected':_item.isChecked,'icon-circle':!_item.isChecked,}"
                                                    />
                                                </div>
                                                <div class="ub ub-f1 title">
                                                    {{ _item.name }}
                                                </div>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <div
                                v-if="groupIsSelected"
                                style="position:absolute;left:0;top:32px;line-height:20px;font-size:12px;color:#F56C6C;"
                            >
                                请选择分组
                            </div>
                        </div>
                        <div v-if="flag" class="el-form-item__error">
                            请选择子报表
                        </div>
                    </el-form-item>

                    <el-form-item v-if="checkedRealNodes.length>0" label="" prop="name">
                        <div style="width: 80%">
                            <div style="font-size:12px;color: #00c0ff;">
                                选定类型
                            </div>
                            <div class="select-list">
                                <div
                                    v-for="(item,index) in checkedRealNodes"
                                    :key="index"
                                    class="ub w100 select-list-item"
                                >
                                    <div class="ub ub-f1 selected-title">
                                        {{ item.name }}
                                    </div>
                                    <div>
                                        <i class="iconfont icon-paixu" @click="moveUp(index,item)" />
                                        <i class="iconfont icon-guanbi" @click="deleteSelected(index,item)" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </el-form-item>
                </el-form>
            </div>
            <span slot="footer" class="dialog-footer">
                <searchBtn title="确 定" @click="submitTask('reportForm')" />
                <cancelBtn title="取 消" @click="addDialog = false" />
            </span>
        </el-dialog>
        <el-dialog title="删除" :visible.sync="deleteItemDialog" width="30%" custom-class="attendance-dialog">
            <span>确定删除吗？</span>
            <span slot="footer" class="dialog-footer">
                <searchBtn title="确 定" @click="handleDeleteItemFun" />
                <cancelBtn title="取 消" @click="deleteItemDialog = false" />
            </span>
        </el-dialog>
        <el-dialog title="删除" :visible.sync="delAllDialog" width="30%" custom-class="attendance-dialog">
            <span>确定删除吗？</span>
            <span slot="footer" class="dialog-footer">
                <searchBtn title="确 定" @click="handleDeleteAllFun" />
                <cancelBtn title="取 消" @click="delAllDialog = false" />
            </span>
        </el-dialog>
    </div>
</template>

<script>
import {
    get_template,
    add_template,
    del_template,
    get_reports,
    get_reportsLogs
} from '../../server/report_form/api.js'

export default {
    name: 'Templates',
    data() {
        return {
            flag: false,
            groupIsSelected_log: false,
            checkedNodes_log: [],
            reports_log: [],
            isAllChecked_log: false,
            checkedRealNodes_log: [],
            onOff_log: false,

            delAllDialog: false,
            isEdit: false,
            isAllChecked: false,
            groupIsSelected: false,
            initId: null,
            depId: '',
            currentNodeId: '',
            reports: [],
            creaters: [],
            onOff: false,
            detail_loading: false,
            total_num_detail: 0,
            tableDataDetail: [{
                name: 'wdwqwq',
                timeStr: '2020-09-09 12:12:12~2020-09-09 12:12:12',
                time: '2020-09-09 12:12:12'
            }],
            get_params_detail: {
                page: 1,
                size: 10
            },
            detailDialog: false,
            isStart: true,
            states: [],
            types: [],
            templates: [],
            reportForm: {
                name: ''
            },
            rules: {
                name: [
                    { required: true, message: '请输入模板名称', trigger: 'blur' }
                ]
            },
            addDialog: false,
            deleteItemDialog: false,
            deleteAllDialog: false,
            loading: false,
            total_num: 0,
            tableData: [],
            multipleSelection: [],
            delId: '',
            sayTimes: [],
            get_params: {
                page: 1,
                size: 20,
                name: '',
                state: '',
                type: '',
                creater: ''
            },
            checkedNodes: [],
            checkedRealNodes: []
        }
    },
    computed: {
        currentGroup_log: function() {
            if (this.checkedNodes_log.length === 0) {
                return '请选择'
            } else {
                const arr = []
                this.checkedNodes_log.map(item => {
                    arr.push(item.name)
                })
                return arr.join(',')
            }
        },
        currentGroup: function() {
            if (this.checkedRealNodes.length === 0) {
                // eslint-disable-next-line vue/no-side-effects-in-computed-properties
                this.flag = true
                return '请选择'
            } else {
                const arr = []
                // eslint-disable-next-line vue/no-side-effects-in-computed-properties
                this.flag = false
                this.checkedRealNodes.map(item => {
                    arr.push(item.name)
                })
                return arr.join(',')
            }
        }
    },
    watch: {

        'addDialog': {
            handler(newVal, oldVal) {
                if (!newVal) {
                    this.$refs.reportForm.resetFields()
                    this.reportForm.name = ''
                    this.checkedNodes = []
                    this.checkedRealNodes = []
                    this.flag = false
                    this.reports = this.reports.map(item => {
                        item.isChecked = false
                        item.isShow = false
                        item.list = item.list.map(_item => {
                            _item.isChecked = false
                            return _item
                        })
                        return item
                    })
                    this.checkedNodes_log = []
                    this.reports_log = this.reports_log.map(item => {
                        item.isChecked = false
                        item.isShow = false
                        item.list = item.list.map(_item => {
                            _item.isChecked = false
                            return _item
                        })
                        return item
                    })
                }
            }
        },
        'reports_log': {
            handler(newVal, oldVal) {
                if (newVal.some(item => item.isChecked === false)) {
                    this.isAllChecked_log = false
                } else {
                    this.isAllChecked_log = true
                }
                let arr = []
                newVal.map(item => {
                    arr = arr.concat(item.list)
                })
                this.checkedNodes_log = arr.filter(item => item.isChecked)

                console.log('this.checkedNodes_log', this.checkedNodes_log)
            },
            deep: true
        },
        'reports': {
            handler(newVal, oldVal) {
                if (newVal.some(item => item.isChecked === false)) {
                    this.isAllChecked = false
                } else {
                    this.isAllChecked = true
                }
                let arr = []
                newVal.map(item => {
                    arr = arr.concat(item.list)
                })
                this.checkedNodes = arr.filter(item => item.isChecked)
                if (this.checkedNodes.length > this.checkedRealNodes.length) {
                    this.checkedNodes.map(item => {
                        if (!this.checkedRealNodes.some(_item => _item.id === item.id)) {
                            this.checkedRealNodes.push(item)
                        }
                    })
                } else {
                    const diffIds = []
                    this.checkedRealNodes.map(item => {
                        if (!this.checkedNodes.some(_item => _item.id === item.id)) {
                            diffIds.push(item.id)
                        }
                    })
                    diffIds.map((item) => {
                        const index = this.checkedRealNodes.findIndex(_item => _item.id === item)
                        this.checkedRealNodes.splice(index, 1)
                    })
                }
                console.log('this.checkedNodes', this.checkedNodes)
                console.log('this.checkedRealNodes', this.checkedRealNodes)
            },
            deep: true
        }
    },

    mounted() {
        this.$nextTick(() => {
            this.initReport()
            this.initReportLog()
            this.get_data()
        })
    },

    methods: {
        closeDialog() {
            if (this.onOff) {
                this.onOff = false
            }
            if (this.onOff_log) {
                this.onOff_log = false
            }
        },
        addShow() {
            this.addDialog = true
            this.flag = false
            this.isEdit = false
        },
        initReportLog() {
            this.reports = []
            const data = {
                queryData: {},
                paramsData: {}
            }
            get_reportsLogs(data).then(res => {
                console.log('日志来源', res)
                if (res.length > 0) {
                    this.reports_log = res.map(item => {
                        item.isChecked = false
                        item.isShow = false
                        item.list = item.sub.map(_item => {
                            _item.isChecked = false
                            return _item
                        })
                        delete item.sub
                        return item
                    })
                }
            }).catch(error => {
                console.log('error' + error)
            })
        },
        initReport() {
            this.reports = []
            const data = {
                queryData: {},
                paramsData: {}
            }
            get_reports(data).then(res => {
                console.log('子模板', res)
                if (res.length > 0) {
                    this.reports = res.map(item => {
                        item.isChecked = false
                        item.isShow = false
                        item.list = item.subArr.map(_item => {
                            _item.isChecked = false
                            return _item
                        })
                        delete item.subArr
                        return item
                    })
                }
            }).catch(error => {
                console.log('error' + error)
            })
        },
        deleteSelected(index, item) {
            this.checkedRealNodes.splice(index, 1)
            this.reports = this.reports.map(items => {
                items.isChecked = false
                items.list = items.list.map(_item => {
                    if (item.id === _item.id) {
                        _item.isChecked = false
                    }
                    return _item
                })
                return items
            })
        },
        moveUp(index, item) {
            var that = this
            if (index === 0) {
                that.$message({
                    message: '处于顶端，不能继续上移',
                    type: 'warning'
                })
            } else {
                const upDate = that.checkedRealNodes[index - 1]
                that.checkedRealNodes.splice(index - 1, 1)
                that.checkedRealNodes.splice(index, 0, upDate)
            }
        },
        allSelect_log() {
            if (!this.isAllChecked_log) {
                this.reports_log = this.reports_log.map(item => {
                    item.isChecked = true
                    item.list = item.list.map(_item => {
                        _item.isChecked = true
                        return _item
                    })
                    return item
                })
            } else {
                this.reports_log = this.reports_log.map(item => {
                    item.isChecked = false
                    item.list = item.list.map(_item => {
                        _item.isChecked = false
                        return _item
                    })
                    return item
                })
            }
            this.isAllChecked_log = !this.isAllChecked_log
        },
        allSelect() {
            if (!this.isAllChecked) {
                this.reports = this.reports.map(item => {
                    item.isChecked = true
                    item.list = item.list.map(_item => {
                        _item.isChecked = true
                        return _item
                    })
                    return item
                })
            } else {
                this.reports = this.reports.map(item => {
                    item.isChecked = false
                    item.list = item.list.map(_item => {
                        _item.isChecked = false
                        return _item
                    })
                    return item
                })
            }
            this.isAllChecked = !this.isAllChecked
        },
        itemSelect_log(item, _item) {
            if (!_item.isChecked) {
                _item.isChecked = true
                if (item.list.some(items => items.isChecked === false)) {
                    item.isChecked = false
                } else {
                    item.isChecked = true
                }
            } else {
                _item.isChecked = false
                item.isChecked = false
            }
        },
        itemSelect(item, _item) {
            if (!_item.isChecked) {
                _item.isChecked = true
                if (item.list.some(items => items.isChecked === false)) {
                    item.isChecked = false
                } else {
                    item.isChecked = true
                }
            } else {
                _item.isChecked = false
                item.isChecked = false
            }
        },
        groupSelect_log(item) {
            if (!item.isChecked) {
                item.list = item.list.map(_item => {
                    _item.isChecked = true
                    return _item
                })
                item.isChecked = true
            } else {
                item.list = item.list.map(_item => {
                    _item.isChecked = false
                    return _item
                })
                item.isChecked = false
            }
        },
        groupSelect(item) {
            if (!item.isChecked) {
                item.list = item.list.map(_item => {
                    _item.isChecked = true
                    return _item
                })
                item.isChecked = true
            } else {
                item.list = item.list.map(_item => {
                    _item.isChecked = false
                    return _item
                })
                item.isChecked = false
            }
        },

        indexMethod(index) {
            return (this.get_params.page - 1) * this.get_params.size + index + 1
        },
        searchAssets() {
            this.get_params.page = 1
            this.get_data()
        },
        get_data() {
            this.loading = true
            this.tableData = []
            const data = {
                queryData: {
                    page: this.get_params.page,
                    pageSize: this.get_params.size
                },
                paramsData: {
                    'name': this.get_params.name
                }
            }
            get_template(data).then(res => {
                console.log(res)
                this.loading = false
                this.total_num = res.totalElements
                const list = res.content
                if (list.length > 0) {
                    list.forEach(item => {
                        const obj = {}
                        obj.id = item.id
                        obj.name = item.name
                        obj.createUserId = item.createUserId
                        obj.updateTime = item.updateTime
                        obj.createUserName = item.createUserName
                        obj.createTime = item.createTime
                        obj.arrObj = item.arrObj
                        obj.dt = item.dt
                        this.tableData.push(obj)
                    })
                }
            }).catch(error => {
                this.loading = false
                console.log('error' + error)
            })
        },
        submitTask(formName) {
            this.$refs[formName].validate((valid) => {
                if (valid) {
                    this.add_template()
                } else {
                    console.log('error submit!!')
                    return false
                }
            })
        },
        add_template() {
            if (this.checkedRealNodes.length <= 0) {
                this.$message({
                    message: '请选择子报表',
                    type: 'warning'
                })
                return
            }
            const arr = []
            const logs = []
            this.checkedRealNodes.forEach(item => {
                arr.push(item.code)
            })
            console.log('this.checkedNodes', this.checkedNodes)
            this.checkedNodes_log.forEach(item => {
                logs.push(item.codeNum)
            })
            console.log('logs', logs)
            //
            const data = {
                queryData: {},
                paramsData: {
                    name: this.reportForm.name,
                    arrObj: arr,
                    dt: JSON.stringify(logs)
                }
            }
            if (this.isEdit) {
                data.paramsData.id = this.reportForm.id
            }
            add_template(data).then(res => {
                console.log(res)
                this.addDialog = false
                if (this.isEdit) {
                    this.$message({
                        message: '编辑成功',
                        type: 'success'
                    })
                } else {
                    this.$message({
                        message: '添加成功',
                        type: 'success'
                    })
                }

                setTimeout(() => {
                    this.get_data()
                }, 1500)
            }).catch(err => {
                this.addDialog = false
                console.log(err + 'err')
            })
        },
        handleEdit(row) {
            console.log('row', row)
            this.addDialog = true
            this.isEdit = true
            const objArr = this.$deepCopy(row.arrObj)
            const dt = row.dt ? JSON.parse(row.dt) : []

            this.reportForm.name = row.name
            this.reportForm.id = row.id
            this.reports = this.reports.map(item => {
                item.list = item.list.map(_item => {
                    if (objArr.some(items => items === _item.code)) {
                        _item.isChecked = true
                    }
                    return _item
                })
                if (item.list.some(items => items.isChecked === false)) {
                    item.isChecked = false
                } else {
                    item.isChecked = true
                }
                return item
            })
            this.reports_log = this.reports_log.map(item => {
                item.list = item.list.map(_item => {
                    if (dt.some(items => items === _item.codeNum)) {
                        _item.isChecked = true
                    }
                    return _item
                })
                if (item.list.some(items => items.isChecked === false)) {
                    item.isChecked = false
                } else {
                    item.isChecked = true
                }
                return item
            })
            setTimeout(() => {
                const arrObj = []
                console.log('11111111', this.checkedRealNodes)
                objArr.map(item => {
                    const selected = this.checkedRealNodes.filter(_item => item === _item.code)
                    if (selected.length > 0) {
                        arrObj.push(selected[0])
                    }
                })
                console.log('22222222', arrObj)
                this.checkedRealNodes = this.$deepCopy(arrObj)
            }, 10)
        },
        handleDelete(row) {
            this.delId = row.id
            this.deleteItemDialog = true
        },
        handleSelectionChange(val) {
            console.log(val)
            this.multipleSelection = val
        },
        handleSizeChange(val) {
            this.get_params.size = val
            this.get_data()
        },
        handleCurrentChange(val) {
            this.get_params.page = val
            this.get_data()
        },
        handleDelAll() {
            if (this.multipleSelection.length > 0) {
                this.delAllDialog = true
            } else {
                this.$message({
                    message: '请选择要删除的模板！',
                    type: 'warning'
                })
            }
        },
        handleDeleteAllFun() {
            const ids = []
            this.multipleSelection.map(item => {
                ids.push(item.id)
            })
            const data = {
                queryData: {},
                paramsData: {
                    'ids': ids
                }
            }
            del_template(data).then(res => {
                this.$message({
                    message: '删除成功',
                    type: 'success'
                })
                this.delAllDialog = false
                setTimeout(() => {
                    this.get_data()
                }, 1500)
            }).catch(err => {
                console.log(err + 'err')
            })
        },
        handleDeleteItemFun() {
            const data = {
                queryData: {},
                paramsData: {
                    'ids': [this.delId]
                }
            }
            del_template(data).then(res => {
                this.$message({
                    message: '删除成功',
                    type: 'success'
                })
                this.deleteItemDialog = false
                setTimeout(() => {
                    this.get_data()
                }, 1500)
            }).catch(err => {
                console.log(err + 'err')
            })
        }
    }
}
</script>

<style lang="scss" scoped>
.pagination {
    padding: 30px 0 20px;
    text-align: right;
}

.child-from > > > label:before {
    content: '*';
    color: #F56C6C;
    margin-right: 4px;
}

.el-input.ips {
    display: block;
    width: 100%;
}

.drawer-pad {
    padding: 0 20px;
}

.event > > > .el-range-input {
    background-color: rgba(0, 0, 0, 0);
    color: #fff;
}

.event > > > .el-range-separator {
    color: #fff;
}

.event > > > .el-radio__inner {
    background-color: transparent;
}

.event > > > .el-radio__label {
    color: #fff;
}

.event > > > .el-radio__input.is-checked + .el-radio__label {
    color: #409EFF;
}

.event > > > .el-radio__input.is-disabled .el-radio__inner,
.event > > > .el-radio__input.is-disabled.is-checked .el-radio__inner {
    border-color: #409EFF;
    background: transparent;
}

.option a {
    margin: 0 3px;
}

.switch-wrapper {
    width: 68px;
    height: 28px;
    position: relative;
    cursor: pointer;
}

.switch-wrapper > div:nth-child(1) {
    width: 68px;
    height: 28px;
    background-color: #001a2c;
    box-shadow: inset 0px 0px 7px 0px #000000;
    border-radius: 14px;

    div {
        font-size: 14px;
        line-height: 28px;
        padding: 0 8px;
    }

    > div:nth-child(1) {
        color: #00d7ff;
        opacity: 0.6;
    }

    > div:nth-child(2) {
        color: #ffaa47;
        opacity: 0.6;
    }
}

.switch-wrapper > div:nth-child(2) {
    width: 32px;
    height: 32px;
    position: absolute;
    left: 0;
    top: 50%;
    margin-top: -16px;
    border-radius: 100%;
}

.switch-wrapper.yes > div:nth-child(2) {
    animation: moveone .3s linear forwards;
}

.switch-wrapper.no > div:nth-child(2) {
    animation: _moveone .3s linear forwards;
}

@keyframes moveone {
    0% {
        background-color: #fa941c;
        box-shadow: 0px 0px 10px 0px #9c5603;
        left: 0;
    }

    100% {
        background-color: #1cd7fa;
        box-shadow: 0px 0px 10px 0px #058fa9;
        left: 36px;
    }
}

@keyframes _moveone {
    0% {
        background-color: #1cd7fa;
        box-shadow: 0px 0px 10px 0px #058fa9;
        left: 36px;
    }

    100% {
        background-color: #fa941c;
        box-shadow: 0px 0px 10px 0px #9c5603;
        left: 0;;
    }
}

// 规则组
.select-box {
    width: 100%;
    height: 28px;
    position: relative;
}

.select-title {
    width: 100%;
    height: 100%;
    background: transparent;
    border: 1px solid #1cd7fa;
    box-shadow: 0px 0px 7px #389bf7 inset;
    color: #fff;
    border-radius: 3px;
    box-sizing: border-box;
}

.selected-title {
    color: #ccc;
}

.select-title .selected {
    color: #fff;
}

.select-mask {
    width: 100%;
    min-height: 250px;
    max-height: 500px;
    position: absolute;
    left: 0;
    top: 34px;
    z-index: 999;
    overflow-y: auto;
    background: transparent;
    border: 1px solid #1cd7fa;
    box-shadow: 0px 0px 7px #389bf7 inset;
    color: #fff;
    border-radius: 3px;
    background-color: #043254;
}

.list {
    width: 100%;
    padding: 20px;
    box-sizing: border-box;
}

.list-item {
    cursor: pointer;
    box-sizing: border-box;
    padding-left: 20px;
}

.circle {
    margin-right: 10px;

    i {
        font-size: 12px;
        color: #1cd7fa;
    }
}

.title {
    font-size: 14px;
    color: #1cd7fa;
}

.list-inner {
    box-sizing: border-box;
    background-color: rgba(0, 0, 0, .2);

    > li {
        padding-left: 20px;
    }

    > li:hover {
        background-color: rgba(0, 0, 0, .4);
    }
}

.select-list {
    width: 100%;
    padding: 10px;
    box-sizing: border-box;
    min-height: 100px;
    max-height: 300px;
    overflow-y: auto;
    background-color: rgba(0, 0, 0, .2);
}

.selected-title {
    font-size: 12px;
    color: #fff;
}

.select-list-item > div:nth-child(2) i {
    font-size: 12px;
    margin: 0 4px;
    color: #00c0ff;
    cursor: pointer;
}
</style>
