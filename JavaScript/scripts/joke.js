var jokeDiv = document.querySelector("#joke-div"); 
const jokeBtn = document.querySelector("#joke-Btn");

const url = 'https://v2.jokeapi.dev/joke/Any?blacklistFlags=nsfw&amount=10';



// ddsjlkfdsjklfjdlf
const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '38f4658fd3msh4d5a597025f09fdp1d47d8jsn115f55994252',
		'X-RapidAPI-Host': 'jokeapi-v2.p.rapidapi.com'
	}
};

async function apiFetch() {
    try {
        // First, we'll want to access the JSON data. 
        let response = await fetch(url, options);
        if (response.ok) {
            let data = await response.json();
         
            console.log(data.jokes);
            
            getJokes(data);
         

        } else {
            throw Error(await response.text());
        }
    } catch (error) {
        console.log(error);
    }

}

function getJokes(rawJokes) {
    var jokeArray = [];
    rawJokes.jokes.forEach(jokeList => {

        if (jokeList.setup != undefined) {
            console.log(jokeList.setup + " " + jokeList.delivery);
            jokeArray.push(jokeList.setup + " " + jokeList.delivery)
            
            

            // let chosenJoke = rawJokes.jokes.
        } else {
            console.log(jokeList.joke);
            jokeArray.push(jokeList.joke);
        }

    


         

       

    });
    jokeBtn.addEventListener("click", function() {
        const a = Math.floor(Math.random() * (10 - 1)) + 1;
    
        console.log(jokeArray[a]);
        let jokeP = document.querySelector("#jokeP");
       
        jokeP.textContent = jokeArray[a];
        jokeDiv.setAttribute('style', 'width:400px');

        

       
        // document.querySelector('#jokeP').textContent = jokeP;
      
        
    });
    // showJokes(jokeArray);
}


apiFetch();
