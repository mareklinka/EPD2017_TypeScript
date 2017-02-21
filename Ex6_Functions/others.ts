// some other function-related examples
class DifferentFunctions {
    parametersMustMatch(p1, p2) {

    }

    optional(p1, p2?) {

    }

    // this wont work - all optional parameters must come at the end
    wrongOptional(p1?, p2) {

    }

    default(name = "Jane Doe") {

    }

    rest(firstName: string, lastName: string, ...middleNames: string[]) {
        // this is basically just C#'s params
        return firstName + " " + middleNames.join(" ") + " " + lastName;
    }

    // rest parameters must come at the end
    wrongRest(firstName: string, ...middleNames: string[], lastName: string, ) {
        return firstName + " " + middleNames.join(" ") + " " + lastName;
    }
}

var instance = new DifferentFunctions();

// none of that JS nonsense here, no siree
instance.parametersMustMatch(1);
instance.parametersMustMatch(1, 2);
instance.parametersMustMatch(1, 2, 3);

// optional parameters
instance.optional(1); // this started working now
instance.parametersMustMatch(1, 2);
instance.parametersMustMatch(1, 2, 3);

// default parameters
instance.default();
instance.default("John Doe");

// rest
instance.rest("Tarja", "Turunen", "Soile", "Susanna");