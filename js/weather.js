const API_KEY = "289956c7435084beb790f890447a2c4d";

function onGeoOk (position){

    const lat = position.coords.latitude;
    const lon = position.coords.longitude;
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}`;
    fetch(url)
    .then((response) => response.json())
    .then((data) => {
        const city = document.querySelector("#weather span:first-child");  
        const weather = document.querySelector("#weather span:last-child");
        console.log(weather, city);
        city.innerText = data.name;
        weather.innerText = `${data.weather[0].main} /${data.main.temp} F`;
    });
}

function onGoeError(){
    alert("Can't find you! No weather for you!");
};

navigator.geolocation.getCurrentPosition(onGeoOk, onGoeError);

//spend more time on the part of todo list