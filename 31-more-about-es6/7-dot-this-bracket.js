// this keyword, Dot notation vs bracket notation
const person = {
  name: "kodom ali",
  job: "badam khai",
  3: "third",
  "add-dress": "kochu khet",
};
const prop = "job";
console.log(person.job);
console.log(person["job"]);
console.log(person[prop]);
console.log(person["3"]);
console.log(person["add-dress"]);

// this keyword
class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
  sleep() {
    console.log(`Sleeping now ${this.name}`);
  }
  activity() {
    this.sleep();
  }
}

const kodom = new Person("Kodom Ali", 21);
console.log(kodom);
kodom.sleep();
const badam = new Person("Kacha badam", 23);
badam.sleep();

// bejal
// const lazy = kodom.sleep;
// lazy();
