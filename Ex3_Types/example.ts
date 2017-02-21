// basic types
let myNumber = 42;
let myString = "Once upon a time..."
let myBool = true;

// enums
enum GameGenre {
    RPG,
    FPS,
    Platformer
}

let myGenre = GameGenre.RPG;

// arrays
let myArray = [1, 1, 2, 3, 5, 8, 13, 21];
let anotherArray = [GameGenre.FPS, GameGenre.Platformer];

// tuples
let x: [string, number];
x = ["abc", 17]

// unions
let union = [1, "two"]
union[5] = 2
union[6] = true

// interfaces
interface IRobot {
    machineUprising();
}

let instance: IRobot;

// classes
class Robot implements IRobot {
    machineUprising() {
        console.log("Success")
    }
}

instance = new Robot();
instance.machineUprising();

// any
let whatever: any = 100;
whatever = whatever / 2;
whatever = "This cannot be safe";
whatever = whatever / 5;

// explicit type declarations
let n: number = 5;

class Example {
    returnSomething(p1:boolean): string {
        return "ZZZORP";
    }
}