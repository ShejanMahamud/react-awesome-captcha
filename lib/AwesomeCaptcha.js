"use strict";

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _propTypes = _interopRequireDefault(require("prop-types"));
var _react = _interopRequireWildcard(require("react"));
require("./index.css");
var _useCaptcha2 = _interopRequireDefault(require("./useCaptcha"));
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != _typeof(e) && "function" != typeof e) return { "default": e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && {}.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n["default"] = e, t && t.set(e, n), n; }
function _interopRequireDefault(e) { return e && e.__esModule ? e : { "default": e }; }
function _slicedToArray(r, e) { return _arrayWithHoles(r) || _iterableToArrayLimit(r, e) || _unsupportedIterableToArray(r, e) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t["return"] && (u = t["return"](), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(r) { if (Array.isArray(r)) return r; } // CaptchaComponent.js
var AwesomeCaptcha = function AwesomeCaptcha(_ref) {
  var onValidate = _ref.onValidate,
    className = _ref.className,
    vertical = _ref.vertical;
  var _useCaptcha = (0, _useCaptcha2["default"])(),
    captcha = _useCaptcha.captcha,
    generateCaptcha = _useCaptcha.generateCaptcha;
  var _useState = (0, _react.useState)(''),
    _useState2 = _slicedToArray(_useState, 2),
    userInput = _useState2[0],
    setUserInput = _useState2[1];
  var _useState3 = (0, _react.useState)(false),
    _useState4 = _slicedToArray(_useState3, 2),
    isValid = _useState4[0],
    setIsValid = _useState4[1];
  (0, _react.useEffect)(function () {
    generateCaptcha();
  }, []);
  var handleChange = function handleChange(e) {
    var value = e.target.value;
    setUserInput(value);
    if (value === captcha) {
      setIsValid(true);
      onValidate(true);
    } else {
      setIsValid(false);
      onValidate(false);
    }
  };
  return /*#__PURE__*/_react["default"].createElement("div", null, /*#__PURE__*/_react["default"].createElement("div", {
    className: "w-full flex items-start ".concat(className, " ").concat(vertical ? 'flex-col gap-2' : 'flex-row gap-5')
  }, /*#__PURE__*/_react["default"].createElement("div", {
    className: "flex flex-col items-start gap-2 mt-5 no-select"
  }, /*#__PURE__*/_react["default"].createElement("h1", {
    className: "text-sm text-[#18191C]"
  }, "Captcha"), /*#__PURE__*/_react["default"].createElement("input", {
    disabled: true,
    type: "text",
    className: "px-4 py-2 rounded-lg bg-transparent border border-[#E4E5E8] focus:outline-none italic tracking-widest off",
    name: "captcha",
    value: captcha
  }), /*#__PURE__*/_react["default"].createElement("h1", {
    onClick: generateCaptcha,
    className: "text-sm text-primary cursor-pointer select-none"
  }, "Reset Captcha")), /*#__PURE__*/_react["default"].createElement("div", {
    className: "flex flex-col items-start gap-2 mt-5"
  }, /*#__PURE__*/_react["default"].createElement("h1", {
    className: "text-sm text-[#18191C]"
  }, "Submit Captcha"), /*#__PURE__*/_react["default"].createElement("input", {
    type: "text",
    className: "px-4 py-2 rounded-lg bg-transparent border focus:outline-none ".concat(userInput && isValid ? 'border-green-500' : 'border-ini'),
    name: "captcha",
    value: userInput,
    onChange: handleChange,
    placeholder: "Enter Captcha"
  }))));
};
AwesomeCaptcha.propTypes = {
  onValidate: _propTypes["default"].func.isRequired,
  className: _propTypes["default"].string,
  vertical: _propTypes["default"].bool
};
var _default = exports["default"] = AwesomeCaptcha;