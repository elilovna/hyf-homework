let numbers = [1, 2, 3, 4];
let newNumbers = [];

for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] % 2 !== 0) {
        newNumbers[i] = numbers[i] * 2;
    }
}

console.log("The doubled numbers are", newNumbers); // [2, 6]

// Step 1: Map, filter
const oddNumbers = numbers
    .filter(num => num % 2 !== 0)
    .map(num => num * 2);
console.log("The doubled numbers are", oddNumbers); // [2, 6]

// Step 2:
const movies = () => {
    fetch("https://gist.githubusercontent.com/pankaj28843/08f397fcea7c760a99206bcb0ae8d0a4/raw/02d8bc9ec9a73e463b13c44df77a87255def5ab9/movies.json")
        .then((res) => { return res.json() })
        .then((movies) => {
            console.log(movies);
            let moviesWithTag = movies.map((movie) => {
                let newMovie = { ...movie };// copy object 
                if (newMovie.rating >= 7) {
                    newMovie.tag = "good";
                } else if (newMovie.rating >= 4 && newMovie.rating < 7) {
                    newMovie.tag = "average";
                } else if (newMovie.rating < 4) {
                    newMovie.tag = "bad";
                }
                return newMovie;
            });

            //Calculate the average rating of all the movies
            const sumOfRating = moviesWithTag.reduce((acc, value) => {
                return acc + value.rating
            }, 0);
            console.log("sum: " + sumOfRating);
            const averageRating = sumOfRating / moviesWithTag.length;
            console.log("The average rating of all movies is: " + averageRating);

            //Count the total number of good, average and bad movies
            const tagsAmount = moviesWithTag.reduce((acc, value) => {
                let newAcc = { ...acc };
                // newAcc[value.tag]++;
                switch (value.tag) {
                    case "good": newAcc.good++; break;
                    case "average": newAcc.average++; break;
                    case "bad": newAcc.bad++; break;
                    default: break;
                }
                return newAcc;
            }, {
                    good: 0,
                    average: 0,
                    bad: 0
                })
            console.log(tagsAmount);

            /*Count he number of movies containing the following keywords: ["The", "dog", "who", "is", "not", "a", "man"]. 
            Can you make sure the search is case insensitive?*/
            const moviesWithKeywords = () => {
                const moviesWithKeywords = moviesWithTag.filter(obj => {
                    const keywords = ["The", "dog", "who", "is", "not", "a", "man"];
                    const words = obj.title.toUpperCase().split(" ");

                    const anyKeyword = keywords.reduce((acc, value) => {
                        return acc || words.indexOf(value.toUpperCase()) !== -1
                    }, false);

                    return anyKeyword;
                });
                return moviesWithKeywords;
            }
            const numOfMovies = moviesWithKeywords().length;
            console.log(numOfMovies);

            /*Count the number of movies made between 1980-1989 (including both the years).*/

            //count movies with forEach

            const moviesMadeBetweenYears2 = () => {
                let countMovies = 0;
                const ul = document.createElement("ul")
                movies.forEach(movie => {
                    if (movie.year >= 1980 && movie.year <= 1989) {
                        ul.innerHTML += `<li>${movie.title}</li>`
                        countMovies++;
                    }
                    document.body.appendChild(ul)
                });
                return countMovies;
            }
            console.log(moviesMadeBetweenYears2());
//with reduce
            // const moviesMadeBetweenYears = () => {
            //     const countOfMovies = movies.reduce((acc, value) => {
            //         if (value.year >= 1980 && value.year <= 1989) {
            //             acc++;
            //         }
            //         return acc;
            //     }, 0)
            //     return countOfMovies
            // }
            // console.log(moviesMadeBetweenYears())
        })
}

movies();
