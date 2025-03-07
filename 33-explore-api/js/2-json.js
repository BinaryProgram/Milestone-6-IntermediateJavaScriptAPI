//Intro to JSON, JSON Structure, parse, stringify
console.log('Connected');

const user = { id: 1, name: "Gorib Aamir", job: "actor" };
// JavaScript Object Notation (JSON)

const stringified = JSON.stringify(user);
// console.log(user);
// console.log(stringified);
/* 
{ id: 1, name: 'Gorib Aamir', job: 'actor' }
{"id":1,"name":"Gorib Aamir","job":"actor"}
*/

const shop = {
  owner: "Alia",
  address: {
    street: "kochukhet voot er goli",
    city: "ranbir",
    country: "BD",
  },
  products: ["laptop", "mic", "monitor", "keyboard"],
  revenue: 45000,
  isOpen: true,
  isNew: false,
};
console.log(shop);
// JSON.stringify convert everything in string form, except boolean and number. 
//stringify add double quote to the key,value and string.  
const shopJSON = JSON.stringify(shop);
console.log(shopJSON);
// JSON.parse convert stringify to it's own format. It can  be array,object or object inside array.
const shopObj = JSON.parse(shopJSON);
console.log(shopObj);
