const listElement = document.querySelector(".posts"); //get access to the list item
const postTemplate = document.getElementById("single-post"); //get access to the template element
const form = document.querySelector("#new-post form"); //get access to the form
const fetchButton = document.querySelector("#available-posts"); //get access to the fetch posts button
const postList = document.querySelector("ul"); //get access to the unordered list

function sendHttpRequest(method, url, data) {
  //const promise = new Promise((resolve, reject) => {
  //   const xhr = new XMLHttpRequest();
  // xhr.setRequestHeader('Content-Type': 'application/json');

  //   //Send a get request to the fake API
  //   xhr.open(method, url);

  //   //automatically convert the data to json format below.
  //   xhr.responseType = "json";

  //   //Get the response data and resolve the promise.
  //   xhr.onload = function () {
  //     if (xhr.status >= 200 && xhr.status < 300) {
  //       //if the status is between 200 & 300 get the response and resolve
  //       resolve(xhr.response);
  //       //console.log(xhr.response);
  //       //const postList = JSON.parse(xhr.response);
  //     } else {
  //       reject(new Error("Something went wrong!")); //Throw an error
  //     }
  //   };
  //   //Handle errors
  //   xhr.onerror = function () {
  //     reject(new Error("Failed to send request, please try again later!")); //Throw an error
  //   };

  //   xhr.send(JSON.stringify(data));

  // });
  //return promise;

  //Use the newer fetch API
  return fetch(url, {
    method: method,//for form data you would use just the body: data instead of body:JSON.stringify(data); you also don't need headers
    body: data,
    //body: JSON.stringify(data),
    // headers: {
    //   'Content-Type': 'application/json'
    // }//Below is error handling with the fetch API, not the most graceful but it is what it is
  }).then((response) => {
    if(response.status >= 200 && response.status < 300) {
    return response.json();
    } else {
      return response.json().then(errorData => {
              console.log(errorData);
              throw new Error('Something went wrong - server-side!')
      })
    }
  }).catch(error => {
    console.log(error);
    throw new Error('Something went wrong!')
  });
}
//GET request to fetch posts
async function fetchPosts() {
  try {
    const responseData = await sendHttpRequest(
      "GET",
      "https://jsonplaceholder.typicode.com/posts"
    );
    const postList = responseData;
    // console.log(postList);
    //loop through the posts and display them on the html document
    for (const post of postList) {
      const postElement = document.importNode(postTemplate.content, true);
      postElement.querySelector("h2").textContent = post.title.toUpperCase();
      postElement.querySelector("p").textContent = post.body;
      postElement.querySelector("li").id = post.id;
      listElement.append(postElement);
    }
 } catch (error) {
    alert(error.message);
  }
}
//fetchPosts();

//POST request to create a post
async function createPost(title, content) {
  const userId = Math.random();
  const post = {
    title: title,
    body: content,
    userId: userId,
  };
//Using form data for apis that accept it, which these apis do not
const formData = new FormData(form);//to get values from the form point to the form in form data
//Be sure to include the name field on the form elements to pull those values in.
//formData.append('title', title);
//formData.append('body', content);
formData.append('userId', userId);

  //sendHttpRequest("POST", "https://jsonplaceholder.typicode.com/posts", post);
  //request using form data is below
  sendHttpRequest("POST", "https://jsonplaceholder.typicode.com/posts", formData);
  //console.log(post);
}

//Connect the buttons and add event listeners to the http requests
fetchButton.addEventListener("click", fetchPosts);

form.addEventListener("submit", (event) => {
  event.preventDefault();
  const enteredTitle = event.currentTarget.querySelector("#title").value;
  const enteredContent = event.currentTarget.querySelector("#content").value;
  createPost(enteredTitle, enteredContent);
});

//Add an event listener to the unordered list for deleting posts with the delete button
postList.addEventListener("click", (event) => {
  if (event.target.tagName === "BUTTON") {
    // console.log('Clicked the button!')//Check to see if the above only works when button is clicked
    const postId = event.target.closest("li").id; //get the closest list item id
    //console.log(postId);//Check to see if the above code works
    sendHttpRequest(
      "DELETE",
      `https://jsonplaceholder.typicode.com/posts/${postId}`
    ); //send the actual http request
  }
});
