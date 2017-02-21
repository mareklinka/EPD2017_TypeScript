// some other function-related examples
var DifferentFunctions = (function () {
    function DifferentFunctions() {
    }
    DifferentFunctions.prototype.parametersMustMatch = function (p1, p2) {
    };
    DifferentFunctions.prototype.optional = function (p1, p2) {
    };
    // this wont work - all optional parameters must come at the end
    DifferentFunctions.prototype.wrongOptional = function (p1, p2) {
    };
    DifferentFunctions.prototype.default = function (name) {
        if (name === void 0) { name = "Jane Doe"; }
    };
    return DifferentFunctions;
}());
var instance = new DifferentFunctions();
// none of that JS nonsense here, no siree
instance.parametersMustMatch(1);
instance.parametersMustMatch(1, 2);
instance.parametersMustMatch(1, 2, 3);
// optional parameters
instance.optional(1); // this started working now
instance.parametersMustMatch(1, 2);
instance.parametersMustMatch(1, 2, 3);
// default parameters
instance.default();
instance.default("John Doe");
