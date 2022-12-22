var number1 = prompt("Enter the first number:");
var num1 = parseInt(number1)

var number2 = prompt("Enter the second number: ");
var num2 = parseInt(number2);

var number3 = prompt("Enter third number:");
var num3 = parseInt(number3);

var number4 = prompt("Enter the fourth number:");
var num4 = parseInt(number4);

var number5 = prompt("Enter your fifth number:");
var num5 = parseInt(number5);

// alert(Math.max(num1, num2, num3, num4, num5));

if ((num1 > num2) && (num1 > num3) && (num1 > num4) && (num1 > num5))  {
    alert(`${num1} is the largest number`);

} 
else if ((num2 > num1) && (num2 > num3) && (num2 > num4) && (num2 > num5)) {
    alert(`${num2} is the largest number`);
}
else if ((num3 > num1) && (num3 > num2) && (num3 > num4) && (num3 > num5)) {
    alert(`${num3} is the largest number`);
}
else if ((num4 > num1) && (num4 > num2) && (num4 > num3) && (num4 > num5)) {
    alert(`${num4} is the largest number`);
}
else if((num5 > num1) && (num5 > num2) && (num5 > num3) && (num5 > num4)) {
    alert(`${num5} is the largest number`);
}
else {
    alert("Enter a valid number");
}

