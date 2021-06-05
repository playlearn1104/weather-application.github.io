const weatherCity = document.getElementById('weather-city');
const weatherTemperature = document.getElementById('weather-temperature');
const weatherDescription = document.getElementById('weather-description');
const weatherHigh = document.getElementById('weather-high');
const weatherLow = document.getElementById('weather-low');
let apiWeather = [];

function setWeather(){
    const weather = apiWeather;
    console.log(weather.name);
    weatherCity.textContent = weather.name;
    // console.log(calculateWeathertoCelcius(weather.main.temp));
    weatherTemperature.textContent = calculateWeathertoCelcius(weather.main.temp);
    weatherDescription.textContent = weather.weather[0].description;
    weatherHigh.textContent = calculateWeathertoCelcius(weather.main.temp_max);
    weatherLow.textContent = calculateWeathertoCelcius(weather.main.temp_min);
}

function calculateWeathertoCelcius(w){
    let temperature = w;
    celciusTemperature = temperature -273.15;
    return celciusTemperature.toFixed(2);
}

//get weather api
async function getWeather(){
    const apiUrl='http://api.openweathermap.org/data/2.5/weather?q=Bangkok&appid=1100a14676c9af7cc70e0c4f24e3429d'
    try{
        const response = await fetch(apiUrl);
        apiWeather = await response.json();
        console.log(apiWeather);
        setWeather();
    }catch(error){

    }
}


//onLoad
getWeather();