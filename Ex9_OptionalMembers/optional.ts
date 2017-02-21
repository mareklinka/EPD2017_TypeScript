interface IOptions {
    target?:string,
    outDir?: string,
    outFile?: string

    name: string
}

let doSomething = (options: IOptions) => {
    if (options.target) {

    }

    if (options.outDir) {
        
    }

    if (options.outFile) {
        
    }

    console.log(options.name);
}

doSomething({ name: "BATMAN" });
doSomething({ name: "BATMAN", outDir: "", outFile: "" });
doSomething({ name: "BATMAN", someProperty: 12 });
doSomething({ name: "BATMAN", outDir: true });
doSomething({ outDir: true });