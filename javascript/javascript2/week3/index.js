
function getData() {
    fetch("https://api.github.com/orgs/HackYourFuture/repos")
        .then((res) => { return res.json() })
        .then((data) => {
            console.log(data);
            document.getElementById("container").innerHTML = JSON.stringify(data);
        })
}

document.getElementById("btn")
    .addEventListener("click", () => {
        console.log("you clicked me");
        getData();
    })

const getInfoFromUser = () => {
    const input = document.getElementById("user-field").value;
    console.log("User typed in: " + input);
    return input;
}


const makeXHR = (userInput) => {
    let request = new XMLHttpRequest();
    request.open('GET', `https://api.github.com/search/repositories?q=user:HackYourFuture+${userInput}`, true);
    request.send();

    request.onreadystatechange = processRequest;
    function processRequest() {
        if (request.readyState == 4 && request.status == 200) {
            let response = JSON.parse(request.responseText);
            console.log(response);
            if (response.total_count != 0) {
                response.items.forEach(repo => {
                    const ul = document.createElement("ul")
                    let link = document.createElement("a")
                    link.setAttribute('href', repo.html_url);
                    link.innerHTML += `<li>${repo.name}</li>`;
                    ul.appendChild(link);
                    document.getElementById("name-repository").appendChild(ul);
                });
            } else {
                document.getElementById("name-repository").innerHTML = "No results for this key"
            }
        }
    }
}

const btnEl = document.getElementById("searchBtn")
btnEl.addEventListener("click", () => {
    const researchInput = getInfoFromUser();
    if (researchInput !== "") {
        makeXHR(researchInput);
    } else {
        document.getElementById("name-repository").innerHTML = "Invalid input"
    }
})


// const makeRequest = (url, callback) => {

// }