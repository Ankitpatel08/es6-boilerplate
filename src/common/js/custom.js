import Cookie from 'js-cookie';
import 'jquery';

// // Common JS file: to add global js functionality. e.g.: getCurrentQuery, Event Emitter, polyfill etc.
// var handleBars = require('handlebars/runtime');
// handleBars.registerHelper('markdown', require('helper-markdown'));
// handleBars.registerHelper('counter', function(index) {
//   return index + 2;
// });

// Cross browser window width.
var windowWidth =
  window.innerWidth ||
  document.documentElement.clientWidth ||
  document.getElementsByTagName('body')[0].clientWidth;

const mqDefinitions = {
  phone: '(max-width:767px)',
  phablet: '(min-width:600px) and (max-width:767px)',
  tablet: '(min-width:768px) and (max-width:1024px)',
  desktop: '(min-width:1025px)',
  retina:
    '(-webkit-min-device-pixel-ratio: 1.5),(-moz-min-device-pixel-ratio: 1.5),(min-device-pixel-ratio: 1.5)'
};

const hasMQ = window.matchMedia ? true : false;

const breakpointNames = {
  DESKTOP: 'desktop',
  TABLET: 'tablet',
  PHABLET: 'phablet',
  PHONE: 'phone'
};

/**
 * Get the current media query.
 * @return {string} The current media query
 */
exports.getCurrentQuery = function getCurrentQuery() {
  if (/MSIE 9/i.test(window.navigator.userAgent)) {
    if (windowWidth <= 599) {
      return 'phone';
    } else if (windowWidth >= 300 && windowWidth <= 767) {
      return 'phablet';
    } else if (windowWidth >= 768 && windowWidth <= 1024) {
      return 'tablet';
    } else if (windowWidth >= 1025) {
      return 'desktop';
    }
  } else {
    return (
      (mq(breakpointNames.PHONE) && breakpointNames.PHONE) ||
      (mq(breakpointNames.PHABLET) && breakpointNames.PHABLET) ||
      (mq(breakpointNames.TABLET) && breakpointNames.TABLET) ||
      (mq(breakpointNames.DESKTOP) && breakpointNames.DESKTOP) ||
      false
    );
  }
};

var mq = function(breakPoint) {
  if (!hasMQ) {
    return breakPoint === breakpointNames.DESKTOP ? true : false;
  }

  // we have MQ here
  if (breakPoint === 'retina') {
    // If checking for retina breakpoint, return device ratio
    return (
      window.devicePixelRatio > 1 ||
      window.matchMedia(mqDefinitions[breakPoint]).matches
    );
  }

  if (breakPoint) {
    // MatchMedia friendly browsers, return true breakpoint
    return window.matchMedia(mqDefinitions[breakPoint]).matches;
  }
};

/**
 * TODO: add comment why this is needed and where to use?
 * @param {*} evt
 * @param {*} evtType
 * @param {*} data
 */
exports.emit = function emitCustomEvent(evt, evtType, data) {
  var event = new CustomEvent(evtType, {
    detail: data,
    bubbles: true,
    cancelable: true
  });
  evt.currentTarget.dispatchEvent(event);
};

/**
 * Get the value of a querystring
 * @param  {String} field The field to get the value of
 * @param  {String} url   The URL to get the value from (optional)
 * @return {String}       The field value
 */
exports.getQueryString = function(field, url) {
  var href = url ? url : window.location.href;
  var reg = new RegExp('[?&]' + field + '=([^&#]*)', 'i');
  var string = reg.exec(href);
  return string ? string[1] : null;
};

exports.setCookie = function(cookieName, data) {
  Cookie.set(cookieName, data);
};

exports.getCookie = function(CookieName) {
  return Cookie.getJSON(CookieName);
};

exports.removeCookie = function(cookieName) {
  Cookie.remove(cookieName);
};

exports.alertErrorCallback = function(response) {
  console.log("That's an error" + response);
};
