<template>
    <div class="content ub-img1">
        <div ref="statistic" class="ub ub-ac ub-pc statistic">
            <div class="ub ub-f1 ub-pc item fadeInUp wow" data-wow-delay=".0s">
                <div>
                    <div class="num">
                        <countTo :start-val="0" :end-val="endVal1" :duration="3000"></countTo>
                        <sup>年</sup>
                    </div>
                    <div class="text">
                        创建于
                    </div>
                </div>
            </div>
            <div class="line" :class="{'active':lineShow}"></div>
            <div class="ub ub-f1 ub-pc item fadeInUp wow" data-wow-delay=".1s">
                <div>
                    <div class="num">
                        <countTo :start-val="0" :end-val="endVal2" :duration="3000"></countTo>
                        <sup>+</sup>
                    </div>
                    <div class="text">
                        服务项目
                    </div>
                </div>
            </div>
            <div class="line" :class="{'active':lineShow}"></div>
            <div class="ub ub-f1 ub-pc item fadeInUp wow" data-wow-delay=".2s">
                <div>
                    <div class="num">
                        <countTo :start-val="0" :end-val="endVal3" :duration="3000"></countTo>
                        <sup>+</sup>
                    </div>
                    <div class="text">
                        覆盖城市
                    </div>
                </div>
            </div>
            <div class="line" :class="{'active':lineShow}"></div>
            <div class="ub ub-f1 ub-pc item fadeInUp wow" data-wow-delay=".3s">
                <div>
                    <div class="num">
                        <countTo :start-val="0" :end-val="endVal4" :duration="3000"></countTo>
                        <sup>+</sup>
                    </div>
                    <div class="text">
                        影响力
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import countTo from 'vue-count-to'
export default {
    name: 'Statistic',
    components: { countTo },
    data() {
        return {
            lineShow: false,
            endVal1: 0,
            endVal2: 0,
            endVal3: 0,
            endVal4: 0,
            interval: null
        }
    },
    mounted() {
        this.$nextTick(() => {
            this.handelScroll()
            window.addEventListener('scroll', this.handelScroll)
        })
    },
    beforeDestroy() {
        window.removeEventListener('scroll', this.handelScroll)
    },
    methods: {
        handelScroll() {
            const { top } = this.$refs.statistic.getBoundingClientRect()
            const h = document.documentElement.clientHeight || document.body.clientHeight
            if (top < h - 200) { // 减去200刚好，否则刚露头就执行
                this.endVal1 = 2000
                this.endVal2 = 1863
                this.endVal3 = 123
                this.endVal4 = 4087
                setTimeout(() => {
                    this.lineShow = true
                }, 1000)
            }
        }
    }
}
</script>

<style lang="scss" scoped>
@import '@/assets/css/style.scss';
.content {
    width: 100%;
    height:420px;
    background-color: #000;
    background-image: url('../../../assets/img/data-bg.jpg');
}
.statistic{
    width:1300px;
    height:100%;
    margin: 0 auto;
    overflow: hidden;
    .line{
        width:1px;
        height:66px;
        background-color: rgba(255,255,255,.6);
        transition: all ease-out .3s;
        opacity: 0;
    }
    .line.active{
        opacity: 1;
    }
}
.item{
    width:25%;
    .num{
        span{
            font-family: MicrosoftYaHei;
            font-size: 68px;
            line-height: 68px;
            color: #ffffff;
            vertical-align: top;
        }
        sup{
            vertical-align: top;
            font-size: 18px;
            line-height: 18px;
            height:18px;
            color: #ffffff;
        }
    }
    .text{
        font-family: MicrosoftYaHei;
        font-size: 20px;
        line-height: 20px;
        color: #ffffff;
        margin-top:10px;
    }
}
</style>
