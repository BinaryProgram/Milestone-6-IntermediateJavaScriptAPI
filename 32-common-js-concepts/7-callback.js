// Callback function and pass different functions
/*
    Why Use Callbacks?
    Handle asynchronous operations like fetching data from an API.
    Ensure a function executes only after another function has completed.
    Improve code readability and maintainability.

    A callback function in JavaScript is a function that is passed as an argument to another function and is executed later, usually after an asynchronous operation or a certain condition is met.
*/

function greeting(greetingHandler, name) {
  greetingHandler(name);
}

// const name = 'Halim mama';
// const numbers = [45, 54, 78];
// const laptop = {price: 45000, brand: 'lenovo', memory: '8gb'};
function greetingHandler(name) {
  console.log("Good Morning", name);
}

function greetEvening(name) {
  console.log("Good Evening", name);
}

function greetNight(name) {
  console.log("Good Night", name);
}

greeting(greetingHandler, "Tom Hanks");
greeting(greetingHandler, "Tom Brady");
greeting(greetingHandler, "Tom Cruise");
greeting(greetEvening, "Tom Solaiman");
greeting(greetEvening, "Tom Salman");
greeting(greetNight, "Rasel");

function submitHandler() {
  console.log("submit button clicked");
}
document.getElementById("btn-submit").addEventListener("click", submitHandler);