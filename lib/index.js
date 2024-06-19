"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
Object.defineProperty(exports, "CaptchaComponent", {
  enumerable: true,
  get: function get() {
    return _Captcha["default"];
  }
});
Object.defineProperty(exports, "generateCaptcha", {
  enumerable: true,
  get: function get() {
    return _useCaptcha.generateCaptcha;
  }
});
var _Captcha = _interopRequireDefault(require("./src/Captcha"));
var _useCaptcha = require("./src/useCaptcha");
function _interopRequireDefault(e) { return e && e.__esModule ? e : { "default": e }; }