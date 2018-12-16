// function return json

let box;

function getData() {
    fetch("https://api.github.com/orgs/HackYourFuture/repos")
        .then((res) => { return res.json() })
        .then((data) => {
            console.log(data);
            if (box != undefined) {
                document.getElementsByClassName("container")[0].removeChild(box);
            }
            box = document.createElement("div");
            box.setAttribute("style", "display:flex; flex-direction:column; flex-wrap: wrap; justify-content:space-around; flex-grow:1")
            data.forEach(repo => {
                const div = document.createElement("div");
                const a = document.createElement('a');
                a.setAttribute('href', repo.html_url);
                a.innerHTML += `${repo.name}<br>`;
                div.appendChild(a);
                box.appendChild(div);
            });
            document.getElementsByClassName("container")[1].appendChild(box);
        })
}

document.getElementById("btn")
    .addEventListener("click", () => {
        console.log("you clicked me");
        getData();
    })


document.onclick = (e) => {
    e = e || window.event;
    const element = e.target || e.srcElement;

    if (element.tagName == 'A') {
        window.open(e.target.href, '_blank');
        return false;
    }
};

