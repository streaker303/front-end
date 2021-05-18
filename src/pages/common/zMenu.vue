<template>
    <div>
        <template v-for="menu in menus">
            <el-submenu
                v-if="menu.menus && menu.menus.length >= 1"
                :key="menu.modular"
                :index="menu.url"
                popper-class="nav-shrink"
            >
                <template slot="title">
                    <i :class="menu.iconName" />
                    <span v-show="!$store.state.common.isCollapse" slot="title">{{
                        menu.resourceName
                    }}</span>
                </template>
                <el-menu-item-group>
                    <span slot="title">{{ menu.resourceName }}</span>
                </el-menu-item-group>
                <z-menu :menus="menu.menus" />
            </el-submenu>
            <el-menu-item
                v-else
                :key="menu.modular"
                :index="menu.url"
                @click="handleRouter(menu)"
            >
                <i :class="menu.iconName" />
                <span slot="title">{{ menu.resourceName }}</span>
            </el-menu-item>
        </template>
    </div>
</template>
<script>
export default {
    name: 'ZMenu', // 至关重要，就靠这个名字递归了
    props: {
        menus: {
            type: Array,
            default: function() {
                return []
            },
            required: false
        }
    },
    methods: {
        handleRouter(menu) {
            // 跳转路由
            this.$router.push(menu.url)
            // this.$setsessionStorage('currentPath', menu.url)
        }
    }
}
</script>
