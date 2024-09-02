//Write a function that takes a number n and prints a left-angled triangle pattern of asterisks with n rows.
//For n=5:

//    *
//   **
//  ***
// ****
//*****

function printingPattern (n) {

    for (let i = 1; i <= n; i++) {

        let spaces = ' '.repeat(n-1);
        let asterisks = '*'.repeat (i);

       let row = spaces + asterisks; 

       console.log(row);
    }
}

printingPattern (5);