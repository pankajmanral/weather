const apiKey = "d5f8a005ccafa44f8af9086f40ba3123";
const apiURL = "https://api.openweathermap.org/data/2.5/weather?&units=metric&q=";

const searchBox = document.querySelector(".searchInput");
const searchBtn = document.querySelector(".searchBtn");
var city = document.querySelector(".city").innerHTML;

async function checkWeather(city){
    const response = await fetch(apiURL + city + `&appid=${apiKey}`);
    var data = await response.json();
        
console.log(data)

    document.querySelector(".temp").innerHTML = data.main.temp;
    document.querySelector(".city").innerHTML = data.name;
    document.querySelector(".humidity").innerHTML = data.main.humidity;
    document.querySelector(".windspeed").innerHTML = data.wind.speed;

    if(data.weather[0].main == "Clouds"){
        document.querySelector(".weatherIcon").src = "./assets/clouds.png"
    }
    else if(data.weather[0].main == "Rain"){
        document.querySelector(".weatherIcon").src = "./assets/rain.png"
    }
    else if(data.weather[0].main == "Mist"){
        document.querySelector(".weatherIcon").src = "./assets/mist.png"
    }
    else if(data.weather[0].main == "Drizzle"){
        document.querySelector(".weatherIcon").src = "./assets/drizzle.png"
    }
    else if(data.weather[0].main == "Snow"){
        document.querySelector(".weatherIcon").src = "./assets/snow.png"
    }
    else if(data.weather[0].main == "Clear"){
        document.querySelector(".weatherIcon").src = "./assets/clear.png"
    }
    else if(data.weather[0].main == "Smoke"){
        document.querySelector(".weatherIcon").src = "./assets/clouds.png"
    }
}

searchBtn.addEventListener("click",()=>{
    checkWeather(searchBox.value);
})

checkWeather(city);