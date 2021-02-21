//Cookies from the client side
const storeButton = document.getElementById("store-btn");
const retrieveButton = document.getElementById("retrieve-btn");

storeButton.addEventListener("click", () => {
  const userId = "u123";
  const user = { name: "Thomas", age: 49 };
//to set an expiration on the cookie you can use max-age and expiration
  document.cookie = `uid=${userId}; max-age=360`;
  document.cookie = `user=${JSON.stringify(user)}`;
});
//With cookies it is all or nothing
retrieveButton.addEventListener("click", () => {
  //get rid of the whitespace on the cookie object string
  const cookieData = document.cookie.split(";");
  const data = cookieData.map((item) => {
    return item.trim();
  });
  // show everything after the equal sign or in this case the user value
  console.log(data[1].split('=')[1]);
});


