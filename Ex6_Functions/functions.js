// standard named function
var Functions = (function () {
    function Functions() {
        this.anonymous = function (a, b) { return a + b; };
        // type for anonymous: (a: any, b: any) => any
        this.typedAnonymous = function (a, b) { return a + b; };
        // type for anonymous: (a: number, b: number) => number
        this.explicitlyTypedFunction = function (num, bool) { return "Some result"; };
        this.arrowFunction = function (a, b) { return a + b; }; // or, you know, just call it lambda
    }
    // type of arrowFunction: (a: any, b: any) => any
    Functions.prototype.boringSubtract = function (x, y) {
        return x + y;
    };
    Functions.prototype.someOtherMethod = function (x, y) {
        return x + y;
    };
    // type for boringSubtract: (a: any, b: any) => any
    // therefore:
    Functions.prototype.replaceAnonymous = function () {
        this.anonymous = this.boringSubtract; // works - signatures match
        this.typedAnonymous = this.boringSubtract; // works - typedAnonymous can only be called with numbers, number is compatible with any 
        this.typedAnonymous = this.someOtherMethod; // error - string is not compatible with number
        this.anonymous = this.arrowFunction; // works - signatures match
    };
    return Functions;
}());
