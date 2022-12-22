function myFunction (x){
    console.log(typeof(x));
    return typeof(x);
}

myFunction(23);
myFunction("Bojan");
myFunction(true);
myFunction();
myFunction({type:"Fiat", model:"500", color:"white"});
