const complexObject = {
  id: 1,
  name: "Main Object",
  info: {
    description: "This is a complex nested object.",
    author: {
      firstName: "John",
      lastName: "Doe",
    },
    address: {
      place: "No Where",
    },
  },
  data: {
    values: [10, 20, 30],
    settings: {
      isEnabled: true,
      maxItems: 5,
    },
  },
};
// If exist then proceed ahead.
console.log(complexObject.contact);
console.log(complexObject?.contact?.phone);

// we use optional chaining to overcome unexpected error
console.log(complexObject.info.address.contact?.email);
// This will throw an error
// console.log(complexObject.info.address.contact.email);
// one step unknown key access return undefine
console.log(complexObject.info.address.contact);
