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
    # FUNCTIONS #
    ### Clear Style ###
    clearstyle = (style) ->
        style.disabled = true
    ### Init ###
    init = ->
        # Loops through all styles and excludes the User-defined CSS
        for style in styles when style.href.indexOf('userCSS.php') < 0
            clearstyle(style)
        return

    # VARIABLES #
    styles = document.styleSheets

    # INIT #
    do init
)(document,window)
