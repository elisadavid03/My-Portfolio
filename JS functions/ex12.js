//Write a function that takes a string and a character and returns the number of times the given character appears in the string.

function countCharacterString (str, char) {
    let count = 0; 

    for (let i = 0; i < str.length; i ++) {

        if (str[i] === char) {
            count++; 
        }
    }

    return count; 
}

console.log (countCharacterString("hello world", "1"));
console.log (countCharacterString("good morning", "i"));