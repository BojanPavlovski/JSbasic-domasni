function createTable(){
    let table = document.getElementById("tab");
    let row = document.getElementById("rows").value;
    let col = document.getElementById("cols").value;

   

    for(let i = 0; i < row; i++){
        let tr = document.createElement("tr");
        let content = document.createTextNode("row" +(i+1));
        tr.appendChild(content);
        

        for(let j = 0; j < col; j++){
            let td = document.createElement("td");
            let text = document.createTextNode("column" +(j+1));
            td.appendChild(text);
            tr.appendChild(td);
        }
        table.appendChild(tr);
    }
}



document.getElementById('submit').addEventListener("click",createTable);