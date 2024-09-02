// Write a function that takes an array of numbers and returns an array with the values less than the given number.

function filterLessThan (array, number) {
    let result = []; 

    for (let i = 0; i < array.length; i++) {

        if (array[i] < number) {
            
            result.push (array[i]); 
        }
    }

    return result; 
}

let numbers = [4, 5, 8, 2, 3]; 
let givennumber = 3; 
let filteredNumbers = filterLessThan (numbers, givennumber); 
console.log (filteredNumbers); 
