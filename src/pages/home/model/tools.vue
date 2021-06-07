<template>
    <div class="content">
        <div class="header wow">
            <p class="title">
                安全工具
            </p>

            <p class="subtitle">
                最专业的品质服务，为您创造更高价值
            </p>
        </div>

        <div id="servicelist" class="module-content">
            <div class="wrapper">
                <div class="bx-wrapper" style="max-width: 20150px;">
                    <div class="bx-viewport" aria-live="polite" style="width: 100%; overflow: hidden; position: relative; height: 365px;">
                        <ul class="tools">
                            <li v-for="(item,index) in list" :key="index" class="projectitem wow" :data-wow-delay="'0.'+index+'s'">
                                <a href="javascript:;">
                                    <div>
                                        <div class="project_img"><img :src="item.url" width="650" height="385" /></div>
                                        <div class="project_info">
                                            <div>
                                                <div class="free">
                                                    <div><i class="el-icon-location-outline"></i></div>
                                                    <div @click="toTools(item)">
                                                        免费使用
                                                    </div>
                                                </div>
                                                <p class="title">{{ item.name }}</p>
                                                <p class="subtitle">{{ item.desc }}</p>
                                            </div>
                                        </div>
                                    </div>
                                </a>
                            </li>
                        </ul>
                    </div>
                    <div class="bx-controls">
                        <div class="bx-controls-direction">
                            <a class="bx-prev tools-prev" href="javascript:;"><i class="el-icon-back"></i></a>
                            <a class="bx-next tools-next" href="javascript:;"><i class="el-icon-right"></i></a>
                        </div>
                    </div>
                </div>
            </div>
            <a v-if="list.length>3" href="javascript:;" class="more wow" style="visibility: visible;">MORE<i class="fa fa-angle-right"></i></a>
        </div>

        <div class="clear"></div>
    </div>
</template>

<script>
export default {
    name: 'Tools',
    data() {
        return {
            list: [
                {
                    id: 1,
                    name: '在线POC',
                    to: '/home/pocPage',
                    url: require('../../../assets/img/tools/01Security-tools.png'),
                    desc: '在线POC'
                },
                {
                    id: 1,
                    name: '在线POC',
                    to: '/home/pocPage',
                    url: require('../../../assets/img/tools/02Security-tools.png'),
                    desc: '在线POC'
                },
                {
                    id: 1,
                    name: '在线POC',
                    to: '/home/pocPage',
                    url: require('../../../assets/img/tools/03Security-tools.png'),
                    desc: '在线POC'
                }
            ]
        }
    },
    mounted() {
        this.$nextTick(() => {
            // eslint-disable-next-line no-undef
            $('.tools').slick({
                slidesToShow: 3,
                autoplay: false,
                dots: false,
                infinite: false,
                slidesToScroll: 3,
                // eslint-disable-next-line no-undef
                prevArrow: $('.tools-prev'),
                // eslint-disable-next-line no-undef
                nextArrow: $('.tools-next')
            })
        })
    },
    methods: {
        toTools(item) {
            this.$router.push({
                path: item.to
            })
        }
    }
}
</script>

<style lang="scss" scoped>
@import '@/assets/css/style.scss';
.content {
    width: 100%;
    height: 740px;
    background-color: #fff;
}
.content .header {
    width: 1220px;
    padding-top: 80px;
    padding-bottom: 60px;
}
#servicelist {
    width: 1220px;
    margin: 0 auto;
    >.wrapper {
        width: 100%;
    }
}
#servicelist a.more {
    border: #dfdfdf 1px solid;
    display: block;
    text-indent: 150px;
    height: 40px;
    line-height: 40px;
    width: 60px;
    margin: 40px auto 0px;
    animation-name: fadeInUp;
    animation-delay: 0.5s;
    transition: all 0.5s cubic-bezier(0.215, 0.61, 0.355, 1) 0s;
    border-radius: 0px;
    color: transparent;
    font-size: 0px;
    cursor: pointer;
    background: url(../../../assets/img/icon.png)no-repeat 0px -9px;
}
#servicelist a.more:hover {
    border: 1px solid #666;
    background: url(../../../assets/img/icon.png)no-repeat 0px -53px;
}
.projectitem {
    float: left;
    position: relative;
    transition: all ease-out .3s;
    width: 380px!important;
    height: 340px;
    overflow: hidden;
    margin: 0 20px 25px;
    cursor: pointer;
    // border-radius: 10px;
    animation-name: fadeInUp;
}

