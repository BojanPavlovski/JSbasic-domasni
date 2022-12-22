// How many times is a number contained in an array

// Write a function named findNumber that:
// Takes 2 arguments: number, array
// Calculates how many times the number is contained in an array with numbers
// Outputs the result to the screen like so: "There is 4 occurrences of number 5 in the array"
// Call the function three times with different arrays.

function findNumber(array, number){
    let counter = 0;
    for(let i = 0; i <= array.length; i++){
        if(array[i] === number){
            counter++
        }
    }
    console.log(`There are ${counter} occurrences of number ${number} in the array`);
}

findNumber([1, 2, 8, 2, 9, 2], 2);
findNumber([6, 7, 8, 8, 2, 3, 8, 4, 8], 8);
findNumber([3, 1, 2, 3, 5, 3, 4, 3, 8, 9, 3, 1, 3], 3);