// Closure, encapsulation, private variable
/* 
    Real-World Use Cases:
    Data encapsulation (private variables)
    Memoization & caching
    Event handlers & callbacks
    SetTimeout & SetInterval

*/
function kitchen() {
  let roast = 0;
  return function () {
    roast++;
    return roast;
  };
}

// Whenever I call firstServer() and secondServer(). They will remember their own instance. 
const firstServer = kitchen();
const secondServer = kitchen();
console.log(firstServer());
console.log(firstServer());
console.log(firstServer());
console.log(firstServer());

/*
    A closure in JavaScript is a function that remembers the variables from its outer scope even after the outer function has finished executing. This allows the function to access and manipulate those variables even after the execution context of the outer function is gone
*/
