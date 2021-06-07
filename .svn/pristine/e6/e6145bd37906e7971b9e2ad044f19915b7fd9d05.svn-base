<template>
    <div class="content">
        <div class="header wow">
            <p class="title">
                团队优势
            </p>

            <p class="subtitle">
                —— ADVANTAGE ——
            </p>
        </div>

        <div id="servicelist" class="module-content">
            <div class="wrapper">
                <div class="bx-wrapper" style="max-width: 20150px;">
                    <div class="bx-viewport" aria-live="polite" style="width: 100%; overflow: hidden; position: relative; height: 300px;">
                        <ul class="content_list">
                            <li id="serviceitem_0" class="serviceitem wow" data-wow-delay=".0s">
                                <a href="javascript:;" class="serviceitem_content">

                                    <p class="service_img">
                                        <i class="iconfont icon-gaoxiaojingzhun"></i>
                                    </p>

                                    <div class="service_info">

                                        <p class="title">高效精准   <span>efficient</span></p>

                                        <p class="subtitle hide"></p>

                                        <p class="description">采用智能爬虫技术，内部验证机制不断自测和优化，提高检测准确率；</p>

                                    </div>

                                </a>
                            </li>

                            <li id="serviceitem_1" class="serviceitem wow" data-wow-delay=".1s">
                                <a href="javascript:;" class="serviceitem_content">

                                    <p class="service_img">
                                        <i class="iconfont icon-saomiaoquanmian"></i>
                                    </p>

                                    <div class="service_info">

                                        <p class="title">扫描全面   <span>overall</span></p>

                                        <p class="subtitle hide"></p>

                                        <p class="description">涵盖多种类型资产扫描，支持云内外网站扫描，支持内网扫描；</p>

                                    </div>

                                </a>
                            </li>

                            <li id="serviceitem_2" class="serviceitem wow" data-wow-delay=".2s">
                                <a href="javascript:;" class="serviceitem_content">

                                    <p class="service_img">
                                        <i class="iconfont icon-baogaoquanmian"></i>
                                    </p>

                                    <div class="service_info">

                                        <p class="title">报告全面   <span>cover</span></p>

                                        <p class="subtitle hide"></p>

                                        <p class="description">清晰简洁的扫描报告，多角度分析资产安全风险；多元化数据呈现。</p>

                                    </div>

                                </a>
                            </li>

                            <li id="serviceitem_3" class="serviceitem wow" data-wow-delay=".3s">
                                <a href="javascript:;" class="serviceitem_content">

                                    <p class="service_img">
                                        <i class="iconfont icon-jiandanyiyong"></i>
                                    </p>
                                    <div class="service_info">

                                        <p class="title">简单易用  <span>simple</span></p>

                                        <p class="subtitle hide"></p>

                                        <p class="description">配置简单，一键全网扫描。分类管理资产安全，风险状况更清晰了然。</p>

                                    </div>

                                </a>
                            </li>
                        </ul>
                    </div>
                    <div class="bx-controls">
                        <div class="bx-controls-direction">
                            <a class="bx-prev ad-prev" href="javascript:;"><i class="el-icon-back"></i></a>
                            <a class="bx-next ad-next" href="javascript:;"><i class="el-icon-right"></i></a>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div class="clear"></div>
    </div>
</template>

<script>
export default {
    name: 'Advantage',
    data() {
        return {

        }
    },
    mounted() {
        this.$nextTick(() => {
            // eslint-disable-next-line no-undef
            $('.content_list').slick({
                slidesToShow: 4,
                autoplay: false,
                dots: false,
                infinite: false,
                slidesToScroll: 4,
                // eslint-disable-next-line no-undef
                prevArrow: $('.ad-prev'),
                // eslint-disable-next-line no-undef
                nextArrow: $('.ad-next')
            })
        })
    },
    methods: {

    }
}
</script>

<style lang="scss" scoped>
@import '@/assets/css/style.scss';
.content {
    width: 100%;
    height: 550px;
}

