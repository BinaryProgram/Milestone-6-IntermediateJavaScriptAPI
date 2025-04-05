// Promise, Async/Await
// promise denote  - pending -> resolved / fulfilled -> rejected
const myLoader = () => {
  return new Promise((resolve, reject) => {
    const success = Math.random();
    if (success >= 0.5) {
      resolve(success);
    } else {
      reject(success);
    }
  });
};
myLoader()
  .then((success) => {
    console.log("Success:", success);
  })
  .catch((error) => {
    console.log("Error:", error);
  });

// using of async/await
/*
   fetch("https://jsonplaceholder.typicode.com/posts").then((response) => {
     return response.json();
   }).then((data) => {
     console.log(data);
   }).catch((error) => {
     console.log(error);
   });
*/

// Best way of using async/await
async function fetchData() {
    const response = await fetch("https://jsonplaceholder.typicode.com/posts");
    const data = await response.json();
    console.log(data);
}
fetchData();

const taskMaster = async () => {
    const response = await fetch("https://jsonplaceholder.typicode.com/posts");
    const data = await response.json();
    console.log(data);
}
taskMaster();
