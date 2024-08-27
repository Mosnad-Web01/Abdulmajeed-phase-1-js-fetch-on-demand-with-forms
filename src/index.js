const init = () => {
  const inputForm = document.querySelector("form");

  inputForm.addEventListener("submit", (event) => {
    event.preventDefault();
    const input = document.querySelector("input#searchByID");

    fetch("http://localhost:3000/movies")
      .then((response) => response.json())
      .then((data) => {
        const movie = data.find((movie) => movie.id == input.value);
        const title = document.querySelector("h4#movieDetailsTitle");
        const summary = document.querySelector("section#movieDetailsSummary");

        if (movie) {
          title.innerText = movie.title;
          summary.innerText = movie.summary;
        } else {
          title.innerText = "Movie not found";
          summary.innerText = "";
        }
      })
      .catch((error) => {
        console.error("Error fetching movie data:", error);
      });
  });
};

document.addEventListener("DOMContentLoaded", init);
