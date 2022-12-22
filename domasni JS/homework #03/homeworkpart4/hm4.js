function atm() {
    let neededMoney = parseInt(prompt("Enter desired amount"));
    let accountMoney = 1000;
    let moneyLeft = accountMoney - neededMoney;
    if(neededMoney > accountMoney) {
        return "Not enough money.";
    } 
    else {
        return `You have ${moneyLeft} left in your account.`;
    }

}

console.log(atm());