.projectitem:hover {
    box-shadow: 0px 7px 17px #dedede;
}

.projectitem:nth-child(3n) {
    margin-right: 0px!important;
}

.projectitem a:hover .project_info {
    background: none;
    cursor: pointer;
}
.projectitem a {
    display: block;
    overflow: hidden;
}
.projectitem .project_img {
    position: relative;
    display: block;
    overflow: hidden;
    padding-top: 60%;
}
.projectitem a img {
    vertical-align: top;
    width: 100%;
    transition: all 0.6s cubic-bezier(0.215, 0.61, 0.355, 1) 0s;
    perspective: 150;
    -webkit-perspective: 150;
    height: auto;
    position: absolute;
    top: 0;
    left: 0;
    overflow: hidden;

}

.projectitem a:hover img {
    transform: scale(1.2, 1.2);

}

.projectitem a .project_info {
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0);
    position: absolute;
    left: 0;
    top: 0;
    transition: all ease-out 0.3s;
    border-radius: 0px;
}
.projectitem a .project_info>div{
    position: relative;
}
.projectitem a .project_info>div .free{
    transition: all 0.3s cubic-bezier(0.215, 0.61, 0.355, 1) 0s;
    position: absolute;
    width:144px;
    font-size:0;
    left:50%;
    top:20px;
    >div:nth-child(1){
        display: inline-block;
        vertical-align: middle;
        width:30px;
        height:30px;
        border-radius:100%;
        line-height: 30px;
        text-align: center;
        i{
            margin-top: 3px;
            font-size:24px;
            color:#999999;
        }
    }
    >div:nth-child(2){
        margin-left:10px;
        vertical-align: middle;
        display: inline-block;
        width:100px;
        height:30px;
        line-height: 30px;
        text-align: center;
        font-size:14px;
        color:#999999;
        border-radius: 15px;
        border:1px solid #999999;
    }
}
.projectitem:hover a .project_info>div .free{
    top: -26px;
    >div:nth-child(1){
        background-color:$baseFontColor;
        i{
            color:#fff;
        }
    }
    >div:nth-child(2){
        color:#fff;
        background-color:$baseFontColor;
        border:1px solid $baseFontColor;
    }
}
.projectitem a .project_info p {
    text-align: center;
    color: #fff;
    padding: 0 20px;
}

.projectitem a .project_info>div {
    position: relative;
    margin-top: -15px;
    height: 110px;
    transition: all 0.6s cubic-bezier(0.215, 0.61, 0.355, 1) 0s;
    position: absolute;
    bottom: 0px;
    top: 245px;
    width: 100%;
    background: #fff;
}

.projectitem a .project_info  p.title {
    width:40%;
    margin-top: 10px;
    color: #3C3C3C;
    font-size: 16px;
    transition: all ease-out 0.3s;
    font-size: 16px;
    color: #3C3C3C;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
    height: 32px;
    line-height: 32px;
    text-align: left;
    margin: 0px;
    padding-top: 20px;
}
.projectitem a .project_info p.subtitle {
    display: block;
    transition: all ease-out .3s;
    -webkit-transform-origin: center bottom;
    -moz-transform-origin: center bottom;
    transform-origin: center bottom;
    color: rgba(0, 0, 0, 0.4);
    width: 75%;
    height: 40px;
    line-height: 40px;
    overflow: hidden;
    font-size: 13px;
    text-align: left;
    padding: 0px;
    margin: 0px;
    margin-top:20px;
    margin-left: 20px;
    line-height: 24px;
    white-space: nowrap;
}
.content_list:after {
    content: "";
    display: block;
    clear: both;
}

.bx-wrapper ul li {
    height:340px;
}
.bx-wrapper .bx-controls-direction a {
    position: absolute;
    outline: 0;
    width: 40px;
    height: 30px;
    bottom: -82px;
    margin-top: 0;
    top: auto;
    background-color: transparent;
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
    left: 50%;
    margin-left: -100px;
}
.bx-wrapper .bx-controls-direction a.bx-next{
    right: 50%;
    margin-right: -100px;
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
