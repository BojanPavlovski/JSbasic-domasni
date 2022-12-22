let arr = [12, 100, 19, 10, 111, 7];
function result(){
let i = 0;
let max = arr[i];
while(i < arr.length) {
    if(arr[i] > max) {
        max = arr[i];
    }
    i++
}
    console.log('the max value is ' +max)


let counter = 0;
let min = arr[counter];

while(counter < arr.length) {
    if(counter < min) {
         min = arr[counter];
    }
    counter++
    
}
    console.log("The min value is " +min);
    let res = max + min
    console.log(`The sum of min and max is ${res}`);
}

result();


