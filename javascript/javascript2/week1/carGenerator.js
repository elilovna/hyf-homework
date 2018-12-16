/**
 * Get random integer between two numbers, found here: https://stackoverflow.com/a/7228322
 * @param {integer} min - The min number
 * @param {integer} max - The max number
 * @returns {Number} Random number between min and max
 */
function randomIntFromInterval(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}


/**
 * Get an array with car objects with random color and speed
 * @param {integer} numberOfCars - The number of cars 
 * @returns {array} Array containing the car objects
 */
function generateCars(numberOfCars) {
    const cars = [];

    const carMakes = ['Honda', 'BMW', 'Fiat', 'Skoda', 'Volvo'];
    const carColors = ['lightgrey', 'lightcyan', 'lightyellow', 'lightgreen', 'lightcoral', 'lightpink'];

    for (let i = 0; i < numberOfCars; i++) {
        const car = {};
        const randomMakeIndex = randomIntFromInterval(0, carMakes.length - 1);
        const randomColorIndex = randomIntFromInterval(0, carColors.length - 1);

        car.make = carMakes[randomMakeIndex];
        car.color = carColors[randomColorIndex];
        car.speed = randomIntFromInterval(0, 100);

        cars.push(car);
    }

    return cars;
}

const cars = generateCars(10);
console.log("all cars:");
console.log(cars);

const test = cars.filter(car => { return car.speed >= 30 && car.speed <= 60 });
console.log("speed between 30 and 60:")
console.log(test);

const notYellowCars = cars.filter(car => {
    return car.color != "lightyellow";
});

const makers = notYellowCars.map(car => {
    return car.make;
});
console.log("makers:")
console.log(makers);

const danishCars = cars.map(car => {
    const x = {
        fart: car.speed,
        maerke: car.make,
        farve: car.color,
    };
    return x;
})
console.log("change language");
console.log(danishCars);



