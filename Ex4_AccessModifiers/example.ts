// public/default modifiers
class PublicAccess {
    myValue = 1;

    myOperation() {
        return "Example";
    }
}

let public = new PublicAccess();
public.myValue = 2;
public.myOperation();

// private modifier
class PrivateAccess {
    private myValue = 1;

    myOperation() {
        return "Example" + this.myValue;
    }
}


let private = new PrivateAccess();
private.myValue = 2;
private.myOperation();

// protected modifiuer
abstract class Access {
    protected value = 100;
}

class ProtectedAccess extends Access {
    letsRoll() {
        return this.value;
    }
}

let protected = new ProtectedAccess();
protected.value = 2;
protected.letsRoll();