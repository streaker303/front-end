<template>
    <div class="w100 main home">
        <div class="w100">
            <TopNav />
        </div>
        <div class="ub w100 second-view-wrapper">
            <div class="home-page left">
                <LeftBar :menus="menuData" />
            </div>
            <div class="ub ub-f1 second-box">
                <router-view class="second-view" />
            </div>
        </div>
    </div>
</template>

<script>
import { get_menu, get_user_info } from '../../server/common'
import TopNav from './TopNav'
import LeftBar from './LeftBar'

export default {
    name: 'Home',
    components: {
        TopNav,
        LeftBar
    },
    data() {
        return {
            logoImg: require('../../assets/img/login_title_bg.png'),
            // TopNav props
            menuData: [],
            userInfo: {
                cnName: ''
            }
        }
    },

    created() {
        const userInfo = this.$getsessionStorage('userInfo')
        if (userInfo !== '') {
            this.userInfo = userInfo
        } else {
            get_user_info({})
                .then((res) => {
                    const userInfo = {
                        cnName: res.info.chineseName,
                        id: res.info.id,
                        type: res.info.roleId
                    }
                    this.$setsessionStorage('userInfo', userInfo)
                    this.userInfo = userInfo
                })
                .catch((error) => {
                    console.log('error', error)
                })
        }

        this.get_data()
    },
    methods: {
        get_data() {
            this.menuData = []
            const datamenu = {
                queryData: {},
                paramsData: {}
            }
            get_menu(datamenu)
                .then((res) => {
                    const data = res.map((item, index) => {
                        item.url = 'menu-' + index
                        return item
                    })
                    this.$setsessionStorage('menu', data)
                    if (data.length === 0) {
                        this.$message({
                            message: '该用户无任何权限',
                            type: 'warning'
                        })
                        return
                    }
                    if (data.length > 0) {
                        this.menuData = data
                        this.$router.replace('/home/report_form_task')
                        return
                        //   console.log(res.data, '1111111111111111111')
                        //   if (this.$getsessionStorage('currentPath')) {
                        //     /* 规则详情页刷新返回*/
                        //     if (this.$getsessionStorage('currentPath').includes('rule_new_rules_type')) {
                        //       this.$router.replace('/home/rule_new_rules_type')
                        //     } else {
                        //       return
                        //     }
                        //   } else {
                        //     this.$router.replace({
                        //       path: res.data[0].menus[0].url
                        //     })
                        //   }
                    }
                })
                .catch((error) => {
                    console.log(333333)
                    console.log('error', error)
                })
        }
    }
}
</script>

<style lang="scss" scoped>
.left {
    height: 100%;
    border: 1px solid #4bacf9;
    box-shadow: 0 0 16px #4bacf9 inset;
    background-color: #010205;
    width: auto;
}

.main {
    height: 100%;
    overflow: hidden;
}

.second-view-wrapper {
    height: calc(100vh - 80px);
}

.second-box {
    margin-left: 20px;
}
</style>
