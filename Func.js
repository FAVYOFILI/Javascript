//### *3. Default Parameters*  
//*Question*: Write a function multiply(a, b = 1) where b defaults to 1 if not provided.

function multiply(a, b) {
  console.log(a * b);
}

multiply(5, 1)

//### *4. Rest Parameters (Variable Arguments)*  
//*Question*: Create a function sumAll(...numbers) that sums any number of arguments. 

function sumAll(a, b, c) {
  console.log(a + b + c)
}

sumAll(5, 6, 7);

//### *5. Arrow Function*  
//*Question*: Rewrite the add(a, b) function as an arrow function.  

//### *6. Function Returning Another Function*  
//*Question*: Write a function createMultiplier(x) that returns a new function to multiply its argument by x.  


function createMultiplier(x) {
  return function (y) {
    return x * y;
  };
}

const double = createMultiplier(2);
console.log(double(5));

//### *7. Higher-Order Function (Callback)*  
//*Question*: Write a function applyOperation(a, b, operation) where operation is a callback function (e.g., add or subtract).  

//### *8. Recursive Function*  
//*Question*: Write a recursive function factorial(n) that computes n! (e.g., 5! = 120).  

function factorial(n) {
  if (n === 0 || n === 1) {
    console.log("return 1")
  } else {
   console.log("return n-1")
  }
}

//### *9. IIFE (Immediately Invoked Function Expression)*  
//*Question*: Create an IIFE that logs "I run immediately!" upon script execution.



//### *10. Closures (Counter Function)*  
//*Question*: Write a function createCounter() that returns a function incrementing a private counter each time it’s called.  

//### *11. Function Hoisting*  
//*Question*: Explain why foo() works below, even though it’s called before declaration:  
//javascript
//foo(); // Outputs: "Bar!"  
//function foo() { console.log("Bar!"); } 

It worked because it's the default syntax of Function Expression

Syntax

Const name=
function name(params) {
  console.log
}
  

//### *12. Pure vs. Impure Function*  
//*Question*: Identify which function is pure and why:  
//javascript
// A:  
//function square(x) { return x * x; }  
// B:  
//let y = 0;  
//function addToY(x) { y += x; return y; }  

A is a pure function because the code is clean and understandable and when adding another function
it will not be added it B manner.
  

//### *13. Function Scoping (var vs. let)*  
//Question*: Predict the output:  
//javascript
//function test() {  
  //if (true) { var a = 1; let b = 2; }  
  //console.log(a); // ?  
 // console.log(b); // ?  
//}  


//### **14. Function Binding (this Context)**  
//*Question*: Fix this code to log "John":  
//javascript


const person = {  
  name: "John",  
  greet: function() { 
    console.log(name);
   }  
  }





//*### *15. Memoization (Optimization)*  
//*Question*: Write a memoized version of fibonacci(n) to avoid redundant calculations.  

//### *16. Currying*  
//*Question*: Convert add(a, b, c) into a curried function addCurry(a)(b)(c).  

//### *17. Function Composition*  
//*Question*: Write a function compose(f, g) that returns f(g(x)) (e.g., compose(double, square)(5) → 50).  

//### *18. Generator Function*  
//*Question*: Create a generator function range(start, end) that yields numbers in a range

let range = 14;
function Generator() {
  if (9 >= 15) {
    console.log("Start");
  } else {
    console.log("End");
  }
}




