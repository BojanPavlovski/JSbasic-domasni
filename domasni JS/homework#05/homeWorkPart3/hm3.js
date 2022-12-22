// Write a function named findNumber that:
// Takes 2 arguments: array, type
// The person that calls the function should provide an array of numbers and string odd / even
// If the type is even the function should find all the even numbers and return them as result
// If the type is odd the function should find all the odd numbers and return them as result

userArray = [];

function findNumber (array,type){
        if(type == "Odd"){
           array = array.filter((num) => num % 2 === 1)
           console.log(array);
            
        
        } 
        else if(type == "Even"){
           array = array.filter((num) => num % 2 === 0)
            console.log(array);
            
        }
        else{
            return `Enter a valid choice.`
        }
        
        
   

}
findNumber(userArray = [1, 3, 9, 6, 7, 1, 2, 8], "Odd");
findNumber(userArray = [2, 6, 8, 9, 4, 10], "Even");

