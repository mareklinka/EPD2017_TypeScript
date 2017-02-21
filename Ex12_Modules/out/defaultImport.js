(function (factory) {
    if (typeof module === "object" && typeof module.exports === "object") {
        var v = factory(require, exports);
        if (v !== undefined) module.exports = v;
    }
    else if (typeof define === "function" && define.amd) {
        define(["require", "exports", "./defaultExport"], factory);
    }
})(function (require, exports) {
    "use strict";
    var defaultExport_1 = require("./defaultExport");
    var myValidator = new defaultExport_1.default();
});
