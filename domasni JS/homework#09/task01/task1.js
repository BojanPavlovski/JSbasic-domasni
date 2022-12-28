$(document).ready(function(){
    
    let button = $("#click").first();
    let taskNum = $("#taskNumber");
    button.click(function(){
        let taskNumber = parseInt(taskNum.first().val());
        fetch(`https://jsonplaceholder.typicode.com/todos/${taskNumber}`)
        .then(response => {
            console.log(response);
            response.json()
            .then(data => {
                console.log(data);
                $("#myDiv").text(`The data ID is:${data.id}`);
                $("#secondDiv").text(`The title is:${data.title}`);
                if(data.completed === true){
                    $("#completeStatusDiv").text("Completed");
                }
                else{
                    $("#completeStatusDiv").text("Not completed");
                }
            })
        })
        .catch(error => {
            console.log(error);
        })
    })
    
    
})
    
