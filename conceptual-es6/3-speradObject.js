const people = {
  name: "Rital",
  age: 2,
  address: {
    thana: "Kalihati",
    district: "Tangail",
  },
  numbers: [4, 3, 6, 7, 8],
  phone: 8534987,
};

// const extend = people;
const extend = { ...people };
extend.mail = "rital@gmail.com";
// console.log(extend);

// destructuring object
const {age, name, ...rest } = people;
console.log(rest,age,name);

// rename class key
const {phone:mobile,address:{thana}} = people;
console.log(thana,mobile);