#servicelist {
    width: 1160px;
    margin: 0 auto;
    >.wrapper {
        width: 100%;
    }
}
#servicelist .serviceitem {
    width: 240px!important;
    height: 300px;
    margin: 0px 25px;
    float: left;
    list-style: none;
    position: relative;
    visibility: visible;
    animation-delay: 0s;
    animation-name: fadeInUp;
}
#servicelist .serviceitem .service_img {
    position: relative;
    display: block;
    overflow: hidden;
    text-align: center;
}
#servicelist .serviceitem .service_img i{
    font-size:100px;
    color:#919191;
}
#servicelist .serviceitem a {
    display: block;
    width: 100%;
    height: 100%;
}
.serviceitem  a.details {
    border: #dfdfdf 1px solid;
    background: rgba(255, 255, 255, 0);
    width: 360px;
    height: 58px;
    margin: 40px auto 50px;
    line-height: 58px;
    font-size: 20px;
    color: #838383;
    text-indent: 150px;
    border-radius: 30px;
    transition: all ease-out 0.3s;
    display: none;
}
#servicelist .serviceitem div {
    text-align: left;
    margin-top: 15px;
}

#servicelist .serviceitem div p.title {
    color: #595959;
    font-size: 16px;
    height: 40px;
    line-height: 40px;
    border-bottom: 1px solid #E1E1E1;
    transition: all ease-out 0.2s;
    span{
        font-family: MicrosoftYaHei;
        font-size: 16px;
        color: #595959;
        opacity: 0.5;
    }
}

#servicelist .serviceitem div div.description,
#servicelist .serviceitem div p.description {
    color: #848484;
    font-size: 13px;
    line-height: 24px;
    height: 50px;
    overflow: hidden;
    width: 100%;
}

#servicelist .serviceitem:hover .title {
    color: #838383;
}

#servicelist .serviceitem div p.title::before {
    position: absolute;
    content: "";
    width: 10px;
    height: 1px;
    background-color: #3C3C3C;
    margin-top: 46px;
    transition: all 0.6s cubic-bezier(0.215, 0.61, 0.355, 1) 0s;
}

#servicelist .serviceitem:hover div p.title::before {
    width: 100%;
}
#servicelist .serviceitem div p.title {
    height: 46px;
    line-height: 46px;
}
#mservice .content .header {
    padding-top: 80px;
    padding-bottom: 60px;
}
#servicelist .serviceitem:hover .title {
    color: #272727;
}
#servicelist .serviceitem div {
    text-align: left;
}

.content_list:after {
    content: "";
    display: block;
    clear: both;
}
.bx-wrapper ul li {
    height:300px;
}
.bx-wrapper .bx-controls-direction a {
    position: absolute;
    margin-top: -20px;
    outline: 0;
    width: 40px;
    height: 40px;
    z-index: 2;
    transition: all ease-out 0.3s;
    cursor: pointer;
}
.bx-wrapper .bx-controls-direction a i {
    width: 40px;
    height: 20px;
    display: block;
    color: transparent;
    transition: all 0.5s cubic-bezier(0.215, 0.61, 0.355, 1) 0s;
}
.bx-wrapper .bx-controls-direction a.bx-prev{
    left: -58px;
    top: 102px;
}
.bx-wrapper .bx-controls-direction a.bx-next{
    right: -58px;
    top: 102px;
}
.bx-wrapper .bx-controls-direction a.bx-prev i {
    background: url(../../../assets/img/jiantou.png)no-repeat 0px -50px;
}
.bx-wrapper .bx-controls-direction a.bx-next i {
    background: url(../../../assets/img/jiantou.png)no-repeat -37px -50px;
}
.bx-wrapper .bx-controls-direction a.bx-prev:hover i {
    background: url(../../../assets/img/jiantou.png)no-repeat 0px -70px;
}
.bx-wrapper .bx-controls-direction a.bx-next:hover i {
    background: url(../../../assets/img/jiantou.png)no-repeat -37px -70px;
}
.bx-wrapper .bx-next {
    right: -50px;
}

.bx-wrapper .bx-prev {
    left: -50px;
}
</style>
