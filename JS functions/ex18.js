//Write a function that takes a string and returns a string without spaces.

function inputString (str) {

    let result = ""; 

    for (let i = 0; i < str.length; i++) {

        if (str[i] !== " ")  {

            result += str[i];
    }

}

    return result;
}

console.log(inputString("hello world")); 
console.log(inputString("good morning")); 
