const fs = require("fs")

fs.writeFileSync("./test.txt", "This is a test file");

// async 
fs.writeFile("./test.txt", "this is a async file write ", (err) => {
    return error;

})

// read file
fs.readFile("./trial.txt", "utf-8");
// read async
fs.readFile("./trial.txt", "utf-8", (err, result) => {
    if (err) {
        console.log("error");
    }
    console.log(result);

})

console.log("test");