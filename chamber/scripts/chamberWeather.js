const currentTemp = document.querySelector("#weather-span");
const weatherIcon = document.getElementById("icon");
const description = document.querySelector("#description");
const forcastTarget = document.querySelector("#chamber-weather"); // This targets the weather section




const url = "https://api.openweathermap.org/data/2.5/weather?q=Setubal&units=imperial&appid=7b025b66c02f655483fe4c3c0263cb04";

const forcastUrl = "https://api.openweathermap.org/data/2.5/forecast?lat=38.5256&lon=-8.7396&cnt=3&appid=7b025b66c02f655483fe4c3c0263cb04&units=imperial";

async function apiFetch() {
    try {
        let response = await fetch(url);
        let forcastResponse = await fetch(forcastUrl);
        if (response.ok && forcastResponse.ok) {
            let data = await response.json();
            let forcastData = await forcastResponse.json();
            console.log(forcastData);
            // console.log(data);
            displayResults(data, forcastData)
        } else {
            throw Error(await response.text());
        }
    } catch (error) {
        console.log(error);
    }

}

function displayResults(info, forcastInfo) {

    var forcastArray = forcastInfo.list;
    console.log(forcastArray);
    let day1 = forcastArray[0];
    let day1Temp = day1.main.temp;
    let day1TempTxt = document.createElement('p');
    day1TempTxt.innerHTML = `${day1Temp}&deg;F`;
    day1TempTxt.setAttribute('id', 'day1');
    day1TempTxt.setAttribute('style', 'grid-column:2/3; grid-row:3/4');
    let day1Descript = day1.weather[0].description;
    let day1DescriptTxt = document.createElement('p');
    day1DescriptTxt.innerHTML = day1Descript;
    day1DescriptTxt.setAttribute('style', 'grid-column:2/3; grid-row:4/5');
    let day1IconUrl = day1.weather[0].icon;
    console.log(day1IconUrl);
    let fullDay1IconUrl = `http://openweathermap.org/img/wn/${day1IconUrl}@2x.png`
    let day1Icon = document.createElement('img');
    day1Icon.setAttribute('src', fullDay1IconUrl);
    day1Icon.setAttribute('alt', day1DescriptTxt); 

    let day2 = forcastArray[1];
    let day2Temp = day2.main.temp;
    let day2TempTxt = document.createElement('p');
    day2TempTxt.innerHTML = `${day2Temp}&deg;F`;
    day2TempTxt.setAttribute('id', 'day2');
    day2TempTxt.setAttribute('style', 'grid-column:3/4; grid-row:3/4');
    let day2Descript = day2.weather[0].description;
    let day2DescriptTxt = document.createElement('p');
    day2DescriptTxt.innerHTML = day2Descript;
    day2DescriptTxt.setAttribute('style', 'grid-column:3/4; grid-row:4/5');
    let day2IconUrl = day2.weather[0].icon;
    console.log(day2IconUrl);
    let fullDay2IconUrl = `http://openweathermap.org/img/wn/${day2IconUrl}@2x.png`
    let day2Icon = document.createElement('img');
    day2Icon.setAttribute('src', fullDay2IconUrl);
    day2Icon.setAttribute('alt', day2DescriptTxt); 
    

    let day3 = forcastArray[2];
    let day3Temp = day3.main.temp;
    let day3TempTxt = document.createElement('p');
    day3TempTxt.innerHTML = `${day3Temp}&deg;F`;
    day3TempTxt.setAttribute('id', 'day3');
    day3TempTxt.setAttribute('style', 'grid-column:4/5; grid-row:3/4');
    let day3Descript = day3.weather[0].description;
    let day3DescriptTxt = document.createElement('p');
    day3DescriptTxt.innerHTML = day3Descript;
    day3DescriptTxt.setAttribute('style', 'grid-column:4/5; grid-row:4/5');
    let day3IconUrl = day3.weather[0].icon;
    console.log(day3IconUrl);
    let fullDay3IconUrl = `http://openweathermap.org/img/wn/${day3IconUrl}@2x.png`
    let day3Icon = document.createElement('img');
    day3Icon.setAttribute('src', fullDay3IconUrl);
    day3Icon.setAttribute('alt', day3DescriptTxt); 
    day3Icon.setAttribute('style', 'grid-column:4/5; grid-row: 5/6');
   
   
    


    forcastTarget.appendChild(day1TempTxt);
    forcastTarget.appendChild(day1DescriptTxt);
    forcastTarget.appendChild(day1Icon);

    forcastTarget.appendChild(day2TempTxt);
    forcastTarget.appendChild(day2DescriptTxt);
    forcastTarget.appendChild(day2Icon);

    forcastTarget.appendChild(day3TempTxt);
    forcastTarget.appendChild(day3DescriptTxt);
    forcastTarget.appendChild(day3Icon);
   


    console.log(day1);
   
    let weatherNumber = `${info.main.temp}&deg;F`;

    let iconUrl = info.weather[0].icon;
    let iconAlt = info.weather[0].description;

    // caption.textContent = iconAlt;

    let fullIconUrl = `http://openweathermap.org/img/wn/${iconUrl}@2x.png`;
    weatherIcon.setAttribute('src', fullIconUrl);
    weatherIcon.setAttribute('alt', iconAlt);
   

    description.textContent = ` ${iconAlt}`;
    // console.log("Testing");
    // console.log(iconUrl);
    currentTemp.innerHTML = weatherNumber;
}

apiFetch();