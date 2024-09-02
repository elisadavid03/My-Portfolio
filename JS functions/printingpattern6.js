//Write a function that takes a number n and prints a hollow right-angled triangle pattern of asterisks with n rows.
//For n=5:

//*
//**
//* *
//*  *
//*****

function printingPattern (n) {

    let result = ' ';

    for (let row = 0; row <= n; row ++ ) {
        let line = ' '; 

        for (let col = 1; col <= row; col ++) {
            if (col === 1 || col === row || row === n) {
                line += '*'; 
            }else{
                line += ' ';
            }        
        } 
        result += line + '\n';
    }

    console.log (result); 
}

printingPattern (5); 

//LINE 17 
//This nested for loop iterates over each column within the current row, starting from 1 and going up to the current row number (row). The variable col represents the current column number. This loop ensures that we process each column in the current row.

//LINE 18-22
// Inside the inner loop, we use an if-else statement to determine whether to add an asterisk (*) or a space ( ) to the line string.
//col === 1: This condition checks if the current column is the first column. If true, an asterisk is added because the first column of each row should always have an asterisk.
//col === row: This condition checks if the current column is the last column of the current row. If true, an asterisk is added because the last column of each row should always have an asterisk.
//row === n: This condition checks if the current row is the last row of the triangle. If true, an asterisk is added because the entire last row should be filled with asterisks.
//else: If none of the above conditions are met, a space is added. This creates the hollow part of the triangle.

//LINE 24
//After the inner loop completes (i.e., after processing all columns in the current row), the constructed line string is appended to the output string. A newline character (\n) is added at the end to move to the next line for the next row.