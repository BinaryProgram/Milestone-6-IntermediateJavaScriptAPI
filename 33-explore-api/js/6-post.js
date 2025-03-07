//Load posts and display on the website with CSS

console.log("Inside post.js");
function dynamicPost() {
  fetch("https://jsonplaceholder.typicode.com/posts")
    .then((res) => res.json())
    .then((data) => loadPost(data));
}

function loadPost(posts) {
  const postContainer = document.getElementById("post-container");
  console.log(postContainer);

  for (const post of posts) {
    const postDiv = document.createElement("div");
    postDiv.classList.add('post-style');
    postDiv.innerHTML = `<h3>User - ${post.id} </h3>
     <h5>Post - ${post.title}  </h5>
     <p>Post Description - ${post.body}  </p>`;
    postContainer.append(postDiv);
  }
}

dynamicPost();

// GET, POST, PATCH, DELETE, CRUD, GET Vs POST
// Know about http status code

/*
 GET - Receive information about an api resource
 POST - Create a new resource.
 PATCH - Partially update an existing resource.
 PUT - Create a new resource or replace if the resource exist.
*/


