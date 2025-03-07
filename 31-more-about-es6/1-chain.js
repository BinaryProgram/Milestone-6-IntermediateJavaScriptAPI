//  Access Value, nested object, Optional chaining
// access data
const data = [{ id: 1, name: "javaScript", address: "ES6" }];
// console.log(data);
console.log(data[0].address);

const products = {
  stock: 5000,
  data: [
    { id: 1, brand: "lenovo", price: 65000 },
    { id: 2, brand: "Apple", price: 165000 },
  ],
};
// second product price
console.log(products.data[1].price);

const client = {
  id: 501,
  name: "jack mayer",
  address: {
    street: {
      first: "Wall street 21/4",
      second: "Queen 31/5",
      third: "Jackson height 15/6",
    },
    city: "New york",
  },
};
console.log(client.address.street.second);

// optional chain - ?
const user = {
  id: 501,
  name: "jack mayer",
  address: {
    // street: {
    //   first: "Wall street 21/4",
    //   second: "Queen 31/5",
    //   third: "Jackson height 15/6",
    // },
    city: "New york",
    country: "USA",
  },
};
// console.log(user.address.street.second);
// street? - if street not exist doesn't throw error.
console.log(user.address.street?.second);
