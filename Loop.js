//FOR LOOP
for (let i = 1; i <= 5; i++) {
    console.log("Share Sharwama");
    
}
    
for (let i = 5; i >=1 ; i--) {
   console.log("Share Bread")
    
}

//WHILE LOOP
//increment multiplied by 2
let count = 1;

while (count <=10) {
    console.log(count);
    count *= 2;
}

// increment added by 2
let counts = 1;

while (counts <=5) {
    console.log(counts);
    counts+=2
}

//let answer = ""

//while (answer !== "yes") {
 //   prompt ("Do you like javascript? yes/no");
//}
//console.log("great! you like javascript")


//FOR OFF
const fruits = ["apple", "banana", "cherry", "date"];

for (const fruit of fruits) {
    console.log(fruit);
}


//FOR IN
let person = {name: "favour", age: 16, city: "lagos"};

for (let key in person) {
    console.log(key + ":" + person[key]);
}