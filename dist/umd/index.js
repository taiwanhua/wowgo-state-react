(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define(["exports", "./StateManage/index", "redux"], factory);
  } else if (typeof exports !== "undefined") {
    factory(exports, require("./StateManage/index"), require("redux"));
  } else {
    var mod = {
      exports: {}
    };
    factory(mod.exports, global.index, global.redux);
    global.undefined = mod.exports;
  }
})(this, function (exports, _index, _redux) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.keys(_index).forEach(function (key) {
    if (key === "default" || key === "__esModule") return;
    Object.defineProperty(exports, key, {
      enumerable: true,
      get: function () {
        return _index[key];
      }
    });
  });
  Object.defineProperty(exports, "combineReducers", {
    enumerable: true,
    get: function () {
      return _redux.combineReducers;
    }
  });
});
//# sourceMappingURL=index.js.map