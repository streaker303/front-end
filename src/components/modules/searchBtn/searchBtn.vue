<template>
    <div class="btn_box" :class="{'isAggary':bgc==='no_aggary'}" @click="searchBtn">
        <div class="btn_inner_box">
            <p>{{ title }}</p>
        </div>
    </div>
</template>

<script>
export default {
    name: 'SearchBtn',
    props: {
        title: {
            type: String,
            default: ''
        },
        bgc: {
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
    width:80px;
    display: inline-block;
    height:30px;
    line-height: 30px;

    background-image: url(./images/searchBg.png);
    background-repeat: no-repeat;
    background-position: right 0;
    background-size:100% 30px;
}
.btn_box.isAggary{
	background-image: url(./images/no_aggary.png);
}
.btn_inner_box{
    cursor:pointer;
    height:30px;

    p{
        width: 80px;
        text-align: center;
        font-size:12px;
        color:#fff;
    }
}
</style>
