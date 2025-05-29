let citynm = document.querySelector(".cityName");  // fix here
let city = document.querySelector(".city");
let temp = document.querySelector(".temperature");
let humid = document.querySelector(".humidity");
let searchform = document.getElementById("search");
let emoji=document.querySelector(".weatherEmoji");
let apikey = "cc362a21fb89fba4ef28cdc73be80da0";
let des=document.querySelector(".description");

searchform.addEventListener("submit", async event => {
    event.preventDefault();
    let cm = citynm.value.toLowerCase();  // fix here too
    try {
        let response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cm}&appid=${apikey}&units=metric`);
        let data = await response.json();
        console.log(data.weather[0]);  // ✅ should print here
        city.textContent = `Area: ${data.name}`;
        temp.textContent = `Temperature: ${data.main.temp}°C`;
        humid.textContent = `Humidity: ${data.main.humidity}%`;
        des.innerText= data.weather[0].description;
        emoji.innerText= getWeatherEmoji(data.weather[0].id);
    } catch (error) {
        city.textContent = `Area: undefined`;
        temp.textContent = `Temperature: null`;
        humid.textContent = `Humidity: null`;
        console.error(error);
    }
});

function getWeatherEmoji(id){
    switch(true){
        case (id>=200 && id<300):
            return "⛈️";
            break;
        case (id>=300 && id<500):
            return "🌧️";
            break;
        case (id>=500 && id<600):
            return "🌦️";
            break;
        case (id>=600 && id<700):
            return "❄️";
            break;
        case (id>=700 && id<800):
            return "🌫️";
            break;
        case (id>=800 && id<900):
            return "☁️";
            break;
        default:
            return "☀️";
    }
}
