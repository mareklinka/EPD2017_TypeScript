class PropertyContainer {
    private _value = "You can't see me! HE HE";

    get value() {
        return this._value;
    }

    set value(value) {
        this._value = value;
    }
}

var instance = new PropertyContainer();
console.log(instance.value);
instance.value = "That's where you're wrong, kiddo";

// get-only property
class GetOnlyPropertyContainer {
    private _value = "You can't see me! HE HE";

    get value() {
        return this._value;
    }
}

var getOnly = new GetOnlyPropertyContainer();
console.log(getOnly.value);
getOnly.value = "I see you alright, I just can't set you";