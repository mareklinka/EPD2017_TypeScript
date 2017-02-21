// no namespace
// // Some samples to try
// let strings = ["Hello", "98052", "101"];

// // Validators to use
// let validators: { [s: string]: StringValidator; } = {};
// validators["ZIP code"] = new ZipCodeValidator();
// validators["Letters only"] = new LettersOnlyValidator();

// // Show whether each string passed each validator
// for (let s of strings) {
//     for (let name in validators) {
//         let isMatch = validators[name].isAcceptable(s);
//         console.log(`'${ s }' ${ isMatch ? "matches" : "does not match" } '${ name }'.`);
//     }
// }

// without import
// // Some samples to try
// let strings = ["Hello", "98052", "101"];

// // Validators to use
// let validators: { [s: string]: Validation.StringValidator; } = {};
// validators["ZIP code"] = new Validation.ZipCodeValidator();
// validators["Letters only"] = new Validation.LettersOnlyValidator();

// // Show whether each string passed each validator
// for (let s of strings) {
//     for (var n in validators) {
//         console.log(`"${ s }" - ${ validators[n].isAcceptable(s) ? "matches" : "does not match" } ${ name }`);
//     }
// }

// with import
// import v = Validation
// import lov = v.LettersOnlyValidator
// import zcv = v.ZipCodeValidator

// // Some samples to try
// let strings = ["Hello", "98052", "101"];

// // Validators to use
// let validators: { [s: string]: v.StringValidator; } = {};
// validators["ZIP code"] = new lov();
// validators["Letters only"] = new zcv();

// // Show whether each string passed each validator
// for (let s of strings) {
//     for (var n in validators) {
//         console.log(`"${ s }" - ${ validators[n].isAcceptable(s) ? "matches" : "does not match" } ${ name }`);
//     }
// }