//POP
const fruits = ["Banana", "Orange", "Apple", "Mango"];
console.log(fruits.pop());

//Shift
const fruit = ["Banana", "Orange", "Apple", "Mango"];
console.log(fruit.shift());

//LENGTH
const amount = ["Banana", "Orange", "Apple", "Mango"];
console.log(amount.length);

//Push
const courses = [];
courses.push("Javascript");
console.log(courses);

const topics = ["Data Types", "Numbers"];
topics.push("String");
topics.push(5, 7, 89);
topics.push({ name: "favour", age: 6, sex: "female", isActive: true });
console.log(topics);

//Unshift
topics.unshift({ name: "favour", age: 6, sex: "female", isActive: true });
console.log(topics);

//Splice
const Subcourses = [
  "Cyber Security",
  "Javascript",
  "ReactJS",
  "NextJS",
  "Html",
];
Subcourses.splice(1, 2, "Data Analysis");
console.log(Subcourses);

//Concat

//IndexOf

//Include

//Slice
const sli = ["Seyi", "Favour", "Paschal", "Dire", "Tolani", "Onyeka"];
const ans = sli.slice(2, 5);
console.log(ans);

const fru = ["Banana", "Orange", "Lemon", "Apple", "Mango"];
const citrus = fru.slice(1, 3);
console.log(citrus);
