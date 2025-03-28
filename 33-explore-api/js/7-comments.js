//  async await
function loadComments() {
  fetch("https://jsonplaceholder.typicode.com/comments")
    .then((res) => res.json())
    .then((data) => console.log(data))
    .catch((error) => console.error("error happend", error));
}

const loadComments2 = async () => {
  try {
    const res = await fetch("https://jsonplaceholder.typicode.com/comments");
    const data = await res.jsfn();
    console.log(data);
  } catch (error) {
    console.error("error happend", error);
  }
};
