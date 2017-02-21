"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var MyBase = (function () {
    function MyBase(value) {
        this.myValue = value;
    }
    MyBase.prototype.baseMethod = function () {
    };
    return MyBase;
}());
var MyBase2 = (function () {
    function MyBase2() {
    }
    MyBase2.prototype.anotherBaseMethod = function () {
    };
    return MyBase2;
}());
var MyClass = (function (_super) {
    __extends(MyClass, _super);
    function MyClass(value, text) {
        var _this = _super.call(this, value) || this;
        _this.myText = text;
        return _this;
    }
    MyClass.prototype.implementedMethod = function () {
        return this.myText;
    };
    MyClass.prototype.haveTeaAtFive = function () {
        console.log("There is not enough biscuits, my dear chap");
    };
    return MyClass;
}(MyBase));
