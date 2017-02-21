var MyTpeScriptClass = (function () {
    function MyTpeScriptClass() {
        this.magicNumber = 42;
    }
    MyTpeScriptClass.prototype.doStuff = function () {
        console.log("Stuff not found");
    };
    return MyTpeScriptClass;
}());
var instance = new MyTpeScriptClass();
