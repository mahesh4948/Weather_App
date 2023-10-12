const apikey = "f4c8515a5e08479903f61d677264e608";
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

const searchBox = document.querySelector(".search input");
const searchBtn = document.querySelector(".search button");
const weatherIcon = document.querySelector(".weather-icon");


async function checkWeather(city) {
    const res = await fetch(apiUrl + city + `&appid=${apikey}`);

    if(res.status == 404){
        document.querySelector(".error").style.display = "block";
        document.querySelector(".weather").status.display = "none";
    }
    else {
        var data = await res.json();
    console.log(data);

    document.querySelector(".city").innerHTML = data.name;
    document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + "&degc";
    document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
    document.querySelector(".wind").innerHTML = data.wind.speed +" km/h";

    if(data.weather[0].main == "Clouds"){
        weatherIcon.src = "clouds.png";
    }else if(data.weather[0].main == "Rain"){
        weatherIcon.src = "rain.png";
    }else if(data.weather[0].main == "Drizzle"){
        weatherIcon.src = "drizzle.png";
    }else if(data.weather[0].main == "Mist"){
        weatherIcon.src = "mist.png";
    }else if(data.weather[0].main == "Clear"){
        weatherIcon.src = "clear.png";
    }

    document.querySelector(".weather").style.display = "block";
    document.querySelector(".error").style.display = "none";
    }
}
   
searchBtn.addEventListener("click", () => {
    checkWeather(searchBox.value); //give city name in input field
});