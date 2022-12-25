// Create two inputs, one for text and one for color
// Create a button that says: generate h1
// Create an h3 element for messages
// When the button is clicked create a new header below the inputs and button
// The new header should have the text and color from the inputs
// If the person enters an invalid color or an empty text show an error message to the message element
$(document).ready(function(){
    let button = $("#click").first();
    let msg = $("#message");

    function sendInputs(input, input2){
         let firstInput = $("#someText").first().val();
         let secondInput = $("#color").val();
         let colors = ["red", "green" , "blue", "yellow", "pink", "orange", "black"];
        
         for(i = 0; i <= colors.length; i++){
            if((firstInput === '')  || (secondInput !== colors[i])){
               msg.text(`Enter valid inputs`);
                }
            else{
                button.after(`<h2 style="background-color: ${secondInput}">User entered ${firstInput}, and user entered the color ${secondInput}.</h2>`);
            }
            
        }
}

    button.click(function(){
        sendInputs();
    })
})

