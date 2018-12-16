
// let i = 0;
const generateArray = (startIndex, stopIndex, threeCallback, fiveCallback) => {
    let array = [];
    for (let i = startIndex; i <= stopIndex; i++) {
        array.push(i);
        if (i % 3 == 0 && i % 5 == 0) {
            threeCallback(i);
            fiveCallback(i);
        } else if (i % 3 == 0) {
            threeCallback(i);
        } else if (i % 5 == 0) {
            fiveCallback(i);
        }
    }
    return array;
}

generateArray(5, 10, (i) => { console.log("threeCallback"+i) }, (i) => { console.log("fiveCallback"+i) });
/*Repeat a given string str (first argument) for num times (second argument). 
Return an empty string if num is not a positive number.
Remember to use Read-Search-Ask if you get stuck. Write your own code. */

{//use for loop
    function repeatStringNumTimes(str, num) {
        // repeat after me
        let text = "";
        for (let i = 0; i < num; i++) {
            text += str;
        }
        console.log(text);
        return text;

    }
    repeatStringNumTimes("abc", 3);
    repeatStringNumTimes("*", 3);
    repeatStringNumTimes("abc", 4);
    repeatStringNumTimes("abc", 1);
    repeatStringNumTimes("*", 8);
    repeatStringNumTimes("abc", -2);
}

{//use while loop
    function repeatStringNumTimes(str, num) {
        // repeat after me
        let text = "";
        let i = 0;
        while (i < num) {
            i++;
            text += str;
        }
        console.log(text);
        return text;
    }
    repeatStringNumTimes("abc", 3);
    repeatStringNumTimes("*", 3);
    repeatStringNumTimes("abc", 4);
    repeatStringNumTimes("abc", 1);
    repeatStringNumTimes("*", 8);
    repeatStringNumTimes("abc", -2);
}

{//use while do
    function repeatStringNumTimes(str, num) {
        // repeat after me
        let text = "";
        let i = 0;
        if (num < 0) {
            console.log(text);
            return text;
        }
        do {
            i++;
            text += str;
        }
        while (i < num);

        console.log(text);
        return text;
    }
    repeatStringNumTimes("abc", 3);
    repeatStringNumTimes("*", 3);
    repeatStringNumTimes("abc", 4);
    repeatStringNumTimes("abc", 1);
    repeatStringNumTimes("*", 8);
    repeatStringNumTimes("abc", -2);
}

// loop from CodeCamp
function multiplyAll(arr) {
    var product = 1;
    // Only change code below this line
      for(var i=0; i < arr.length; i++){
      for (var j=0; j < arr[i].length; j++){
        product = product * arr[i][j];
      }
    }
    // Only change code above this line
    return product;
  }
  
  // Modify values below to test your code
  console.log(multiplyAll([[1,2],[3,4],[5,6,7]]));
