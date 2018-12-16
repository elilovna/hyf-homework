const usersURL = "https://jsonplaceholder.typicode.com/users";

const fetchPromise = (usersURL) => {
    return fetch(usersURL)
        .then((res) => {
            if (res.status == 200) {
                return res.json();
            } else {
                throw Error("Something is probably wrong with the url")
            }
        })
        .catch((error) => {
            console.log('Error loading users: ', error);
        })
}

fetchPromise(usersURL)
    .then((data) => {
        let users = data;
        users.forEach((user, idx) => {
            const todosURL = `https://jsonplaceholder.typicode.com/users/${user.id}/todos`;
            fetchPromise(todosURL)
                .then((res) => {
                    user.todos = res;
                    if (idx == users.length - 1)
                    console.log(users);
                })
                .catch((error) => {
                    console.log('Error loading todos for user :', idx, error);
                    if (idx == users.length - 1)
                    console.log(users);
                })
        })
    })




