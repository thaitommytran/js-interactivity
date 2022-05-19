console.log("Hello World");
console.log("===============");

const message = document.querySelector("#message");

const addMovie = (evt) => {
  evt.preventDefault();

  const inputField = document.querySelector("input");
  console.log("inputField: ", inputField);

  const movie = document.createElement("li");
  console.log("movie: ", movie);

  const movieTitle = document.createElement("span");
  console.log("movieTitle: ", movieTitle);
  console.log("===============");

  movieTitle.textContent = inputField.value;
  movieTitle.addEventListener("click", crossOffMovie);
  movie.appendChild(movieTitle);

  const deleteBtn = document.createElement("button");
  deleteBtn.textContent = "X";
  deleteBtn.addEventListener("click", deleteMovie);
  movie.appendChild(deleteBtn);

  document.querySelector("ul").appendChild(movie);
  inputField.value = "";
};

document.querySelector("form").addEventListener("submit", addMovie);

const deleteMovie = (evt) => {
  evt.target.parentNode.remove();

  message.textContent = `${evt.target.parentNode.firstChild.textContent} deleted!`;

  revealMessage();
};

const crossOffMovie = (evt) => {
  evt.target.classList.toggle("checked");

  if (evt.target.classList.contains("checked")) {
    message.textContent = `${evt.target.textContent} watched!`;
  } else {
    message.textContent = `${evt.target.textContent} added back!`;
  }

  revealMessage();
};

const revealMessage = () => {
  message.classList.remove("hide");

  setTimeout(() => {
    message.classList.add("hide");
  }, 1000);
};
