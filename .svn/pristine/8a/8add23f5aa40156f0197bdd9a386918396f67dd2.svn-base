<template>
    <div class="btn_box add" @click="searchBtn">
        <div class="ub ub-ac ub-pc btn_inner_box">
            <i v-if="icon!=''" :class="icon" />
            <span>{{ title }}</span>
        </div>
    </div>
</template>

<script>
export default {
    name: 'AddBtn',
    props: {
        title: {
            type: String,
            default: ''
        },
        icon: {
            type: String,
            default: ''
        }
    },
    data() {
        return {}
    },
    mounted() {

    },
    methods: {
        searchBtn() {
            this.$emit('click')
        }
    }
}
</script>

<style lang="scss" scoped>
.ub {
    display: -webkit-box!important;
    display: -moz-box!important;
    display: -ms-flexbox!important;
    display: -o-box!important;
    display: box!important;
    position: relative;
}
.ub-ac {
    -webkit-box-align: center;
    -moz-box-align: center;
    -ms-flex-align: center;
    -o-box-align: center;
    box-align: center;
}
.btn_box{
    min-width:70px;
    width:auto;
    display: inline-block;
    padding-left: 8px;
    height:30px;
    line-height: 30px;
    opacity: 0.9;

    background-image: url(./images/addBg.png);
    background-repeat: no-repeat;
    background-position: right 0;
    background-size:100% 30px;
}
.btn_box:hover {
    opacity: 1;
}
.btn_inner_box{
    cursor:pointer;
    height:30px;
    i{
        font-size:12px;
        color:#fff;
        transition: all .3s;
        margin-right: 5px;
    }
    span{
        margin:0 10px 0 0;
        font-size:12px;
        color:#fff;
        transition: all .3s;
    }
}
</style>
