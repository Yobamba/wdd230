const startButton = document.querySelector("#submit");



startButton.addEventListener("submit", function FillTable() 
{
    let nameVar = document.querySelector("#fname");

    let nameSpace = document.querySelector("#span-name");

    nameSpace.innerHTML = nameVar.value;
})