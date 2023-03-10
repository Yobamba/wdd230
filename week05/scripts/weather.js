const currentTemp = document.querySelector("#current-temp");
const weatherIcon = document.querySelector("img");
const caption = document.querySelector("figcaption");

const url = "https://api.openweathermap.org/data/2.5/weather?q=Trier&units=imperial&appid=7b025b66c02f655483fe4c3c0263cb04";

async function apiFetch() {
    try {
        let response = await fetch(url);
        if (response.ok) {
            let data = await response.json();
            console.log(data);
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

    caption.textContent = iconAlt;

    let fullIconUrl = `http://openweathermap.org/img/wn/${iconUrl}@2x.png`;
    weatherIcon.setAttribute('src', fullIconUrl);
    weatherIcon.setAttribute('alt', iconAlt);
    console.log("Testing");
    console.log(iconUrl);
    currentTemp.innerHTML = weatherNumber;
}

apiFetch();