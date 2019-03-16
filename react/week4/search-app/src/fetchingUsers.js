// bbd7091bd69a15d7339ba92275765eca69eb127a
export const fetchingUsers = (user) => {
    const url = ` https://api.github.com/search/users?q=${user}`
    return fetch(url)
        .then(response => response.json())
}
