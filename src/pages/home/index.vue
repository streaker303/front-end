<template>
    <div class="index">
        <Banner></Banner>
        <div class="wow fadeInDown box top__element">
            是撒女
        </div>
        <div class="wow rollIn box">
            是撒女
        </div>
        <div class="wow fadeInDown box top__element">
            是撒女
        </div>
        <div class="wow fadeInRight box">
            是撒女2222222222
        </div>
        <div class="wow fadeInDown box">
            是撒女
        </div>
        <div class="wow rollIn box">
            是撒女
        </div>
        <div class="wow fadeInRight box">
            是撒女333333333333
        </div>
        <div class="wow fadeInLeft box">
            是撒女111111111
        </div>
        <div class="wow rollIn box">
            是撒女
        </div>
        <div class="wow fadeInDown box">
            是撒女
        </div>
    </div>
</template>

<script>
import Banner from '@/components/banner'
export default {
    name: 'Home',
    components: {
        Banner
    },
    data() {
        return {

        }
    },

    mounted() {
        this.$nextTick(() => {
            // eslint-disable-next-line no-undef
            var wow = new WOW({
                boxClass: 'wow', // /动画元件css类（默认为wow）
                animateClass: 'animated', // 动画css类（默认为animated）
                offset: 0, // 到元素距离触发动画（当默认为0）
                mobile: true, // 在移动设备上触发动画（默认为true）
                live: true // 对异步加载的内容进行操作（默认为true）,
            })
            wow.init()
        })
    },
    methods: {

    }
}
</script>

<style lang="scss" scoped>

.box{
    width:300px;
    height:200px;
    background: green;
    margin: 100px auto;
}
</style>
