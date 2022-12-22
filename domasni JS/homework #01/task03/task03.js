var numOfPhones = 30;
var userPrice = prompt("enter the price of the phone!");
console.log(userPrice);
var percentage = prompt("enter percentage!");
console.log(percentage);

var actualUserPrice = parseInt(userPrice);
var actualPercentage = parseInt(percentage);

var finalPrice = numOfPhones * (actualUserPrice *(actualPercentage / 100));
console.log("The final price is:")
console.log(finalPrice);

