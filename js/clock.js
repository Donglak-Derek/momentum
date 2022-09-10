const clock = document.querySelector("h2#clock");


function getClock(){
    const date = new Date();
    const hours = date.getHours().toString(10).padStart(2, "0");
    const minutes = date.getMinutes().toString(10).padStart(2, "0");
    const seconds = date.getSeconds().toString(10).padStart(2, "0");
    clock.innerText = `${hours}:${minutes}:${seconds}`;
}

getClock()
setInterval(getClock, 1000);


