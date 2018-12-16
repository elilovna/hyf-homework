const getData = () => {
    fetch("https://api.github.com/orgs/HackYourFuture/repos")
        .then((res) => { return res.json() })
        .then((data) => {
            console.log(data);
            // total number of forks for all repositories
            const totalNumOfForks = data.reduce((acc, value) => {
                return acc + value.forks
            }, 0)
            console.log(totalNumOfForks);

            // number of watched repositories

            const watcedRepo = data.reduce((acc, value) => {
                return acc + value.watchers
            }, 0)
            console.log(watcedRepo);

            // the most and the least forked repositories

            const maxForkedRepo = (comparison) => {
                const maxForks = data.reduce((acc, value) => {
                    if (comparison(acc.forks, value.forks)) {
                        return value;
                    }
                    return acc;
                }, data[0])

                return maxForks;
            }

            console.log(maxForkedRepo((num1, num2) => {
                return num1 < num2;
            }))
            console.log(maxForkedRepo((num1, num2) => {
                return num1 > num2;
            }))
        })
}

getData();