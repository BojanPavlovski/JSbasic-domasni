// Create an input
// Create a button
// When clicked the button should print a greet message in an h1 header
// Ex: input: Petko output message: Hello there Petko!

$(document).ready(function(){
    let btn = $("#submit").first();

    function printName (input){
        let  userInput = $("#userInput").first().val();
        
        btn.after(`<h1>Hello there ${userInput}.</h1>`)
    }

    btn.click(function(){
        printName();
    })
})