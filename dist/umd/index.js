(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define(["exports", "./StateManage"], factory);
  } else if (typeof exports !== "undefined") {
    factory(exports, require("./StateManage"));
  } else {
    var mod = {
      exports: {}
    };
    factory(mod.exports, global.StateManage);
    global.undefined = mod.exports;
  }
})(this, function (exports, _StateManage) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.keys(_StateManage).forEach(function (key) {
    if (key === "default" || key === "__esModule") return;
    Object.defineProperty(exports, key, {
      enumerable: true,
      get: function () {
        return _StateManage[key];
      }
    });
  });
});
//# sourceMappingURL=index.js.map