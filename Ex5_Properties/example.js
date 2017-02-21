var PropertyContainer = (function () {
    function PropertyContainer() {
        this._value = "You can't see me! HE HE";
    }
    Object.defineProperty(PropertyContainer.prototype, "value", {
        get: function () {
            return this._value;
        },
        set: function (value) {
            this._value = value;
        },
        enumerable: true,
        configurable: true
    });
    return PropertyContainer;
}());
var instance = new PropertyContainer();
console.log(instance.value);
instance.value = "That's where you're wrong, kiddo";
// get-only property
var GetOnlyPropertyContainer = (function () {
    function GetOnlyPropertyContainer() {
        this._value = "You can't see me! HE HE";
    }
    Object.defineProperty(GetOnlyPropertyContainer.prototype, "value", {
        get: function () {
            return this._value;
        },
        enumerable: true,
        configurable: true
    });
    return GetOnlyPropertyContainer;
}());
var getOnly = new GetOnlyPropertyContainer();
console.log(getOnly.value);
getOnly.value = "I see you alright, I just can't set you";
