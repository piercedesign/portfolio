/******/ (function() { // webpackBootstrap
/*!******************************!*\
  !*** ./src/assets/js/app.js ***!
  \******************************/
// import $ from 'jquery';
// import whatInput from 'what-input';
//
// window.$ = $;
//
// import Foundation from 'foundation-sites';
// If you want to pick and choose which modules to include, comment out the above and uncomment
// the line below
//import './lib/foundation-explicit-pieces';
$(function () {
  $('.lazy').Lazy({
    //scrollDirection: vertical,
    effect: 'fadeIn',
    effectTime: 1000,
    threshold: 100
  });
});
/******/ })()
;
//# sourceMappingURL=app.js.map