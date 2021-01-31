(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define(["@testing-library/jest-dom"], factory);
  } else if (typeof exports !== "undefined") {
    factory(require("@testing-library/jest-dom"));
  } else {
    var mod = {
      exports: {}
    };
    factory(global.jestDom);
    global.undefined = mod.exports;
  }
})(this, function () {
  "use strict";
});
//# sourceMappingURL=setupTests.js.map