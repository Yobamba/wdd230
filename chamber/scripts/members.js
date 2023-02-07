let targetDiv = document.querySelector('#responsiveDiv');
let memberUrl = "data/members.json";
let listBtn = document.querySelector('#listBtn');
let gridBtn = document.querySelector('#gridBtn');

listBtn.addEventListener('click', () => {
    targetDiv.classList.remove('grid');
    targetDiv.classList.add('flex');
    console.log('listen');
})

gridBtn.addEventListener('click', () => {
    targetDiv.classList.remove('flex');
    targetDiv.classList.add('grid');
    console.log('listen grid');
})

async function fetchData(url) {
    let response = await fetch(url);
    let data = await response.json();
    console.log(data);
    let companyKeys = Object.keys(data);
    console.log(companyKeys);
    console.log('hello world');

    buldContent(data, companyKeys);

    
}

fetchData(memberUrl);

function buldContent(rawData, keys) {
    keys.forEach(key => {
        let companySection = document.createElement('section');
        let companyName = document.createElement('h3');
        
        
        

        
        rawData[key].forEach(dataRow => {

            companyName.textContent = dataRow.name;
        
            companySection.appendChild(companyName);

            
            let address = document.createElement('p');
            address.textContent = dataRow.address;
            companySection.appendChild(address);
            let phoneNum = document.createElement('p');
            phoneNum.textContent = dataRow.phoneNumber;
            companySection.appendChild(phoneNum);
            let site = document.createElement('p');
            site.textContent = dataRow.website;
            
            companySection.appendChild(site);
            let icon = document.createElement('p');
            icon.textContent = dataRow.iconName;
            companySection.appendChild(icon);
            let memLevel = document.createElement('p');
            memLevel.textContent = dataRow.membershipLevel;
            companySection.appendChild(memLevel);
            let foundyear = document.createElement('p');
            foundyear.textContent = dataRow.yearFounded;
            companySection.appendChild(foundyear);
            targetDiv.appendChild(companySection);

        })
    });
 
    
  
}