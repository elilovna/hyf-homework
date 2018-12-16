//part 1
// get numbers from users
const getValue = () => {
    let dividend = prompt("Enter dividend : ", " write the number here");
    document.write(" You have entered : " + dividend);
    let convertedDividend = +dividend;

    let divider = prompt("Enter divider : ", " write the number here");
    document.write(" You have entered : " + divider);
    let convertedDivider = +divider;

    console.log(typeof convertedDividend, typeof convertedDivider);
    return [convertedDividend, convertedDivider];
}

const numbers = getValue();
const dividendFromUser = numbers[0];
const dividerFromUser = numbers[1];

const divisibleFactory = (dividend) => {
    const func = (divider) => {
        return dividend % divider === 0;
    }
    return func;
}

const divisibleByUserNum = divisibleFactory(dividendFromUser);
console.log(divisibleByUserNum(dividerFromUser));

// part 2

let arr = [];
for (let i = 1; i <= 1000; i++) {
    arr.push(i);
}
console.log(arr);

const enteredNumber = 5;

let array = [];

for (let i = 0; i < enteredNumber; i++) {
    const divisibleArray = arr.filter(number => {
        let bla = divisibleFactory(number);
        return bla(i + 1);
    })
    array.push(divisibleArray.length);
}

console.log(array);






