(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
"use strict";

var _math = _interopRequireDefault(require("./math.js"));

var _string = _interopRequireDefault(require("./string.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

window.onload = function () {
  console.log(_math.default.sumAll(50, 10));
  console.log(_math.default.subtractAll(50, 10));
  console.log(_math.default.multiplyAll(50, 10));
  console.log(_math.default.divideAll(50, 2));

  var cS = _string.default.concatenateStrings('Ajay', 'Sankar', 'Chintagunta');

  console.log(cS);
  document.getElementById('concatenate').innerText = cS;
  var iterable = [10, 20, 30];

  for (var _i = 0, _iterable = iterable; _i < _iterable.length; _i++) {
    var value = _iterable[_i];
    value += 1;
    console.log(value);
  }

  var foo = {
    a: 'foo',
    z: 'bar',
    m: 'baz'
  };

  for (var _i2 = 0, _Object$keys = Object.keys(foo); _i2 < _Object$keys.length; _i2++) {
    var i = _Object$keys[_i2];
    console.log('Hello world');
  }
};

},{"./math.js":2,"./string.js":3}],2:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var sumAll = function sumAll(a, b) {
  return a + b;
};

var subtractAll = function subtractAll(a, b) {
  return a - b;
};

var divideAll = function divideAll(a, b) {
  return a / b;
};

var multiplyAll = function multiplyAll(a, b) {
  return a * b;
};

var _default = {
  sumAll: sumAll,
  subtractAll: subtractAll,
  divideAll: divideAll,
  multiplyAll: multiplyAll
};
exports["default"] = _default;

},{}],3:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var concatenateStrings = function concatenateStrings() {
  for (var _len = arguments.length, strings = new Array(_len), _key = 0; _key < _len; _key++) {
    strings[_key] = arguments[_key];
  }

  return strings.join(' ');
};

var _default = {
  concatenateStrings: concatenateStrings
};
exports["default"] = _default;

},{}]},{},[1]);
