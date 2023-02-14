const currentTemp = document.querySelector("#weather-span");
const weatherIcon = document.getElementById("icon");
const description = document.querySelector("#description");




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
            displayResults(data)
        } else {
            throw Error(await response.text());
        }
    } catch (error) {
        console.log(error);
    }

}

function displayResults(info) {
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