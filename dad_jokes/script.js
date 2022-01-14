const jokeEl = document.getElementById("joke");
const jokeBtn = document.getElementById("jokeBtn");

const generateJoke = async () => {
  const config = {
    headers: { Accept: "application/json" },
  };
  const response = await fetch("https://icanhazdadjoke.com/", config);

  const data = await response.json();

  jokeEl.innerHTML = data.joke;
};

generateJoke();

jokeBtn.addEventListener("click", generateJoke);
