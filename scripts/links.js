const baseUrl = "https://yobamba.github.io/wdd230/";
const weeks = document.querySelectorAll("#weeks");

const localUrl = "links.json";

async function apiFetch2() {
    try {
        // First, we'll want to access the JSON data. 
        let response = await fetch(localUrl);
        if (response.ok) {
            let data = await response.json();
            
            weeklyLinks = data.week01;
            console.log(weeklyLinks);
            weeklyLinks.forEach(link => {
                console.log(link);
            });
            // displayResults2(data)
            // Then we'll want to loop through each attribute
            // data[0].forEach(week => {
            //     console.log(`We working: ${week}`)
            // });
        } else {
            throw Error(await response.text());
        }
    } catch (error) {
        console.log(error);
    }

}

apiFetch2();

function populateLinks(link) {

}

