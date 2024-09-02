//Write a function that takes an array of numbers and returns an array with the values in reverse order.

function getArray (numbers) {
    let reverseArray = []; 

    for (let i = numbers.length - 1; i >= 0; i--) {
        reverseArray.push(numbers[i]);
    }

    return reverseArray; 
}

let numbers = [1, 2, 3, 4, 5];
let reversedArray = getArray(numbers);
console.log (reversedArray);

