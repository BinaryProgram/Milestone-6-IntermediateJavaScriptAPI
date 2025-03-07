// Keys, values, entries, delete, seal, freeze
const product = {
  items: "Power strip",
  price: 800,
  source: "China",
  color: "White",
};
const keys = Object.keys(product);
console.log(keys);

const values = Object.values(product);
console.log(values);

// pair -> tow dimensional array or array of array
const pair = Object.entries(product);
console.log(pair);

// delete

delete product.color;
//or
// const {name,...nameDelete} = product;
// console.log(nameDelete);

// freeze - Prevents adding, deleting, or modifying properties (fully immutable)

// Object.freeze(product);
product.weight = "0.3kg";
console.log(product);

// seal - Prevents adding or deleting properties but allows modification of existing values.
Object.seal(product);
product.price = 900;
product.stock = 50; // not allow
console.log(product);
