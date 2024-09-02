//Write a function that takes a string and returns the number of vowels in the string.

function getVowels (str) {

    let numberOfVowels = 0;

    let vowels = "aeiouAEIOU"; 

    for (let i = 0; i < str.length; i++) {

        if (vowels.includes (str[i])) {

            numberOfVowels++; 
        }
    }

return numberOfVowels;

}

console.log(getVowels("hello world")); 
console.log(getVowels("good morning"));

