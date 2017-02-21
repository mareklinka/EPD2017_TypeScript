abstract class Genre {
    abstract name(): string;
}

abstract class Metal extends Genre {
    // if I remove this here, type errors will go away
     someMetalStuff() {
        
    }
}

class AlternativeMetal extends Metal {
    name() {
        return "Alternative Metal";
    } 
}

class BlackMetal extends Metal {
    name() {
        return "Black Metal";
    } 
}

class PowerMetal extends Metal {
    name() {
        return "Power Metal";
    } 
}

class SymphonicMetal extends Metal {
    name() {
        return "Symphonic Metal";
    } 
}

class Jazz extends Genre {
    name() {
        return "Jazz";
    }

    somePopStuff() {

    }
}

let specificMetals: Array<Metal> = [new PowerMetal(), new SymphonicMetal()];
specificMetals.forEach(m => console.log(m.name()));
specificMetals.push(new Jazz())

let genres: Array<Genre> = specificMetals;
genres.forEach(m => console.log(m.name()));
genres.push(new Jazz());

var specificMetals2: Array<Metal> = genres;
specificMetals.forEach(m => console.log(m.name()));