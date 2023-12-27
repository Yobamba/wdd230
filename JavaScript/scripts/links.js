// var baseUrl = "https://yobamba.github.io/wdd230/";
var weekUList = document.querySelector("#weeks");
const linkList = document.querySelectorAll('.link-list');

const localUrl = "links.json";

async function apiFetch2() {
    try {
        // First, we'll want to access the JSON data. 
        let response = await fetch(localUrl);
        if (response.ok) {
            let data = await response.json();
            let i = 1;
            
            
            

            let weekKeys = Object.keys(data);
            console.log(weekKeys);

            populateLinks(data, weekKeys);
            
            
            // console.log(weeklyLinks);
            // populateLinks(weeklyLinks);
            // // console.log(weeklyLinks.keys());
            // console.log(weeklyLinks);
            // weeklyLinks.forEach(link => {
            //     console.log(link.week);
            //     console.log(link.links);
            //     console.log(link.name);

                // let weekHolder = link.week;
                // let linkHolder = link.links;
                // linkHolder.forEach(heldLink => {
                //     let testLi = document.createElement('li');
                //     let testLink = document.createElement('a');
                //     let nameHolder = link.name;
                //     testLink.setAttribute('src', heldLink);
                //     console.log(testLink);
                //     testLink.setAttribute('alt', nameHolder);
                //     testLi.textContent = link;
                //     weekUList.append(testLi);

                // });

                
                // populateLinks(link.week, link.links, link.name );
                // console.log(link.week);
                // console.log(link.links);
                // console.log(link.name);
                 
            // });
           
            // setHref(weeklyLinks);

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



function populateLinks(fullData, KeyWeeks) {

    KeyWeeks.forEach(week => {
        let newli = document.createElement('li');
        newli.textContent = `${week}: `;
        fullData[week].forEach(element => {
            let newA = document.createElement('a');
            newA.setAttribute('href', element.link);
            newA.setAttribute('alt', element.name);
            newA.setAttribute('target', "_blank");
            newA.textContent = ` ${element.name} |`;
            newli.appendChild(newA);
            weekUList.appendChild(newli);
        }); 
    });
   
    //     // create an a element
    
    //     // set the attributes
    // links.forEach(link => {
    //     newA.setAttribute('href', link);
    //     newA.setAttribute('target', '_blank');

    //         // Set the link text
    //     let nodeText = document.createTextNode(names);
        

      

    //         // put the text inside the link
    //     newA.appendChild(nodeText);
    //     console.log(newA);
    //         // put the link inside the 
    //         // newP.appendChild(newA);
    
    //         //test this 
    //     newli.innerHTML = `${weeks}: <a href="${newA}" target="_blank">${names}</a>|`;
    //     console.log(newli);
    //     weekUList.appendChild(newli);
    // });

    // for (let i = 0; i < link.length;i++) {
        
    //     let newli = document.createElement('li');
    //     let newP = document.createElement('p');
    //     // create an a element
    //     let newA = document.createElement('a');
    //     // set the attributes
    //     newA.setAttribute('href', link)
    //     newA.setAttribute('target', '_blank');

    //     // Set the link text
    //     let nodeText = document.createTextNode(link);

    //     newA.setAttribute('title', 'link');

    //     // put the text inside the link
    //     newA.appendChild(nodeText);
    //     // put the link inside the 
    //     // newP.appendChild(newA);
    //     newP.textContent = `Week ${i + 1}`;

    //     //test this 
    //     weeks.appendChild(newA);
    
    //     newli.appendChild(newP);
    //     weeks.appendChild(newli);
    
        // let text = `Week${i + 1} `

        // 1. Leave the empty link on the home page
        // 2. Add the same class to all of those links
        // 3. Use querySelectorAll to target all of those links of that same class
        // 4. Set the attributes of each link
    }
// }

function setHref(links) {
    links.forEach(link => {
        console.log(`First for each ${link}`)
        linkList.forEach(arrayLink => {
            console.log(`Second for each ${arrayLink}`);
            arrayLink.setAttribute('href', link);
        })
    });
    // for (let i = 0; i < link.length; i++) {

        
    //     // now we have a loop that makes our index start at 0
    //     // what I need now is to make it get the first item in the JSON array o links
    //     linkList[i].setAttribute('href', link);
    //     // let firstLink = link;
    //     console.log(`${linkList[i]} ${i}`); 
        
    // }
}

function populateActivities(link) {
    let newli = document.createElement('li');
    let newP = document.createElement('p');
    // create an a element
    let newA = document.createElement('a');
    // set the attributes
    newA.setAttribute('href', link.links)
    newA.setAttribute('target', '_blank');

        // Set the link text
    let nodeText = document.createTextNode(link.name);

    newA.setAttribute('title', 'link');

        // put the text inside the link
    newA.appendChild(nodeText);
        // put the link inside the 
        // newP.appendChild(newA);
    // newP.textContent = `Week${1}`;
    // console.log(newA);
    newli.innerHTML = `<p>${link.week}<a href="${link.links}"></a></p>`;

        //test this 
    weeks.appendChild(newA);

        

    
    newli.appendChild(newP);
    weeks.appendChild(newli);
}