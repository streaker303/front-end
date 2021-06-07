<template>
    <div>
        <div id="shares">
            <a id="sshare"><i class="iconfont icon-weixin"></i></a>
            <a id="sweibo"><i class="iconfont icon-weibo"></i></a>
            <a id="sweixin" href="javascript:;"><i class="iconfont icon-weixin"></i></a>
            <a v-show="visible" id="gotop" href="javascript:;" @click="backToTop"><i class="el-icon-arrow-up"></i></a>
        </div>
        <div id="fixed_weixin" class="fixed">
            <div class="fixed-container">
                <div id="qrcode"></div><p>扫描二维码分享到微信</p>
            </div>
        </div>
        <div id="online_open">
            <i class="fa fa-comments-o"></i>
        </div>
        <!-- <div id="online_lx">
            <div id="olx_head">
                在线咨询<i id="online_close" class="el-icon-close fr"></i>
            </div>
            <ul id="olx_qq">
                <li><a href="tencent://message/?uin=40080000&Site=uelike&Menu=yes"><i class="fa fa-qq"></i>40080000</a></li>
            </ul>
            <div id="olx_tel">
                <div><i class="el-icon-phone"></i>联系电话</div><p>400-888-8888<br /></p>
            </div>
        </div> -->
        <div class="hide"></div>
    </div>
</template>

<script>
export default {
    name: 'Tips',
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

<style scoped>
#shares {
    height: 120px;
    position: fixed;
    right: 10px;
    bottom: 40px;
    z-index: 99;
}

#shares a#sshare {
    cursor: default;
}
#shares a#sweibo {
    background-color: #ea493c;
}

#shares a#sweixin {
    background-color: #24b727;
}
#shares a#sshare:hover,#shares a#sweibo:hover,#shares a#sweixin:hover{
    color:#fff;
}
#shares a#gotop {
    background-color: #666666;
    background-color: rgba(0, 0, 0, 0.6);
    margin-top: 20px;
    font-size: 22px;
}

#shares a#gotop i {
    margin-top: 3px;
}

.fixed {
    position: fixed;
    z-index: 9999;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgb(0, 0, 0);
    background: rgba(0, 0, 0, 0.6);
    overflow-y: auto;
    z-index: 100;
    display: none;
}

#fixed_weixin .fixed-container {
    width: 220px;
    height: auto;
    padding: 20px 20px 0 20px;
    background: #fff;
    position: absolute;
    left: 50%;
    top: 50%;
    margin-left: -110px;
    margin-top: -140px;
}

#fixed_weixin .fixed-container div {
    height: 220px;
}

#fixed_weixin .fixed-container p {
    height: 40px;
    line-height: 40px;
    text-align: center;
    font-size: 14px;
    color: #000;
}

#fixed_mp .fixed-container {
    width: 258px;
    height: 298px;
    background: #fff;
    position: absolute;
    left: 50%;
    top: 50%;
    margin-left: -129px;
    margin-top: -149px;
}

#fixed_mp .fixed-container p {
    padding: 0 20px;
    text-align: center;
    font-size: 14px;
    color: #000;
}

#online_open {
    width: 30px;
    height: 30px;
    background: #00d420;
    cursor: pointer;
    position: fixed;
    right: -40px;
    bottom: 190px;
    z-index: 99999;
    font-size: 18px;
    color: #fff;
    text-align: center;
    line-height: 30px;
}

#online_open i {
    margin-top: 6px;
}

#online_lx {
    width: 192px;
    height: auto;
    background-color: #fff;
    -webkit-box-shadow: 0 5px 9px rgba(4, 0, 0, 0.17);
    box-shadow: 0 5px 9px rgba(4, 0, 0, 0.17);
    position: fixed;
    right: 10px;
    bottom: 160px;
    z-index: 99999;
    border-radius: 0px;
    margin-right: -10px;
}
#olx_head {
    padding: 20px;
    line-height: 16px;
    height: 16px;
    background: #00d420;
    border-radius: 5px 5px 0 0;
    color: #fff;
    font-size: 14px;
}

