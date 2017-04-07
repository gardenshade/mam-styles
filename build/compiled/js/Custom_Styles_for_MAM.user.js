// ==UserScript==
// @name         Custom Styles for MAM
// @namespace    https://greasyfork.org/en/users/36444
// @version      0.0.2
// @description  A custom style program
// @author       GardenShade
// @include      https://myanonamouse.net/*
// @include      https://www.myanonamouse.net/*
// @grant        GM_setValue
// @grant        GM_getValue
// @grant        GM_listValues
// @grant        GM_deleteValue
// @grant        GM_addStyle
// ==/UserScript==;
!function(n,e){var t,r,f;t=function(n){return n.disabled=!0},r=function(){var n,e,r;for(n=0,e=f.length;n<e;n++)r=f[n],r.href.indexOf("userCSS.php")<0&&t(r)},f=n.styleSheets,r()}(document,window);