  let numbers = [];
  sum = 0;

  function squaredNum (firstNum, secondNum){
      for(let i = firstNum; i <= secondNum; i++){
          numbers.push(i);
          sum += Math.pow(i,2);
          console.log(sum);
        
      }
  }

  console.log(numbers);
  squaredNum(101, 150);

