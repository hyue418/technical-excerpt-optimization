// ==UserScript==
// @name         技术摘抄页面优化
// @namespace    https://github.com/hyue418
// @version      1.0.0
// @description  技术摘抄页面优化、去广告化
// @author       hyue418
// @match        https://learn.lianglianglee.com/*
// @icon         https://static001.geekbang.org/static/time/icon/apple-touch-icon.jpg
// @grant        GM_addStyle
// @license      GPL-3.0
// @downloadURL  https://github.com/hyue418/technical-excerpt-optimization/raw/master/technical-excerpt-optimization.user.js
// ==/UserScript==
(function () {
    'use strict';
    // 屏蔽广告
    GM_addStyle('div[align="center"] {display:none !important}');
    // 优化页面宽度
    GM_addStyle('.book-content {max-width:1100px !important}');
    // 优化标题高度
    GM_addStyle('.off-canvas-content {padding:0rem 2.2rem .5rem !important}');
    // 优化字体
    GM_addStyle('html {font-size:23px !important}');
    // 优化行间距
    GM_addStyle('.off-canvas-content .book-content .book-post p {margin-bottom:1rem !important}');
    // 收起侧边栏
    sidebar_toggle()
})();