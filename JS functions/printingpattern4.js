//Write a function that takes a number n and prints a diamond pattern of asterisks with 2n - 1 rows and columns.
//For n=3:

 // *
 //***
//*****
 //***
 // *

function printingPattern (n) {
//upper part including the middle row
    for (let i=1; i <= n; i++) {

        let spaces = ' '.repeat(n-i); //calculate spaces for the current row
        let asterisks ='*'.repeat(2 * i - 1); //calculate asterisks for the current row
        console.log(spaces + asterisks);
    }

    for (let i = n - 1; i >= 1; i--){
        let spaces = ' '.repeat(n-i);
        let asterisks = '*'.repeat(2 * i - 1); 
        console.log(spaces + asterisks)
    }  
}

printingPattern (3);

//Upper Part Loop

//Spaces calculation (' '.repeat(n - i)):
//For the 1st row (i = 1): n - i = 3 - 1 = 2 spaces
//For the 2nd row (i = 2): n - i = 3 - 2 = 1 space
//For the 3rd row (i = 3): n - i = 3 - 3 = 0 spaces

//Asterisks Calculation ('*'.repeat(2 * i - 1)):
//For the 1st row (i = 1): 2 * i - 1 = 2 * 1 - 1 = 1 asterisk
//For the 2nd row (i = 2): 2 * i - 1 = 2 * 2 - 1 = 3 asterisks
//For the 3rd row (i = 3): 2 * i - 1 = 2 * 3 - 1 = 5 asterisks

//Lower Part Loop 

//Spaces Calculation (' '.repeat(n - i)):
//For the 1st row of the lower part (i = 2): n - i = 3 - 2 = 1 space
//For the 2nd row of the lower part (i = 1): n - i = 3 - 1 = 2 spaces

//Asterisks Calculation ('*'.repeat(2 * i - 1)):
//For the 1st row of the lower part (i = 2): 2 * i - 1 = 2 * 2 - 1 = 3 asterisks
//For the 2nd row of the lower part (i = 1): 2 * i - 1 = 2 * 1 - 1 = 1 asterisk