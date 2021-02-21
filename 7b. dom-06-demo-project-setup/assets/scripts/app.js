//Three ways to get the first modal
const addMovieModal = document.getElementById("add-modal");
// const addMovieModal = document.querySelector('#add-modal');
//const addMovieModal = document.body.children[1];

//get the header button
const startAddMovieButton = document.querySelector("header button");
//const startAddMovieButton = document.querySelector('header').lastElementChild;

const modalBackdrop = document.getElementById("backdrop"); // or
// const modalBackdrop = document.body.firstElementChild;

const cancelAddMovieButton = addMovieModal.querySelector(".btn--passive");
const confirmAddMovieButton = cancelAddMovieButton.nextElementSibling;
const userInputs = addMovieModal.querySelectorAll("input"); //or
//const userInputs = addMovieModal.getElementsByTagName('input');

//get access to the entry text section
const entryTextSection = document.getElementById('entry-text');
const deleteMovieModal = document.getElementById('delete-modal');

//Create a variable to store movies set to an empty array
const movies = [];

//Show the backdrop background
const toggleModalBackdrop = () => {
  modalBackdrop.classList.toggle("visible");
};

//update the user interface
const updateUI = () => {
  if(movies.length === 0) {
    entryTextSection.style.display = 'block';
  } else {
    //if there are movies set the display to none
    entryTextSection.style.display = 'none';
  }
};

//Close the delete movie modal
const closeDeleteMovieModal = () => {
  toggleModalBackdrop();
  deleteMovieModal.classList.remove('visible');
};

//Delete a movie
const deleteMovieHandler = movieId => {
  let movieIndex = 0;
  for(const movie of movies) {
    if(movie.id === movieId) {
      break;
    }
    movieIndex++;
  }
  //splice takes two arguments the index and the number of items
  movies.splice(movieIndex, 1);
  const listRoot = document.getElementById('movie-list');
  listRoot.children[movieIndex].remove();
  //backwards compatable way
  //listRoot.removeChild(listRoot.children[movieIndex]);
  closeDeleteMovieModal();
  updateUI();
};



//function to remove a movie from the movie list
const startDeleteMovieHandler = movieId => {
    deleteMovieModal.classList.add('visible');
    toggleModalBackdrop();
    const cancelDeletionButton = deleteMovieModal.querySelector('.btn--passive');
    let confirmDeletionButton = deleteMovieModal.querySelector('.btn--danger');
    //replace existing add event listeners or buttons before continuing on, hacky work around
    confirmDeletionButton.replaceWith(confirmDeletionButton.cloneNode(true));
    //get access to the new confirm deletion button
    confirmDeletionButton = deleteMovieModal.querySelector('.btn--danger');


    cancelDeletionButton.removeEventListener('click', closeDeleteMovieModal);
    

    cancelDeletionButton.addEventListener('click', () => {
      closeDeleteMovieModal();
    });
    confirmDeletionButton.addEventListener('click', deleteMovieHandler.bind(null, movieId));
};

//render the new movie element 
const renderNewMovieElement = (id, title, imageUrl, rating) => {
    const newMovieElement = document.createElement('li');
    newMovieElement.className = 'movie-element';
    newMovieElement.innerHTML = `
    <div class="movie-element__image">
      <img src="${imageUrl}" alt="${title}">
    </div>
    <div class="movie-element__info">
      <h2>${title}</h2>
      <p>${rating}/5 stars</p>
    </div>
    `;
    //add an event listener that removes a movie
    newMovieElement.addEventListener('click', startDeleteMovieHandler.bind(null, id))
    const listRoot = document.getElementById('movie-list');
    listRoot.append(newMovieElement);
};



const closeMovieModal = () => {
  addMovieModal.classList.remove('visible');
};

//standalone function for readability for the startAddMovieButton
const showMovieModal = () => {
  addMovieModal.classList.add("visible");
  toggleModalBackdrop();
};

//Clear the input fields
const clearMovieInputs = () => {
  //dynamically loop through all user inputs and clear each field
  for(const userInput of userInputs) {
    userInput.value = '';
  }
};

//standalone function for the modal cancel button
const cancelAddMovieHandler = () => {
  closeMovieModal();
  toggleModalBackdrop();
  //clear the inputs
  clearMovieInputs();
};

//standalone function to add a movie
const addMovieHandler = () => {
  const titleValue = userInputs[0].value;
  const imageUrlValue = userInputs[1].value;
  const ratingValue = userInputs[2].value;
  if (
    titleValue.trim() === "" ||
    imageUrlValue.trim() === "" ||
    ratingValue.trim() === "" ||
    +ratingValue < 1 ||
    +ratingValue > 5
  ) {
       alert('Please enter valide values (rating between 1 and 5).');
       return;
  }
  //create a new movie 
  const newMovie = {
    //create a random id and convert it to a string
    id: Math.random().toString(),
    title: titleValue,
    image: imageUrlValue,
    rating: ratingValue
  };
//push the new movie onto the movies array
movies.push(newMovie);
//console log movies to see if this works
console.log(movies);
//close the add movie modal
closeMovieModal();
//toggle the backdrop
toggleModalBackdrop();
//clear the inputs 
clearMovieInputs();
//render the new movie element
renderNewMovieElement(newMovie.id, newMovie.title, newMovie.image, newMovie.rating);
//update the user interface
updateUI();
}

//standalone function to close the modal when background is clicked.
const backdropClickHandler = () => {
  closeMovieModal();
  closeDeleteMovieModal();
  clearMovieInputs();
};

//Open the modal
startAddMovieButton.addEventListener("click", showMovieModal);

//close the modal by clickin backdrop
modalBackdrop.addEventListener("click", backdropClickHandler);

//close the modal with the cancel button
cancelAddMovieButton.addEventListener("click", cancelAddMovieHandler);

//Add movie confirmation
confirmAddMovieButton.addEventListener("click", addMovieHandler);
