const input = document.querySelector('#favchap');
const button = document.querySelector('#button');
const list = document.querySelector('#list');

let chaptersArray = getChapterList() || [];

function setChapterList() {
    localStorage.setItem('favoriteBOMList', JSON.stringify(chaptersArray));
    
};

function getChapterList() {
    return JSON.parse(localStorage.getItem('favoriteBOMList'));
}

function deleteChapter(chapter) {
    chapter = chapter.slice(0, chapter.length - 1);
    chaptersArray = chaptersArray.filter((item) => item !== chapter);
    setChapterList();
}

function displayList(item) {
    let li = document.createElement('li');
    let listText = document.createElement('span');
    let listBtn = document.createElement('button');

    li.appendChild(listText);
    listText.textContent = item;
    li.appendChild(listBtn);
    listBtn.textContent = 'Delete';
  

    listBtn.addEventListener('click', function() {
    list.removeChild(li);
    deleteChapter(li.textContent);
    })
}

chaptersArray.forEach(chapter => {
    displayList(chapter);
});


button.addEventListener('click', function() {
    if (input.value != '') 
    {   
        const userText = input.value;
        displayList(userText);
        chaptersArray.push(userText);
        setChapterList();
        input.value = '';
        input.focus();
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
