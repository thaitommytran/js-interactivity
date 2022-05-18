console.log("Hello World");

const message = document.querySelector("#message");

const addMovie = (evt) => {
  evt.preventDefault();

  const inputField = document.querySelector("input").value;
  console.log(inputField);

  const movie = document.createElement("li");
  console.log(movie);

  const movieTitle = document.createElement("span");
  console.log(movieTitle);

  movieTitle.textContent = inputField;
  addEventListener("click", crossOffMovie);
  movie.appendChild(movieTitle);

  const deleteBtn = document.createElement("button");
  deleteBtn.textContent = "X";
  deleteBtn.addEventListener("click", deleteMovie);
  movie.appendChild(deleteBtn);

  document.querySelector("ul").appendChild(movie);
  document.querySelector("input").value = "";
};

document.querySelector("form").addEventListener("submit", addMovie);

const deleteMovie = (evt) => {
  evt.target.parentNode.remove();
  message.textContent = "Movie deleted!";
};

const crossOffMovie = (evt) => {
  evt.target.classList.toggle("checked");
  if (evt.target.classList.contains("checked")) {
    message.textContent = "Movie watched!";
  } else {
    message.textContent = "Movie added back!";
  }
};
