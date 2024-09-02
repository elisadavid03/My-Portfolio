//Write a function that takes a number n and prints a square pattern of asterisks with n rows and n columns.
//For n=5:
//*****
//*****
//*****
//*****
//*****

function printingPattern (n) {

    for (let i = 0; i < n; i++) {
        let row ='';
    

    for (let j = 0; j < n; j++) {
        row += '*';
    }

    console.log (row);
}
}

printingPattern (5);