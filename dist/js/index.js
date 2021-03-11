"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
var _exportNames = {
  combineReducers: true
};
Object.defineProperty(exports, "combineReducers", {
  enumerable: true,
  get: function get() {
    return _redux.combineReducers;
  }
});

var _index = require("./StateManage/index");

Object.keys(_index).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (Object.prototype.hasOwnProperty.call(_exportNames, key)) return;
  if (key in exports && exports[key] === _index[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _index[key];
    }
  });
});

var _redux = require("redux");
//# sourceMappingURL=index.js.map