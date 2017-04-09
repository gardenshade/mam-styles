`// ==UserScript==
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

    ### Add Style ###
    addStyle = (cssLink) ->
        console.log 'addStyle'
        document.head.innerHTML += "<link rel='stylesheet' type='text/css' href='#{cssLink}'>"


    ### MAM Styles ###
    mamStyles = ->
        console.log 'mamStyles'
        do clearstyle
        # can't load from off-server addresses
        addStyle 'https://raw.githubusercontent.com/gardenshade/mam-styles/master/build/compiled/css/test.css'

    # INIT #
    do mamStyles
)(document,window)
