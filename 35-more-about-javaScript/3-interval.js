//settimeout, setInterval and clearInterval

console.log("1");
console.log("2");
// setTimeout will take minimum 4sec to execute
// setTimeout(() => {
//     console.log("3");
// }, 4000);
console.log("4");
console.log("5");

// setInterval and clearInterval
let counter = 0;
const interval = setInterval(() => {
    counter++;
    console.log(interval,counter);
    if (counter === 5) {
        clearInterval(interval);
    }
}, 1000);
