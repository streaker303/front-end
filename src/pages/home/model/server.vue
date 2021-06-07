<template>
    <div class="content ub-img1">
        <div class="header wow">
            <p class="title">
                安全服务
            </p>

            <p class="subtitle">
                最专业的品质服务，为您创造更高价值
            </p>
        </div>
        <div class="sertver">
            <div class="sertver-left">
                <div class="img-wrapper fadeInUp wow" data-wow-delay=".0s">
                    <img src="../../../assets/img/server/01Security_services.png" alt="">
                </div>
                <div class="ub ub-ac w100 ub-pj title fadeInUp wow" data-wow-delay=".1s">
                    <div>我是服务的名称我是服务的名称我是服务的名称我是服务的名称我是服务的名称我是服务的名称</div>
                    <div><i class="iconfont icon-gengduojiantou"></i></div>
                </div>
                <p class=" fadeInUp wow" data-wow-delay=".2s">
                    环体及相关产品的研发、生产和销售，已形成年产有机硅单体80kt/a，并具有全生命周期生活体系 ...
                </p>
            </div>
            <div class="sertver-right">
                <div class="right-item  fadeInUp wow" data-wow-delay=".0s">
                    <div class="ub ub-ac w100 ub-pj title">
                        <div>我是服务的名称我是服务的名称我是服务的名称我是服务的名称我是服务的名称我是服务的名称</div>
                        <div><i class="iconfont icon-gengduojiantou"></i></div>
                    </div>
                    <p>环体及相关产品的研发、生产和销售，已形成年产有机硅单体80kt/a，并具有全生命周期生活体系 ...</p>
                </div>
                <div class="right-item fadeInUp wow" data-wow-delay=".1s">
                    <div class="ub ub-ac w100 ub-pj title">
                        <div>我是服务的名称我是服务的名称我是服务的名称我是服务的名称我是服务的名称我是服务的名称</div>
                        <div><i class="iconfont icon-gengduojiantou"></i></div>
                    </div>
                    <p>环体及相关产品的研发、生产和销售，已形成年产有机硅单体80kt/a，并具有全生命周期生活体系 ...</p>
                </div>
                <div class="right-item fadeInUp wow" data-wow-delay=".2s">
                    <div class="ub ub-ac w100 ub-pj title">
                        <div>我是服务的名称我是服务的名称我是服务的名称我是服务的名称我是服务的名称我是服务的名称</div>
                        <div><i class="iconfont icon-gengduojiantou"></i></div>
                    </div>
                    <p>环体及相关产品的研发、生产和销售，已形成年产有机硅单体80kt/a，并具有全生命周期生活体系 ...</p>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'Server',
    data() {
        return {

        }
    },
    mounted() {

    },
    methods: {

    }
}
</script>

<style lang="scss" scoped>
@import '@/assets/css/style.scss';
.content {
    width: 100%;
    height:784px;
    background-color: #f8f8f8;
    background-image: url('../../../assets/img/server/AQservice_module-bg.jpg');

}
.content .header {
    width: 1220px;
    padding-top: 100px;
    padding-bottom: 87px;
}
.sertver{
    width:1220px;
    margin: 0 auto;
    overflow: hidden;
}
.sertver-left{
    width:620px;
    float:left;
    .title{
        cursor: pointer;
        margin-top: 22px;
        >div:nth-child(1){
            width:50%;
            font-family: MicrosoftYaHei;
            font-size: 18px;
            letter-spacing: 2px;
            color: #333333;
            overflow: hidden;
            white-space: nowrap;
            text-overflow: ellipsis;
            transition: all ease-out .3s;
        }
        >div:nth-child(2){
            transition: all ease-out .3s;
            cursor: pointer;
            margin-right: 10px;
            i{
                font-family: MicrosoftYaHei;
                font-size: 22px;
                letter-spacing: 2px;
                color: #333333;
            }
        }
    }
    p{
        margin-top: 25px;
        font-family: MicrosoftYaHei;
        font-size: 14px;
        line-height: 19px;
        color: #999999;
    }
}
.sertver-right{
    width:520px;
    float:right;
    .right-item{
        padding:15px 20px;
        border-top:1px dashed #e6e6e6;
        .title{
            cursor: pointer;
            margin-top: 6px;
            >div:nth-child(1){
                width:50%;
                font-family: MicrosoftYaHei;
                font-size: 18px;
                letter-spacing: 2px;
                color: #333333;
                overflow: hidden;
                white-space: nowrap;
                text-overflow: ellipsis;
                transition: all ease-out .3s;
            }
            >div:nth-child(2){
                cursor: pointer;
                margin-right: 10px;
                transition: all ease-out .3s;
                i{
                    font-family: MicrosoftYaHei;
                    font-size: 22px;
                    letter-spacing: 2px;
                    color: #333333;
                }
            }
        }
        p{
            margin-top: 10px;
            font-family: MicrosoftYaHei;
            font-size: 14px;
            line-height: 19px;
            color: #999999;
        }
    }
}
.sertver-left .img-wrapper{
    width:100%;
    height:200px;
    img{
        width:100%;
    }

}
.sertver-left .title:hover,.sertver-right .title:hover{
    >div:nth-child(1){
        color: $baseFontColor;
    }
    >div:nth-child(2){
        margin-right: 0px;
        i{

            color: $baseFontColor;
        }
    }
}
</style>
