//indexedDB.
const storeButton = document.getElementById("store-btn");
const retrieveButton = document.getElementById("retrieve-btn");

//make the database be available globally
let db;

dbRequest = indexedDB.open("DummyStorage", 1);

dbRequest.onsuccess = function(event) {
     db = event.target.result;
};

dbRequest.onupgradeneeded = function (event) {
  //get access to the database
  db = event.target.result;

  //configure the database
  const objectStore = db.createObjectStore("products", { keyPath: "id" });

  objectStore.transaction.oncomplete = function (event) {
    const productsStore = db
      .transaction("products", "readwrite")
      .objectStore("products");
    productsStore.add({
      id: "p1",
      title: "A first product",
      price: 12.99,
      tags: ["Expensive", "Luxury"],
    });
  };
};

dbRequest.onerror = function (event) {
  console.log("Error!");
};

storeButton.addEventListener("click", () => {
     if(!db) {
          return;
     }
     const productsStore = db
     .transaction("products", "readwrite")
     .objectStore("products");
   productsStore.add({
     id: "p2",
     title: "A second product",
     price: 122.99,
     tags: ["Expensive", "Luxury"],
   });
});

retrieveButton.addEventListener("click", () => {
     const productsStore = db
     .transaction("products", "readwrite")
     .objectStore("products");
     const request = productsStore.get('p2');
     request.onsuccess = function() {
          console.log(request.result);
     }
});
