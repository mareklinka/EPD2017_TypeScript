"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var Genre = (function () {
    function Genre() {
    }
    return Genre;
}());
var Metal = (function (_super) {
    __extends(Metal, _super);
    function Metal() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return Metal;
}(Genre));
var AlternativeMetal = (function (_super) {
    __extends(AlternativeMetal, _super);
    function AlternativeMetal() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    AlternativeMetal.prototype.name = function () {
        return "Alternative Metal";
    };
    return AlternativeMetal;
}(Metal));
var BlackMetal = (function (_super) {
    __extends(BlackMetal, _super);
    function BlackMetal() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    BlackMetal.prototype.name = function () {
        return "Black Metal";
    };
    return BlackMetal;
}(Metal));
var PowerMetal = (function (_super) {
    __extends(PowerMetal, _super);
    function PowerMetal() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    PowerMetal.prototype.name = function () {
        return "Power Metal";
    };
    return PowerMetal;
}(Metal));
var SymphonicMetal = (function (_super) {
    __extends(SymphonicMetal, _super);
    function SymphonicMetal() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    SymphonicMetal.prototype.name = function () {
        return "Symphonic Metal";
    };
    return SymphonicMetal;
}(Metal));
var Jazz = (function (_super) {
    __extends(Jazz, _super);
    function Jazz() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Jazz.prototype.name = function () {
        return "Jazz";
    };
    return Jazz;
}(Genre));
var specificMetals = [new PowerMetal(), new SymphonicMetal()];
specificMetals.forEach(function (m) { return console.log(m.name()); });
specificMetals.push(new Jazz());
var genres = specificMetals;
genres.forEach(function (m) { return console.log(m.name()); });
genres.push(new Jazz());
var specificMetals2 = genres;
specificMetals.forEach(function (m) { return console.log(m.name()); });
