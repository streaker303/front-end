"use strict";
// Template version: 1.3.1
// see http://vuejs-templates.github.io/webpack for documentation.

const path = require("path");

module.exports = {
    dev: {
        // Paths
        assetsSubDirectory: "static",
        assetsPublicPath: "/",
        // Various Dev Server settings
        host: "localhost", // can be overwritten by process.env.HOST
        port: 8080, // can be overwritten by process.env.PORT, if port is in use, a free one will be determined
        autoOpenBrowser: false,
        errorOverlay: true,
        notifyOnErrors: true,
        useEslint: true,
        poll: false,
        proxyTable: {
            //公共模块
            "/common": {
                target: "http://10.11.102.44:20018/", //需要代理的地址
                changeOrigin: true,
                pathRewrite: {
                    "^/common": "", //本身的接口地址没有 '/api' 这种通用前缀，所以要rewrite，如果本身有则去掉
                },
            },
            //基础信息
            "/base_info": {
                target: "http://10.11.102.44:20018/", //需要代理的地址
                changeOrigin: true,
                pathRewrite: {
                    "^/base_info": "", //本身的接口地址没有 '/api' 这种通用前缀，所以要rewrite，如果本身有则去掉
                },
            },
            //资产管理
            "/assets": {
                target: "http://10.11.102.44:20058/", //需要代理的地址
                changeOrigin: true,
                pathRewrite: {
                    "^/assets": "", //本身的接口地址没有 '/api' 这种通用前缀，所以要rewrite，如果本身有则去掉
                },
            },
            //告警管理
            "/alarm": {
                target: "http://10.11.102.45:20238/", //需要代理的地址
                changeOrigin: true,
                pathRewrite: {
                    "^/alarm": "", //本身的接口地址没有 '/api' 这种通用前缀，所以要rewrite，如果本身有则去掉
                },
            },
            //数据中心
            "/data_center": {
                target: "http://10.11.102.45:20188/", //需要代理的地址
                changeOrigin: true,
                pathRewrite: {
                    "^/data_center": "", //本身的接口地址没有 '/api' 这种通用前缀，所以要rewrite，如果本身有则去掉
                },
            },
            //攻防演练
            "/defense_drill": {
                target: "http://10.11.102.44:20078/", //需要代理的地址
                changeOrigin: true,
                ws: true,
                secure: false,
                pathRewrite: {
                    "^/defense_drill": "", //本身的接口地址没有 '/api' 这种通用前缀，所以要rewrite，如果本身有则去掉
                },
            },
            //脆弱性
            "/leak": {
                target: "http://10.11.102.45:20248/", //需要代理的地址
                changeOrigin: true,
                pathRewrite: {
                    "^/leak": "", //本身的接口地址没有 '/api' 这种通用前缀，所以要rewrite，如果本身有则去掉
                },
            },
            //指挥调度（护网）
            "/protect_net": {
                target: "http://10.11.102.44:20128/", //需要代理的地址
                changeOrigin: true,
                pathRewrite: {
                    "^/protect_net": "", //本身的接口地址没有 '/api' 这种通用前缀，所以要rewrite，如果本身有则去掉
                },
            },
            //情报中心
            "/intelligence": {
                target: "http://10.11.102.45:20258/", //需要代理的地址
                changeOrigin: true,
                pathRewrite: {
                    "^/intelligence": "", //本身的接口地址没有 '/api' 这种通用前缀，所以要rewrite，如果本身有则去掉
                },
            },
            //报表
            "/report_form": {
                target: "http://10.11.102.44:20178/", //需要代理的地址
                changeOrigin: true,
                pathRewrite: {
                    "^/report_form": "", //本身的接口地址没有 '/api' 这种通用前缀，所以要rewrite，如果本身有则去掉
                },
            },
            //规则
            "/rule": {
                target: "http://10.11.102.45:20198/", //需要代理的地址
                changeOrigin: true,
                pathRewrite: {
                    "^/rule": "", //本身的接口地址没有 '/api' 这种通用前缀，所以要rewrite，如果本身有则去掉
                },
            },
            //工单
            "/works_order": {
                target: "http://10.11.102.45:20218/", //需要代理的地址
                changeOrigin: true,
                pathRewrite: {
                    "^/works_order": "", //本身的接口地址没有 '/api' 这种通用前缀，所以要rewrite，如果本身有则去掉
                },
            },
            //暴露面
            "/free_face": {
                target: "http://10.11.102.44:20148/", //需要代理的地址
                changeOrigin: true,
                pathRewrite: {
                    "^/free_face": "", //本身的接口地址没有 '/api' 这种通用前缀，所以要rewrite，如果本身有则去掉
                },
            },
            //钓鱼邮件
            "/phishing_email": {
                target: "http://10.11.102.45:20268/", //需要代理的地址
                changeOrigin: true,
                pathRewrite: {
                    "^/phishing_email": "", //本身的接口地址没有 '/api' 这种通用前缀，所以要rewrite，如果本身有则去掉
                },
            },

            //图片服务代理
            "/imgServer": {
                //target: 'http://192.168.91.218:8081/', //需要代理的地址
                target: "http://10.11.102.15:7699/", //需要代理的地址
                changeOrigin: true,
                pathRewrite: {
                    "^/imgServer": "", //本身的接口地址没有 '/api' 这种通用前缀，所以要rewrite，如果本身有则去掉
                },
            },
            //socket代理
            "/chat": {
                target: "http://10.11.102.44:20078/", //需要代理的地址
                changeOrigin: true,
                ws: true,
                secure: false,
                pathRewrite: {
                    "^/chat": "", //本身的接口地址没有 '/api' 这种通用前缀，所以要rewrite，如果本身有则去掉
                },
            },
        },

        /**
         * Source Maps
         */

        // https://webpack.js.org/configuration/devtool/#development
        devtool: "cheap-module-eval-source-map",

        // If you have problems debugging vue-files in devtools,
        // set this to false - it *may* help
        // https://vue-loader.vuejs.org/en/options.html#cachebusting
        cacheBusting: true,

        cssSourceMap: true,
    },

    build: {
        // Template for index.html
        index: path.resolve(__dirname, "../dist/index.html"),

        // Paths
        assetsRoot: path.resolve(__dirname, "../dist"),
        assetsSubDirectory: "static",
        assetsPublicPath: "./",

        /**
         * Source Maps
         */

        productionSourceMap: false,
        // https://webpack.js.org/configuration/devtool/#production
        devtool: "#source-map",

        // Gzip off by default as many popular static hosts such as
        // Surge or Netlify already gzip all static assets for you.
        // Before setting to `true`, make sure to:
        // npm install --save-dev compression-webpack-plugin
        productionGzip: true,
        productionGzipExtensions: ["js", "css"],

        // Run the build command with an extra argument to
        // View the bundle analyzer report after build finishes:
        // `npm run build --report`
        // Set to `true` or `false` to always turn it on or off
        bundleAnalyzerReport: process.env.npm_config_report,
    },
};
