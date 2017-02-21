// standard named function
class Functions {
    private anonymous = function (a,b) { return a + b };
    // type for anonymous: (a: any, b: any) => any

    private typedAnonymous = function(a: number, b: number) { return a + b };
    // type for anonymous: (a: number, b: number) => number

    private explicitlyTypedFunction: (i1: number, i2: boolean) => string = function (num, bool) { return "Some result" };

    private arrowFunction = (a, b) => a + b; // or, you know, just call it lambda
    // type of arrowFunction: (a: any, b: any) => any

    boringSubtract(x, y) {
        return x + y;
    }

     someOtherMethod(x: string, y: string) {
        return x + y;
    }

    // type for boringSubtract: (a: any, b: any) => any
    // therefore:
    replaceAnonymous() {
        this.anonymous = this.boringSubtract; // works - signatures match
        this.typedAnonymous = this.boringSubtract; // works - typedAnonymous can only be called with numbers, number is compatible with any 
        this.typedAnonymous = this.someOtherMethod; // error - string is not compatible with number
        this.anonymous = this.arrowFunction; // works - signatures match
    }
}