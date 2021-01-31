"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _StateManage = require("./StateManage");

Object.keys(_StateManage).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (key in exports && exports[key] === _StateManage[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _StateManage[key];
    }
  });
});
//# sourceMappingURL=index.js.map