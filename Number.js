//INTEGER
const one = 1;

//DECIMAL OR FLOAT
let deci = 0.2;

//.toFixed()
const fix = 4.56489;
console.log(fix.toFixed(3));

//.toString()
let point = 100;
console.log(point.toString());

//.toExponential()
const large = 2345678;
console.log(large.toExponential(2));

//.toPrecision()
const pi = 3.141578;
console.log(pi.toPrecision(3));

const i = 3.141578;
console.log(pi.toPrecision(3));

//isNaN()
const fri = "apple";
console.log(isNaN(fri));

//parseInt()
const mea = "45kg";
console.log(parseInt(mea));

//parseFloat()
console.log(parseFloat(mea));

//NumberisInteger()
const int = 4.45;
console.log(Number.isInteger(int));
