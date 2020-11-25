const API_KEY = "23543cad51d5e0d1056c294bdbd3b6a6";
const COORDS = "coords";
const weather = document.querySelector(".js-weather");

function getWeather(lat, lng){
    fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=${API_KEY}&units=metric`
    ).then(function(respone){
        return respone.json();
    }).then(function(json){
        const temperature = json.main.temp;
        const place = json.name;

        weather.innerText = `${temperature} @ ${place}`;
    });
}

function saveCoords(coordsObj){
    localStorage.setItem(COORDS, JSON.stringify(coordsObj));
}

function handleGeoSucces(position){
    const latitude = position.coords.latitude;
    const longitude = position.coords.longitude;

    
    // const coordsObj = {
    //     latitude: latitude,
    //     longitude: longitude
    // }
    // 위와 동일
    const coordsObj = {
        latitude,
        longitude
    };
    saveCoords(coordsObj);
    getWeather(latitude, longitude);
}

function handleGeoError(){
    console.log("연결실패");
}

function askForCoords(){

    navigator.geolocation.getCurrentPosition(handleGeoSucces, handleGeoError);
}


function loadCoords(){
    const loadedCoords = localStorage.getItem(COORDS);

    if(loadedCoords === null){
        askForCoords();
    }else{
        // getWeather
        const parseCoords = JSON.parse(loadedCoords);
        getWeather(parseCoords.latitude, parseCoords.longitude);
    }
}

function init(){
    loadCoords();
}

init();