//Local storage
const storeButton = document.getElementById("store-btn");
const retrieveButton = document.getElementById("retrieve-btn");

const userId = "u123";
const user = {
  name: "Thomas",
  age: 49,
  hobbies: ["Hiking", "Cooking", "Fishing"],
};

storeButton.addEventListener("click", () => {
  sessionStorage.setItem("uid", userId);
  localStorage.setItem('user', JSON.stringify(user));
});

retrieveButton.addEventListener("click", () => {

  const extractedId = sessionStorage.getItem("uid");

  const extractedUser = JSON.parse(localStorage.getItem('user'));

  if(extractedUser) {
       console.log(extractedUser);
  } else {
       console.log('Could not find any users.')
  }

  if (extractedId) {
    console.log("Got the id - " + extractedId);
  } else {
    console.log("Could not find the user id.");
  }
});
