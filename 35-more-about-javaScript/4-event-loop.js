//JavaScript event loop and concurrency model
//JavaScript is a single-threaded language, meaning it has only one call stack and one memory heap. As a result, it can only do one thing at a time. However, JavaScript is also non-blocking, meaning that it can handle multiple operations at the same time. This is possible because of the event loop and the concurrency model in JavaScript. The event loop is responsible for handling asynchronous operations in JavaScript, such as setTimeout, setInterval, and fetch. The event loop works by continuously checking the call stack and the task queue. When the call stack is empty, the event loop takes the first task from the task queue and pushes it onto the call stack. This process continues until both the call stack and the task queue are empty. This allows JavaScript to handle asynchronous operations without blocking the main thread. In this way, JavaScript can handle multiple operations at the same time, making it a powerful and versatile language for web development.
//JavaScript event loop and concurrency model   1. JavaScript is a single-threaded language, meaning it has only one call stack and one memory heap. 2. JavaScript is also non-blocking, meaning that it can handle multiple operations at the same time. 3. This is possible because of the event loop and the concurrency model in JavaScript. 4. The event loop is responsible for handling asynchronous operations in JavaScript, such as setTimeout, setInterval, and fetch. 5. The event loop works by continuously checking the call stack and the task queue. 6. When the call stack is empty, the event loop takes the first task from the task queue and pushes it onto the call stack. 7. This process continues until both the call stack and the task queue are empty. 8. This allows JavaScript to handle asynchronous operations without blocking the main thread. 9. In this way, JavaScript can handle multiple operations at the same time, making it a powerful and versatile language for web development.
function a() {
  console.log("a");
  b();
  console.log("aa");
}
function b() {
  console.log("b");
  d();
  console.log("bb");
}
function d() {
  console.log("d");
  console.log("dd");
}

function x() {
  console.log("x");
  y();
  console.log("xx");
}
function y() {
  console.log("y");
  z();
  console.log("yy");
}
function z() {
  console.log("z");
  console.log("zz");
}

setTimeout(() => {
  console.log("inside timeout");
}, 2000);

fetch("https://jsonplaceholder.typicode.com/todos/1")
  .then((response) => response.json())
  .then((json) => console.log(json));

a();
x();