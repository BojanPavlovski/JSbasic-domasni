let currentYear = ((new Date().getFullYear()));
function calculateAge(currentYear, birthYear){
    let result = currentYear - birthYear;
    return `You are ${result} years old.`;

}
console.log(calculateAge(currentYear, 1997));
console.log(calculateAge(currentYear, 1960));
console.log(calculateAge(currentYear, 1999));









