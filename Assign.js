//Strings (5 questions)
//Convert this string to uppercase:
let greet = "hello world";
console.log(greet.toUpperCase());

//Extract "world" from this string using slice():

let greeting = "hello world";
let word = greeting.slice(5);
console.log(word);

//Replace all spaces with hyphens in this string:

let text = "hello world";
console.log(text.toString("hello world"));

//Check if this string starts with "Mr":
let sentence = "JavaScript is awesome";
console.log(sentence.includes("Mr"));

//Split this string into an array of words:

let name = "Mr. Smith";
console.log(name.split());

//let phrase = "apple,banana,orange";

//Convert this string to a number:

let numStr = "42";
console.log(parseInt(numStr));

//Round this number to 2 decimal places:

let price = 19.9876;
console.log(price.toPrecision(2));

//Generate a random number between 1 and 10:

//Check if this value is NaN:

let result = 0 / 0;
console.log(isNaN(result));

//Convert this number to a hexadecimal string:

let value = 255;
console.log(value.toString(16));

//Add "grape" to the end of this array:

let fruits = ["apple", "banana"];
fruits.push("grape");
console.log(fruits);

//Remove the first element from this array:

let colors = ["red", "green", "blue"];
console.log(colors.shift());

//Combine these two arrays:

let arr1 = [1, 2];
let arr2 = [3, 4];
arrs = [arr1 + arr2];
console.log(arrs.concat());

//Reverse this array:

let letters = ["a", "b", "c"];
letters.reverse;
console.log(letters.reverse());

//Check if "banana" exists in this array:

let groceries = ["apple", "orange", "banana"];
console.log;
//Access the age property of this object:

let person = { name: "John", age: 30 };
console.log(Object.values(person));

//Add a new property to this object:

let car = { make: "Toyota", model: "camry" };
let cars = { make: "Mercedes Benz", type: "GLK 350" };
let newcars = Object.assign({}, car, cars);
console.log(newcars);

//Get all keys of this object:

let student = { name: "Alice", grade: "A" };
console.log(Object.keys(student));

//Delete the password property from this object:

let user = { name: "Bob", password: "123" };
delete user.password;
console.log(user);

//Check if this object has an "email" property:

//let contact = { name: "Sarah", phone: "555-1234" };
//console.log(contact.includes("email"));
