function firstFunction(input, dogYears=7){
    let humanAge = input * dogYears;
    let dogAge = humanAge / dogYears;
    let text = `Your dog is ${humanAge} years old in human years and ${dogAge} years old in dog years. `;
    return  text;
}

console.log(firstFunction(10));