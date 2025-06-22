function name(params) {
    
}

function sayHello () {
    console.log("Hello World")
}
sayHello();

//With Parameter
function greet (name) {
   console.log(`hello + ${name}`);
   console.log("hello" +  name + "!");
}

greet ("Yemi");
greet("Bestie");
greet(4);

function add(a, b) {
    console.log(a + b);
}

add(2, 4);

function square(number) {
    return number * number * 4;
}
console.log(square(3));

function check(a, b, c) {
    if (a > b || a > c ) {
      console.log("improper fraction");  
    } else {
        console.log("improper fraction");
    }
}

check(5, 4, 2);


