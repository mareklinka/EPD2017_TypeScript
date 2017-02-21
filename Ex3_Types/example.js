// basic types
var myNumber = 42;
var myString = "Once upon a time...";
var myBool = true;
// enums
var GameGenre;
(function (GameGenre) {
    GameGenre[GameGenre["RPG"] = 0] = "RPG";
    GameGenre[GameGenre["FPS"] = 1] = "FPS";
    GameGenre[GameGenre["Platformer"] = 2] = "Platformer";
})(GameGenre || (GameGenre = {}));
var myGenre = GameGenre.RPG;
// arrays
var myArray = [1, 1, 2, 3, 5, 8, 13, 21];
var anotherArray = [GameGenre.FPS, GameGenre.Platformer];
// tuples
var x;
x = ["abc", 17];
// unions
var union = [1, "two"];
union[5] = 2;
union[6] = true;
var instance;
// classes
var Robot = (function () {
    function Robot() {
    }
    Robot.prototype.machineUprising = function () {
        console.log("Success");
    };
    return Robot;
}());
instance = new Robot();
instance.machineUprising();
// any
var whatever = 100;
whatever = whatever / 2;
whatever = "This cannot be safe";
whatever = whatever / 5;
// explicit type declarations
var n = 5;
var Example = (function () {
    function Example() {
    }
    Example.prototype.returnSomething = function (p1) {
        return "ZZZORP";
    };
    return Example;
}());
