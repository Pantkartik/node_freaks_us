const math = require("./math")
// or use destructure it 
const { add, mul, div, sub } = require("./math")
const a = 7;
const b = 10;
console.log(math.add(a, b));
console.log(math.sub(a, b));
console.log(math.mul(a, b));
console.log(math.div(a, b));
