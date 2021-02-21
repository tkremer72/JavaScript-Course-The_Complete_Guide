// const movieList = document.getElementById('movie-list');

// //movieList.style.backgroundColor = 'red';//one way
// //movieList.style['backgroundColor'] = 'red';//second way
// movieList.style['background-color'] = 'red'; //third way
// movieList.style.display = 'block';

// //when we don't know all the properties in advance example
// const userChosenKeyName = 'level';//hard coded dummy example

// //Creating an object
// let person = {
//      //this string syntax for key names is only in objects
//      'first name': 'Thomas',
//      age: 30,
//      hobbies: [ 'Cooking', 'Hiking', 'Fishing'],
//      [userChosenKeyName]: '...',//this is how you would dynamically set properties
//      greet: function() {
//           alert('Hi there!');
//      },
//      1.5: 'Hello' //while on the person object this doesn't make much sense you can do this.
// };
// //complex approach to editing an object
// person.age = 49;
// //delete person.age;//this is cleaner code
// person.isAdmin = true;
// //person.age = undefined; //try to never set a property to undefined
// //person.age = null;//resets person.age to null, but keeps age as an active property

// // person.greet();
// const keyName = 'first name';
// console.log('This is using a const called keyName: ' + person[keyName]);//This is dynamic
// //this is how you would access that key name
// console.log("This is using the square brackets, person['first name']: " + person['first name']);
// console.log("This is using the new property as a number: " + person[1.5]); //this is how you acess the new property 1.5, can also wrap the number in quotes '1.5'
// console.log("This is using the person object: ",  person);

// const propKey = 'field 12';
// const people = {
//     [propKey]: 'Max'
// };
// console.log(people['field 12']);

/////////////////////////Application Starts Below//////////////////////////

const addMovieBtn = document.getElementById("add-movie-btn");
const searchBtn = document.getElementById("search-btn");

//create an empty array to store the movies

const movies = [];

//method or function to output the added movies

const renderMovies = (filter = "") => {
  const movieList = document.getElementById("movie-list");

  if (movies.length === 0) {
    //check if there are no movies and set the display

    movieList.classList.remove("visible"); //don't show display

    return;
  } else {
    movieList.classList.add("visible"); //show display
  }
  movieList.innerHTML = ""; //this is not ideal, clearing the list

  //search through the movies to see if movie title matches the filter criteria

  const filteredMovies = !filter
    ? movies
    : movies.filter((movie) => movie.info.title.includes(filter));

  filteredMovies.forEach((movie) => {
    const movieEl = document.createElement("li");

    //validation check to see if info is not included or not a proptery of the object

    //     if(!('info' in movie)) {

    //     }
    //Could also use

    // if(!(movie.info === undefined)) {

    // }

    //Use object destructuring uses a key name, can also use the rest operator

    const { info, ...otherProps } = movie;

    //Could also do the validation check here
    //     if(info) {

    //     }

    //console.log(otherProps); logs the other properties which is the id

    //below you can rename the title in the object destructuring

    //const { title: movieTitle } = info; //object destructuring to pull out the title

    /* const */ let { getFormattedTitle } = movie; //change const to let

    //set the getFormatted title by binding it to movie

    // getFormattedTitle = getFormattedTitle.bind(movie);

    //bind prepares a function for future execution, call or apply executes function right away
    let text =
      /* movie. */ /* info. */ /* movie. */ getFormattedTitle.call(
        movie
      ) /* .toUpperCase() */ + " - "; //to upper case method

    //movieEl.textContent = movie.info.title;

    for (const key in /* movie. */ info) {
      if (key !== "title" && key !== "_title") {
        //add the second part of the if check so you don't output the underscore title
        //below the first key is the key name the user enters, the second
        //is the key value the user entered which is why it is movie.info[key]

        text = text + `${key}: ${/* movie. */ info[key]}`; //dynamic property accessing
      }
    }

    movieEl.textContent = text;

    movieList.append(movieEl);
  });
};

//method or function to add a new movie

const addMovieHandler = () => {
  //get values from the DOM

  const title = document.getElementById("title").value;

  const extraName = document.getElementById("extra-name").value;

  const extraValue = document.getElementById("extra-value").value;

  //Validation check before creating the new movie

  if (
    //title.trim() === "" ||
    extraName.trim() === "" ||
    extraValue.trim() === ""
  ) {
    return;
  }

  //Create the new movie

  const newMovie = {
    info: {
      //title, //: title can omit the colon and the second title
      set title(val) {
        if (val.trim() === "") {
          this._title = "DEFAULT";
          return;
        }
        this._title = val;
      },
      get title() {
        return this._title;
      },
      [extraName]: extraValue, //dynamic property to add by user
    },

    //chaining methods together below creates a random id as a string

    id: Math.random().toString(), //add a random id to the new movie object

    //convert the title below with a function, note: Not an arrow function

    //     getFormattedTitle: function() {
    //           return this.info.title.toUpperCase();
    //     }

    // the above method is the long way, a shorter way is below

    getFormattedTitle() {
      //console.log(this);
      return this.info.title.toUpperCase();
    },
  };

  newMovie.info.title = title;
  //console.log(newMovie.info.title);

  //Add the new movie to the movies array
  movies.push(newMovie);

  //Log the new movie to the console

  //console.log(newMovie);

  //Render the moves

  renderMovies();
};

const searchMovieHandler = () => {
  //arrow functions don't know the this keyword
  //console.log(this);
  const filterTerm = document.getElementById("filter-title").value;

  renderMovies(filterTerm);
};

//connect the button to the method or function

addMovieBtn.addEventListener("click", addMovieHandler);

searchBtn.addEventListener("click", searchMovieHandler);
