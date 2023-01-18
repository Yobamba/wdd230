const input = document.querySelector('#favchap');
const button = document.querySelector('#button');
const list = document.querySelector('#list');

{/* <h1>📖 Book of Mormon - Top 10</h1>
<main>
<label for="favchap">Enter Book and Chapter: </label>
<input type="text" id="favchap" value="Alma 5">
<button type="submit" id="button">Add Chapter</button>
<ul id="list"></ul> */}


// button.style.backgroundColor = 'blue';
// button.textContent = "testing";

button.addEventListener('click', function() {
    if (input.value != '') 
    {   
        const userText = input.value;
        input.textContent = "Let's find out what the chapters are. ";
        
        
        const li = document.createElement('li');
        const listText = document.createElement('span');
        const listBtn = document.createElement('button');

        li.appendChild(listText);
        listText.textContent = userText;
        li.appendChild(listBtn);
        listBtn.textContent = 'Delete';
        list.appendChild(li);

        listBtn.addEventListener('click', function() {
            list.removeChild(li);
        })



    

    }

});

// ***************************************
