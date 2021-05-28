<template>
    <div id="header" class="index_nav">
        <div class="content">
            <a id="logo" href="//mo005-16524.mo5.line1.uemo.net/">
                <img src="//resources.jsmo.xin/templates/upload/16524/201907/1562902251843.jpg" height="40" />
            </a>
            <ul id="nav">
                <li class="navitem">
                    <a class="nav-a active " href="//mo005-16524.mo5.line1.uemo.net/" target="_self">
                        <span data-title="首页">首页</span>
                    </a>
                </li>

                <li class="navitem">
                    <a class="nav-a" href="//mo005-16524.mo5.line1.uemo.net/list/id/185042/" target="_self">
                        <span data-title="产品展示">产品展示</span>
                    </a>
                </li>

                <li class="navitem">
                    <a class="nav-a" href="javascript:;" target="">
                        <span data-title="关于我们">关于我们</span><i class="el-icon-arrow-down"></i>
                    </a>

                    <ul class="subnav">
                        <li>
                            <a href="//mo005-16524.mo5.line1.uemo.net/page/about1/" target="_self">
                                <span data-title="关于我们">关于我们</span>
                                <i class="el-icon-arrow-down"></i>
                            </a>
                        </li>

                        <li>
                            <a href="//mo005-16524.mo5.line1.uemo.net/page/294936/" target="_self">
                                <span data-title="大事件">大事件</span>
                                <i class="el-icon-arrow-down"></i>
                            </a>
                        </li>
                        <li>
                            <a href="//mo005-16524.mo5.line1.uemo.net/page/about1/" target="_self">
                                <span data-title="关于我们">关于我们</span>
                                <i class="el-icon-arrow-down"></i>
                            </a>
                        </li>

                        <li>
                            <a href="//mo005-16524.mo5.line1.uemo.net/page/294936/" target="_self">
                                <span data-title="大事件">大事件</span>
                                <i class="el-icon-arrow-down"></i>
                            </a>
                        </li>
                    </ul>
                </li>

                <li class="navitem">
                    <a class="nav-a" href="//mo005-16524.mo5.line1.uemo.net/list/id/185039/" target="_self">
                        <span data-title="服务案例">服务案例</span>
                    </a>
                </li>

                <li class="navitem">
                    <a class="nav-a" href="//mo005-16524.mo5.line1.uemo.net/list/id/185038/" target="_self">
                        <span data-title="我们团队">我们团队</span>
                    </a>
                </li>

                <li class="navitem">
                    <a class="nav-a" href="//mo005-16524.mo5.line1.uemo.net/list/id/185033/" target="_self">
                        <span data-title="资讯中心">资讯中心</span>
                    </a>
                </li>

                <li class="navitem">
                    <a class="nav-a" href="//mo005-16524.mo5.line1.uemo.net/page/contact/" target="_self">
                        <span data-title="联系我们">联系我们</span>
                    </a>
                </li>
            </ul>

            <div class="clear"></div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'ZHeader',
    data() {
        return {
            menus: [
                {

                }
            ]
        }
    }

}
</script>

<style lang="scss">

#header {
    width: 100%;
    height: auto;
    position: fixed;
    font-size: 14px;
    transition: all ease 0.3s;
    background: #fff;
    z-index: 99;
    transition-property: padding, background;
}
#header .content {
    max-width: 1200px;
    width: 100%;
    text-align: center;
    margin: 0 auto;
    height: 80px;
    position: relative;
}
#header #logo {
    width: auto;
    height: 40px;
    display: block;
    float: left;
    margin-top: 17px;
    margin-right: 50px;
}
#header ul#nav {
    float: right;
    transition: all 0.4s ease-out 0s;
}
#header ul li.navitem {
    width: auto;
    height: 50px;
    line-height: 40px;
    float: left;
    position: relative;
    transition: all 0.4s ease-out 0s;
    padding: 0px 1px 0px 0px;

}

#header ul li.navitem ul.subnav {
    width: 192px;
    top: 68px;
    z-index: 2;
    transition: all 0.3s ease-out 0s;
    position: absolute;
    border-top: #838383 3px solid;
    opacity: 0;
    visibility: hidden;
    transform: translate3d(0px, 10px, 0px);
    -moz-transform: translate3d(0px, 10px, 0px);
    -webkit-transform: translate3d(0px, 10px, 0px);
    background: #fff;
    border: 0;
    box-shadow: 0 6px 10px rgba(0, 0, 0, .1);
}

#header ul li.navitem:hover ul.subnav {
    opacity: 1;
    visibility: visible;
    transform: translate3d(0px, 0px, 0px);
    -moz-transform: translate3d(0px, 0px, 0px);
    -webkit-transform: translate3d(0px, 0px, 0px);
}

#header ul li.navitem a {
    color: #4b4b4b;
    display: inline-block;
    padding: 20px 26px;
    cursor: pointer;
    transition: none ease-out 0.3s;
    transition-property: color, background, text-indent, opacity;
    >i{
        margin-left: 10px;
    }
}

#header ul li.navitem a.active,
#header ul li.navitem:hover a {
    color: #4b4b4b;
    display: inline-block;
    padding: 20px 26px;
}
#header ul li.navitem a::after {
    content: '';
    display: block;
    margin-top: -3px;
    width: 30%;
    height: 2px;
    background: transparent;
    transition: all 0.6s cubic-bezier(0.215, 0.61, 0.355, 1) 0s;
}
#header ul li.navitem a.active::after {
    width: 60%;
    background: rgb(33, 124, 238);
}

#header ul li.navitem:hover a::after {
    width: 100%;
    background: rgb(41, 127, 236);
}

#header ul li.navitem ul.subnav li {
    border-bottom: 1px solid rgba(0, 0, 0, .08);
}

#header ul li.navitem ul.subnav li a {
    height: 20px;
    line-height: 20px;
    display: block;
    font-size: 12px;
    text-align: center;
    color: #666;
    width: 100%;
    padding: 14px 0;
}

#header ul li.navitem ul.subnav li a i {
    float: right;
    margin-top: 5px;
    transition: all ease-out 0.2s;
    opacity: 0;
    display: none;
}

#header ul li.navitem ul.subnav li a:hover {
    color: #000;
    text-indent: inherit;
    background-color: #f5f5f5;
}

#header ul li.navitem ul.subnav li a:hover i {
    opacity: 1;
}
#header ul li.navitem ul.subnav li a:hover::after,
#header ul li.navitem ul.subnav li a:after {
    display: none;
}
</style>