#olx_head i {
    font-size: 18px;
    color: #fff;
    cursor: pointer;
    transition: all 0.6s cubic-bezier(0.215, 0.61, 0.355, 1) 0s;
}

#olx_qq li a {
    padding: 12px 30px;
    height: 18px;
    line-height: 18px;
    background: #f5f5f5;
    color: #353434;
    display: block;
    border-bottom: #fff 1px solid;
    transition: all ease-out 0.3s;
    font-size: 12px;
}

#olx_qq li a i {
    color: #5e5e5e;
    font-size: 16px;
    vertical-align: middle;
    margin-right: 18px;
    transition: all ease-out 0.3s;
}

#olx_qq li a:hover {
    color: #fff;
    background: #565656;
}

#olx_qq li a:hover i {
    color: #00d420;
}

#olx_tel {
    padding: 20px 30px;
}

#olx_tel div {
    color: #434343;
    line-height: 14px;
    height: 14px;
    margin-bottom: 10px;
}

#olx_tel div i {
    font-size: 18px;
    margin-right: 20px;
    vertical-align: middle;
}

#olx_tel p {
    line-height: 18px;
    font-family: HELVETICANEUELTPRO-THEX;
    font-size: 16px;
}

.hide,
.popup {
    display: none;
}

.show {
    display: block;
}

/*右下角悬浮*/

#shares a {
    width: 40px;
    height: 40px;
    display: block;
    background: #8b8b8b;
    background-color: rgba(31, 31, 31, 0.6);
    color: #999;
    font-size: 16px;
    text-align: center;
}

#shares a#sshare {
    display: none;
}

#shares a i {
    margin-top: 11px;
}
#shares a#gotop {
    margin-top: 0;
    transition: all 0.6s cubic-bezier(0.215, 0.61, 0.355, 1) 0s;
    bottom: 40px;
    position: fixed;
    right: 10px;
}

#shares a#gotop i {
    margin-top: 8px;
}

#shares a#gotop:hover {
    background: rgba(0, 0, 0, .9)
}

#shares a#sweibo,
#shares a#sweixin {
    background-color: #fff;
    border: 1px solid rgba(0, 0, 0, .1);
    width: 38px;
    height: 39px;
    border-bottom: none;
    transition: all 0.6s cubic-bezier(0.215, 0.61, 0.355, 1) 0s;
    position: fixed;
    bottom: 120px;
    right: 10px;
}

#shares a#sweixin {
    border-bottom: 1px solid rgba(0, 0, 0, .1);
    height: 38px;
    position: fixed;
    bottom: 80px;
}

.fa-weibo::before {
    color: #BED3EE;
}

#shares a#sweibo:hover {
    background-color: #555;
}

#shares a#sweibo:hover .fa-weibo::before {
    color: #fff;
}

#shares a#sweixin:hover {
    background-color: #555;
}

/*右下角联系展开*/
#olx_head {
    background: #428fef;
    border-radius: 0px;
}

#olx_qq li a:hover i {
    color: #fff
}

#olx_qq li a:hover {
    padding: 18px 30px;
    background: rgb(66, 143, 239);
    background: rgb(56, 133, 230);
}

#online_open i {
    margin-top: 10px;
}

#online_open {
    background: none;
    bottom: 0px;
    color: #515151;
    bottom: 160px;
    color: #999;
    background-color: #fff;
    border: 1px solid rgba(0, 0, 0, .1);
    width: 38px;
    height: 39px;
    border-bottom: none;
}

#online_open:hover {
    background-color: #555;
    color: #fff;
}

#online_lx {
    border-radius: 0px;
    bottom: 160px;
    margin-right: -10px;
}

#olx_tel div {
    color: #898989;
}

#olx_qq li a i {
    color: #504f4f;
}

#olx_head i:hover {
    color: #fff;
    transform: rotate(90deg);
    -ms-transform: rotate(90deg);
    /* IE 9 */
    -moz-transform: rotate(90deg);
    /* Firefox */
    -webkit-transform: rotate(90deg);
    /* Safari和 Chrome */
    -o-transform: rotate(90deg);
    /* Opera */
}
</style>
