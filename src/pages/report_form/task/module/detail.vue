<template>
    <el-dialog
        :visible.sync="detailDialog"
        title="执行结果"
        width="900px"
        custom-class="attendance-dialog"
    >
        <div style="width: 96%; margin: 0 auto">
            <el-table
                ref="multipleTable"
                v-loading="loading"
                class="bigTable"
                :data="tableData"
                border
                stripe
                tooltip-effect="dark"
            >
                <el-table-column align="center" type="index" width="50" :index="indexMethod" label="序号" />
                <el-table-column prop="taskName" label="报表名称" show-overflow-tooltip />
                <el-table-column align="center" label="数据范围" show-overflow-tooltip>
                    <template slot-scope="scope">
                        <div class="ub ub-f1 line1">
                            {{ scope.row.startTime }}~{{ scope.row.endTime }}
                        </div>
                    </template>
                </el-table-column>
                <el-table-column align="center" prop="createTime" label="执行时间" width="170" />
                <el-table-column align="center" label="操作" width="190">
                    <template slot-scope="scope">
                        <div class="option">
                            <a
                                target="_blank"
                                :href="
                                    'report_form/manage/reportTask/view?id=' + scope.row.id
                                "
                            >
                                <el-tooltip class="item" effect="dark" content="预览" placement="top">
                                    <i style="font-size: 18px; color: #00c0ff; cursor: pointer" class="iconfont icon-chakantubiao" />
                                </el-tooltip>
                            </a>
                            <a
                                :href="
                                    'report_form/manage/reportTask/download?id=' +
                                        scope.row.id +
                                        '&type=html'
                                "
                                download
                            >
                                <el-tooltip class="item" effect="dark" content="HTML" placement="top">
                                    <i style="font-size: 18px; color: #3cff00; cursor: pointer" class="iconfont icon-HTMLtubiao" />
                                </el-tooltip>
                            </a>
                            <a
                                :href="
                                    'report_form/manage/reportTask/download?id=' +
                                        scope.row.id +
                                        '&type=word'
                                "
                            >
                                <el-tooltip class="item" effect="dark" content="DOC" placement="top">
                                    <i style="font-size: 18px; color: #0072ff; cursor: pointer" class="iconfont icon-DOCtubiao" />
                                </el-tooltip>
                            </a>
                            <a
                                :href="
                                    'report_form/manage/reportTask/download?id=' +
                                        scope.row.id +
                                        '&type=image'
                                "
                            >
                                <el-tooltip class="item" effect="dark" content="PNG" placement="top">
                                    <i style="font-size: 18px; color: #00ffd8; cursor: pointer" class="iconfont icon-PNGtubiao" />
                                </el-tooltip>
                            </a>
                            <a
                                :href="
                                    'report_form/manage/reportTask/download?id=' +
                                        scope.row.id +
                                        '&type=pdf'
                                "
                            >
                                <el-tooltip class="item" effect="dark" content="PDF" placement="top">
                                    <i style="font-size: 18px; color: #ff0af6; cursor: pointer" class="iconfont icon-PDFtubiao" />
                                </el-tooltip>
                            </a>
                            <a
                                :href="
                                    'report_form/manage/reportTask/download?id=' +
                                        scope.row.id +
                                        '&type=excel'
                                "
                            >
                                <el-tooltip class="item" effect="dark" content="XSL" placement="top">
                                    <i style="font-size: 18px; color: #ffcc00; cursor: pointer" class="iconfont icon-XSLtubiao" />
                                </el-tooltip>
                            </a>
                        </div>
                    </template>
                </el-table-column>
            </el-table>
            <div class="pagination">
                <el-pagination
                    background
                    :current-page="page"
                    :page-sizes="[5,10]"
                    :page-size="size"
                    layout="total, sizes, prev, pager, next"
                    prev-text="上一页"
                    next-text="下一页"
                    :total="total"
                    @size-change="sizeChange"
                    @current-change="pageChange"
                />
            </div>
        </div>
        <span slot="footer" class="dialog-footer">
            <cancelBtn title="取 消" @click="detailDialog = false" />
        </span>
    </el-dialog>
</template>

<script>
import {
    get_task_detail
} from '@/server/report_form/api.js'
import initData from '@/mixins/initData'
export default {
    name: 'Detail',
    mixins: [initData],
    data() {
        return {
            detailDialog: false,
            detailId: '',
            size: 10
        }
    },
    watch: {
        detailDialog: {
            handler(newVal, oldVal) {
                if (!newVal) {
                    this.page = 1
                    this.total = 0
                    this.tableData = []
                }
            }
        }
    },
    methods: {
        indexMethod(index) {
            return (this.page - 1) * this.size + index + 1
        },
        init(id) {
            this.loading = true
            this.tableData = []
            const data = {
                queryData: {
                    page: this.page,
                    pageSize: this.size
                },
                paramsData: {
                    id: id
                }
            }
            get_task_detail(data)
                .then((res) => {
                    console.log(res)
                    this.loading = false
                    this.total = res.totalElements
                    const list = res.content
                    if (list.length > 0) {
                        list.forEach((item) => {
                            const obj = {}
                            obj.id = item.id
                            obj.createTime = item.createTime
                            obj.taskName = item.taskName
                            obj.startTime = item.startTime
                            obj.endTime = item.endTime
                            obj.taskId = item.taskId
                            this.tableData.push(obj)
                        })
                    }
                })
                .catch((error) => {
                    this.loading = false
                    console.log('error' + error)
                })
        },
        pageChange(e) {
            this.page = e
            this.init(this.detailId)
        },
        sizeChange(e) {
            this.size = e
            this.init(this.detailId)
        }
    }
}
</script>
<style lang="scss" scoped>

</style>
