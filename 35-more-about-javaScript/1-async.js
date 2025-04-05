// Asynchronous means, some statement will not execute sequentially. It will execute after some time.
// setTimeout,setinterval and fetch are some examples of asynchronous.

console.log(1);
console.log(2);
// This timeoutId will execute after 4 seconds.
const timeoutId = setTimeout(() => {
  console.log("lazy logged");
}, 4000);
console.log(4);
console.log(5);
console.log(6);

function doSomething() {
  console.log(3);
}
let num = 0;
const intervalId = setInterval(() => {
  console.log(num++);
}, 1000);
