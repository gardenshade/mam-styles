`// ==UserScript==
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
// ==/UserScript==`

( (document,window) ->
    console.log 'MAM Styles'
    # FUNCTIONS #
    ### Clear Style ###
    clearstyle = ->
        console.log 'clearstyle'
        styleList = document.head.querySelectorAll 'link[rel=stylesheet]'
        for style in styleList when style.title.indexOf('userCSS') < 0 and style.href.indexOf('categories') < 0
            style.parentNode
                .removeChild style

    ### MAM Styles ###
    mamStyles = (css) ->
        console.log 'mamStyles'
        do clearstyle
        GM_addStyle css

    # VARIABLES
    newCSS = GM_getResourceText 'customCSS'

    # INIT #
    mamStyles newCSS
    return
)(document,window)
