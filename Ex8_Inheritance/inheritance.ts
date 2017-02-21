abstract class MyBase {
    private myValue: number;

    constructor(value: number) {
        this.myValue = value;
    }

    baseMethod() {

    }

    abstract implementedMethod(): void;
}

abstract class MyBase2 {
    anotherBaseMethod() {

    }

    abstract anotherImplementedMethod();
}

interface IBase {
    implementedMethod(): void;
}

interface IFancy {
    haveTeaAtFive(): void;
}

class MyClass extends MyBase implements IBase, IFancy {
    private myText: string;

    constructor(value: number, text: string) {
        super(value);
        this.myText = text;
    }

    implementedMethod() {
         super.baseMethod();
        return this.myText;
    }

    haveTeaAtFive() {
        console.log("There is not enough biscuits, my dear chap")
    }
}