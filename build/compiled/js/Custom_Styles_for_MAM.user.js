// ==UserScript==
// @name         Custom Styles for MAM
// @namespace    https://greasyfork.org/en/users/36444
// @version      0.0.3
// @description  A custom style program
// @author       GardenShade
// @include      https://myanonamouse.net/*
// @include      https://www.myanonamouse.net/*
// @resource     customCSS https://raw.githubusercontent.com/gardenshade/mam-styles/master/build/compiled/css/test.css
// @grant        GM_getResourceText
// @grant        GM_setValue
// @grant        GM_getValue
// @grant        GM_listValues
// @grant        GM_deleteValue
// @grant        GM_addStyle
// ==/UserScript==;
!function(e,o){var t,l,n;console.log("MAM Styles"),t=function(){var o,t,l,n,r;for(console.log("clearstyle"),r=e.head.querySelectorAll("link[rel=stylesheet]"),l=[],o=0,t=r.length;o<t;o++)n=r[o],n.title.indexOf("userCSS")<0&&n.href.indexOf("categories")<0&&l.push(n.parentNode.removeChild(n));return l},l=function(e){return console.log("mamStyles"),t(),GM_addStyle(e)},n=GM_getResourceText("customCSS"),l(n)}(document,window);