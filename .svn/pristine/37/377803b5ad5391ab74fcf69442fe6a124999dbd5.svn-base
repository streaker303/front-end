<template>
    <div class="left-bar">
        <div class="menu-content" style="height: 28px;position: relative" />
        <div class="ub operation" :class="{'black-theme':this.$store.state.common.currentTheme==='black-theme'}">
            <div class="iconfont icon-charubianliang operation-icon" @click="fold" />
            <div v-if="!$store.state.common.isCollapse">
                折叠菜单
            </div>
        </div>
        <el-scrollbar style="height: 100%" wrap-class="wap-list">
            <!-- <div class="w100 menu"> -->
            <el-menu :collapse="isCollapse" class="menu-item" :class="{'black-theme':this.$store.state.common.currentTheme==='black-theme'}" text-color="#496573" :unique-opened="true" :default-active="routerPath" router active-text-color="#409EFF">
                <z-menu :menus="menus" />
            </el-menu>
            <!-- </div> -->
        </el-scrollbar>
    </div>
</template>

<script>
import ZMenu from './zMenu.vue'
export default {
    name: 'LeftBar',
    components: {
        ZMenu
    },
    props: {
        menus: {
            type: Array,
            default: null
        }
    },
    data() {
        return {}
    },
    computed: {
        isCollapse() {
            console.log('111111111111', this.$store.state.common.isCollapse)
            return this.$store.state.common.isCollapse
        },
        routerPath() {
            // console.log('path1111111111111111',this.$route.path)
            return this.$route.meta.guidePath ? this.$route.meta.jumpPath : this.$route.path
        }
    },
    methods: {
        fold() {
            const isCollapse = this.$store.state.common.isCollapse
            this.$store.commit('toggleCollapse', !isCollapse)
        }
    }
}
</script>

<style lang="scss" scoped>
.left-bar {
    height: 88%;
    .operation {
        z-index: 9999;
        padding: 10px 0 10px 20px;
        &.black-theme{
            padding-left: 40px;
        }
        color: #9fbbc7;
        font-size: 12px;
        line-height: 12px;
        margin-bottom: 10px;
        .iconfont {
            font-size: 12px;
        }
        .operation-icon {
            margin-right: 10px;
            &:hover {
                cursor: pointer;
            }
        }
    }
}

.menu-item:not(.el-menu--collapse) {
    width: 178px;
}
.menu {
    padding-right: 20px;
    margin-top: 25px;
}
.menu::before {
    width: 220px;
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    opacity: 0.2;
    background-image: url('../../assets/img/leftBg.png');
    background-position: 0 0;
    background-repeat: no-repeat;
    background-size: 100% 100%;
    // z-index: -1;
}
.menu-item {
    border: 0;
    background: transparent;

    &.black-theme{
        padding: 0 20px;
    }
    >>> .el-menu-item {
        margin: 14px auto;
        height: 44px;
        line-height: 44px;
        cursor: pointer;
        background: url(../../assets/img/menu_bg.png) no-repeat;
        background-size: 100% 100%;
        span {
            font-size: 14px;
            color: #86939e;
        }
        i {
            width: 16px;
            margin-right: 10px;
            color: #6492b4;
        }
        &:hover {
            span {
                color: #78ddff;
            }
            i {
                color: #78ddff;
            }
        }
    }
    >>> .el-submenu {
        .el-menu {
            .el-menu-item {
                margin: 14px auto;
                height: 44px;
                line-height: 44px;
                cursor: pointer;
                background: url(../../assets/img/menu_bg.png) no-repeat;
                background-size: 100% 100%;
                span {
                    font-size: 12px;
                    color: #86939e;
                }
                i {
                    width: 16px;
                    margin-right: 10px;
                    color: #6492b4;
                }
                &:hover {
                    span {
                        color: #78ddff;
                    }
                    i {
                        color: #78ddff;
                    }
                }
            }
            >>> .is-active {
                background-image: url(../../assets/img/menu_active_bg.png);
                span {
                    color: #78ddff;
                }
                i {
                    color: #78ddff;
                }
            }
        }
    }
    >>> .el-submenu {
        .el-menu {
            .el-menu-item.is-active {
                background-image: url(../../assets/img/menu_active_bg.png);
                span {
                    color: #78ddff;
                }
                i {
                    color: #78ddff;
                }
            }
        }
    }
    >>> .el-submenu {
        background: url(../../assets/img/menu_bg.png) no-repeat;
        background-size: 100% 44px;
        margin-bottom: 14px;
        .el-submenu__title {
            height: 44px;
            line-height: 44px;
            span {
                color: #86939e;
            }
            > i {
                margin-right: 10px;
                color: #6492b4;
            }
            .el-icon-arrow-down {
                margin-right: 0;
            }
            &:hover {
                background: transparent;
                span {
                    color: #78ddff;
                }
                i {
                    color: #78ddff;
                }
            }
        }
        .el-menu,
        .el-menu.el-menu--inline {
            background: transparent;
        }
        .el-menu.el-menu--inline {
            .el-menu-item {
                background: none !important;
                margin: 0;
                i {
                    display: none;
                }
                span {
                    padding-left: 20px;
                }
                &.is-active {
                    background: none;
                }
            }
        }
        .el-menu {
            margin-top: 14px;
        }
    }
    >>> .el-submenu.is-active > .el-submenu__title {
        background: url(../../assets/img/menu_active_bg.png) center no-repeat;
        background-size: 100% 100%;
        // text-align: center;
        span {
            color: #78ddff;
        }
    }
}

.el-menu--collapse {
    >>> .el-submenu {
        .el-submenu__title {
            text-align: center;
            .el-submenu__icon-arrow {
                display: none;
            }
        }
    }
}
</style>
<style lang="scss">
.left-bar {
    .el-menu-item-group__title {
        display: none;
    }
    .el-menu--vertical {
        .el-menu-item-group__title {
            display: inline-block;
        }
    }
    .el-scrollbar__bar.is-vertical > div {
        background: #01eaffa8;
    }
    .el-scrollbar__bar.is-vertical {
        width: 4px;
    }
    .el-scrollbar__bar.is-horizontal {
        height: 0px;
    }
}
.nav-shrink {
    .el-menu {
        font-size: 12px;
        background-color: rgba(0, 0, 0, 0.9);
        padding: 0;
        .el-menu-item-group__title {
            background: url(../../assets/img/menu_active_bg.png) center no-repeat;
            background-size: 100% 100%;
            // text-align: center;
            height: 23px;
            padding-top: 14px;
            span {
                color: #78ddff;
                font-size: 14px;
            }
        }
    }
    .el-menu-item.is-active {
        color: #00e9ff !important;
    }
    .el-menu-item {
        font-size: 12px;
        color: #909399 !important;
    }
    .el-menu-item:focus,
    .el-menu-item:hover {
        color: #00e9ff !important;
        background-color: rgba(0, 0, 0, 0) !important;
    }
}
.wap-list {
    overflow-x: hidden !important;
}
</style>
