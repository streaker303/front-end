<template>
    <div>
        <div class="ub ub-ver ub-pc shares">
            <div class="shares-item">
                <div><i class="iconfont icon-zixun"></i></div>
                <div>专家咨询</div>
            </div>
            <div class="shares-item">
                <div><i class="iconfont icon-liuyan"></i></div>
                <div>留言</div>
            </div>
            <div class="shares-item">
                <div><i class="iconfont icon-bangzhu"></i></div>
                <div>帮助</div>
            </div>
            <div v-if="visible" class="ub ub-pc ub-ver backTop" @click="backToTop">
                <div><i class="el-icon-arrow-up"></i></div>
                <div>返回顶部</div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'BackTop',
    props: {
        visibilityHeight: {
            type: Number,
            default: 400
        },
        backPosition: {
            type: Number,
            default: 0
        }
    },
    data() {
        return {
            visible: false,
            interval: null,
            isMoving: false
        }
    },
    mounted() {
        window.addEventListener('scroll', this.handleScroll)
    },
    beforeDestroy() {
        window.removeEventListener('scroll', this.handleScroll)
        if (this.interval) {
            clearInterval(this.interval)
        }
    },
    methods: {
        handleScroll() {
            this.visible = window.pageYOffset > this.visibilityHeight
        },
        backToTop() {
            if (this.isMoving) return
            const start = window.pageYOffset
            let i = 0
            this.isMoving = true
            this.interval = setInterval(() => {
                const next = Math.floor(this.easeInOutQuad(10 * i, start, -start, 500))
                if (next <= this.backPosition) {
                    window.scrollTo(0, this.backPosition)
                    clearInterval(this.interval)
                    this.isMoving = false
                } else {
                    window.scrollTo(0, next)
                }
                i++
            }, 16.7)
        },
        easeInOutQuad(t, b, c, d) {
            if ((t /= d / 2) < 1) return c / 2 * t * t + b
            return -c / 2 * (--t * (t - 2) - 1) + b
        }
    }
}
</script>

<style lang="scss" scoped>
.shares {
    width: 105px;
    position: fixed;
    right: 0px;
    bottom: 30%;
    z-index: 999;
    .shares-item{
        width: 65px;
        height: 65px;
        background-color: #ffffff;
        box-shadow: 0px 4px 20px 0px
            rgba(49, 49, 49, 0.1);
        border-radius: 10px;
        cursor: pointer;
        margin-bottom: 10px;
        >div:nth-child(1){
            text-align: center;
            padding:10px 0 3px;
            i{
                color:#2e7fff;
                font-size:26px;
            }
        }
        >div:nth-child(2){
            text-align: center;
            font-family: MicrosoftYaHei;
            font-size: 12px;
            color: #595959;
        }
    }
    .backTop{
        width: 65px;
        height: 65px;
        position: absolute;
        bottom:-65px;
        background-color: #ffffff;
        box-shadow: 0px 4px 20px 0px
            rgba(49, 49, 49, 0.1);
        border-radius: 10px;
        cursor: pointer;
        transition: all ease-out .3s;
        >div:nth-child(1){
            text-align: center;
            padding:0px 0 3px;
            i{
                color:#2e7fff;
                font-size:26px;
            }
        }
        >div:nth-child(2){
            text-align: center;
            font-family: MicrosoftYaHei;
            font-size: 12px;
            color: #595959;
        }
    }
    .backTop:hover{
        background-color: #2e7fff;
        div{
            color:#fff;
            i{
                color:#fff;
            }
        }
    }
}

</style>
