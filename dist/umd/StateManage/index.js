(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define(["exports", "./Redux", "./ReduxNextjs", "./gcs"], factory);
  } else if (typeof exports !== "undefined") {
    factory(exports, require("./Redux"), require("./ReduxNextjs"), require("./gcs"));
  } else {
    var mod = {
      exports: {}
    };
    factory(mod.exports, global.Redux, global.ReduxNextjs, global.gcs);
    global.undefined = mod.exports;
  }
})(this, function (exports, _Redux, _ReduxNextjs, _gcs) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.keys(_Redux).forEach(function (key) {
    if (key === "default" || key === "__esModule") return;
    Object.defineProperty(exports, key, {
      enumerable: true,
      get: function () {
        return _Redux[key];
      }
    });
  });
  Object.keys(_ReduxNextjs).forEach(function (key) {
    if (key === "default" || key === "__esModule") return;
    Object.defineProperty(exports, key, {
      enumerable: true,
      get: function () {
        return _ReduxNextjs[key];
      }
    });
  });
  Object.keys(_gcs).forEach(function (key) {
    if (key === "default" || key === "__esModule") return;
    Object.defineProperty(exports, key, {
      enumerable: true,
      get: function () {
        return _gcs[key];
      }
    });
  });
});
//# sourceMappingURL=index.js.map