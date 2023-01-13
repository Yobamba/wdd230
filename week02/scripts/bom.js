const input = document.querySelector('#favchap');
const button = document.querySelector('button');
const list = document.querySelector('#list');


// button.style.backgroundColor = 'blue';
// button.textContent = "testing";

button.addEventListener('click', function() {
    if (input.value != '') 
    {  
        input.textContent = "Let's find out what the chapters are. ";
        const li = document.createElement('li');
        li.textContent = input.value;

        deleteButton.textContent = '❌';
        list.append(li);


        li.append(deleteButton);
        const deleteButton = document.createElement('button');

        deleteButton.addEventListener('click', function () {
        list.removeChild(li);
        input.focus();
  });

    }

});

