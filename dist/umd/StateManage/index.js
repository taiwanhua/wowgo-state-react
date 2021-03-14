(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define(["exports", "./Redux", "./gcs", "./ReactuseReducer"], factory);
  } else if (typeof exports !== "undefined") {
    factory(exports, require("./Redux"), require("./gcs"), require("./ReactuseReducer"));
  } else {
    var mod = {
      exports: {}
    };
    factory(mod.exports, global.Redux, global.gcs, global.ReactuseReducer);
    global.undefined = mod.exports;
  }
})(this, function (exports, _Redux, _gcs, _ReactuseReducer) {
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
  Object.keys(_gcs).forEach(function (key) {
    if (key === "default" || key === "__esModule") return;
    Object.defineProperty(exports, key, {
      enumerable: true,
      get: function () {
        return _gcs[key];
      }
    });
  });
  Object.keys(_ReactuseReducer).forEach(function (key) {
    if (key === "default" || key === "__esModule") return;
    Object.defineProperty(exports, key, {
      enumerable: true,
      get: function () {
        return _ReactuseReducer[key];
      }
    });
  });
});
//# sourceMappingURL=index.js.map