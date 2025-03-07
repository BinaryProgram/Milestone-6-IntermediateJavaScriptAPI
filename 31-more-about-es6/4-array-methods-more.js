/*
    ******* reduce *******
    Use it when you need a single output value from an array (sum, object, string, etc.).
    Always provide an initial value to prevent unexpected behavior.

    array.reduce((accumulator, currentValue, currentIndex, array) => {
    // logic
    }, initialValue);

    Purpose: Accumulates a value by iterating over an array.
    Return Value: A single accumulated value.
    Use Case: Summing values, calculating totals, transforming arrays into objects.

*/
const numbers = [52, 25, 66, 90, 42];
const sum = numbers.reduce((total, current) => total + current, 0);
console.log(sum);

// array of object
const products = [
  { id: 501, brand: "lenovo", price: 75000 },
  { id: 301, brand: "hp", price: 85000 },
  { id: 604, brand: "dell", price: 65000 },
  { id: 902, brand: "lenovo", price: 175000 },
];

//map
const  price = products.map(product => product.price);
console.log(price);
const brand = products.map(b => b.brand);
console.log(brand);

// foreach
products.forEach(p => console.log(p.id));

//filter
const lowPrice = products.filter(p => p.price < 85000);
console.log(lowPrice);

//find
const affordable = products.find(p => p.price < 50000);
console.log(affordable);

//reduce
const totalPrice = products.reduce((accumulated,current) => accumulated+current.price, 0);
console.log(totalPrice);
