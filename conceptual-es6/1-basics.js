// primitive datatypes used direct memory location
const x = 6;
const y = true;
const a = 'Hello';

let z = x;
z = 5;
console.log('x - ',x); // x value sill 6
console.log('z - ',z); // z value set 5

// non primitive used memory reference
const movie = {name:'Ferdinand'};

const release = movie;
release.date = 'July 2024';
console.log(release);
// also added in movie object  
console.log(movie);

const numbers = [4, 6, 8, 3];
const moreNumbers = numbers;
moreNumbers.push(27);
console.log(moreNumbers);
// 27 also added in numbers array
console.log(numbers);