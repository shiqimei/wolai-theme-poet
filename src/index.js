// ==UserScript==
// @name         Wolai Poet Theme
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  An elegant theme for wolai
// @author       Shiqi Mei
// @match        https://www.wolai.com/*
// @grant        none
// ==/UserScript==

import './index.scss';

(function () {
    'use strict';

    const styleSheet = document.createElement('style');
    styleSheet.textContent = `
html body {
  background: green;
}
`.trim();
    document.body.append(styleSheet);
})();