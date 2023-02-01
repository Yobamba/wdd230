const startButton = document.querySelector("#submit");

// var nameVar = form.elements["fname"].value;
var nameSpace = document.querySelector("#span-name");


startButton.addEventListener("submit", function FillTable(e) 
{

    e.preventDefault()
    nameSpace.innerHTML = nameVar;
})