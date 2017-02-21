interface ISmallItem {
    getDimensions() : [number, number, number]
}

class SmallNail implements ISmallItem {
    getDimensions() {
        let result: [number, number, number] = [5,2,10];
        return result;
    }
}

class BowlingBall {
    
}

class Box<T> {
    private content = new Array<T>();

    add(item: T) {
        this.content.push(item);
    }
}

class SmallBox<T extends ISmallItem> {
    private content = new Array<T>();

    add(item: T) {
        this.content.push(item);
    }
}

class SmallNailBox extends SmallBox<SmallNail> {

}

let box = new Box<BowlingBall>();
box.add(new BowlingBall());
box.add(new SmallNail()); // this will work because of structural typing

var smallBox = new SmallBox();
smallBox.add(new SmallNail());
smallBox.add(new BowlingBall()); // wont work - different structure

var nailBox = new SmallNailBox();
nailBox.add(new SmallNail());

// generics for functions
let genericFunction: <T>(a:T) => void = <U>(a: U) => console.log(a);

// generic interfaces - same old same old
interface IGeneric<T> {
    doSomething<T>(arg: T);
}