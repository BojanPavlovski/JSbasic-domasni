let weight = prompt("Enter your weight in kilograms: ");
let res = document.getElementById("firstParagraph")

let actualChickenWeight = 0.5;
function weightInChickens (input){
    let result = input / actualChickenWeight;
    if(isNaN(weight)){
        console.log("Invalid input.Enter a number!");
    }
    else{
        res.innerText += `Your weight is equal to ${result} chickens.`;
    }

   
    console.log(res.innerHTML);
    
}

weightInChickens(weight);