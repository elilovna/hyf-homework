let moviesWithTag;
const fetchMovies = () => {
    fetch("https://gist.githubusercontent.com/pankaj28843/08f397fcea7c760a99206bcb0ae8d0a4/raw/02d8bc9ec9a73e463b13c44df77a87255def5ab9/movies.json")
        .then((res) => { return res.json() })
        .then((movies) => {
            moviesWithTag = movies.map((movie) => {
                let newMovie = { ...movie };// copy object 
                if (newMovie.rating >= 7) {
                    newMovie.tag = "good";
                } else if (newMovie.rating >= 4 && newMovie.rating < 7) {
                    newMovie.tag = "average";
                } else if (newMovie.rating < 4) {
                    newMovie.tag = "bad";
                }
                return newMovie;
            })
            console.log(moviesWithTag);

            // create list with movies title
            // const list = () => {
            //     const ul = document.createElement("ul");
            //     moviesWithTag.slice(0, 20).forEach(movie => {
            //         ul.innerHTML += `<li>${movie.title}</li>`;
            //     })
            //     document.body.appendChild(ul);
            // }
            // list();

            //Add a input field, and a button to perform search. Use .filter method on arrays to filter on the titles.

        })
}
fetchMovies();

let ul = document.createElement("ul");
document.body.appendChild(ul);

let h3 = document.createElement("h3");
document.body.appendChild(h3);


var button = document.createElement("button");
button.innerHTML = "Do Something";

const getPoster = (movies) => {
    movies.forEach(movie => {
        const li = document.createElement("li");
        li.innerText = movie.title;

        const button = document.createElement("button");
        button.innerText = "Get poster";
        button.addEventListener("click", () => {
            console.log(movie.year)
            fetch(`http://www.omdbapi.com/?apikey=e58db34c&t=${movie.title}&y=${movie.year}`)
                .then((res) => res.json())
                .then((json) => {
                    console.log(json);
                    if (json.Response == "False") {
                        console.log(json.Error)
                    } else if (json.Poster === "N/A") {
                        console.log("Movie doesn't have a poster")
                    } else {
                        img.src = json.Poster;
                    }
                })
        });
        li.appendChild(button);

        const img = document.createElement("img");
        li.appendChild(img);

        ul.appendChild(li);
    })
}

const averageRating = (movies) => {
    h3.innerHTML = "";
    const sum = movies.reduce((acc, movie) => {
        return acc + movie.rating
    }, 0)

    let averageRating = sum / movies.length;
    h3.innerHTML = `The average rating of movies: ${averageRating.toFixed(1)}`;
}

const search = () => {
    ul.innerHTML = "";
    const movies = moviesWithTag.filter((movie) => {
        const value = document.getElementById('input_id').value;
        return movie.title.includes(value);
    }) 
    getPoster(movies);
    averageRating(movies);
}

const radioFilter = (tag) => {
    ul.innerHTML = "";
    let movies = moviesWithTag.slice(0, 20);
    if (tag) {
        movies = moviesWithTag.filter(movie => {
            return movie.tag == tag;
        })
    } 
    getPoster(movies.slice(0, 20));
    averageRating(movies);
}
