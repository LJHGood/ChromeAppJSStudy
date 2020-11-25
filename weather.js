const COORDS = "coords";

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
}

function handleGeoError(){
    console.log("연결실패");
}

function askForCoords(){

    navigator.geolocation.getCurrentPosition(handleGeoSucces, handleGeoError);
    console.log("ASdf");

}


function loadCoords(){
    const loadedCords = localStorage.getItem(COORDS);

    if(loadedCords === null){
        askForCoords();
    }else{
        // getWeather
        
    }
}

function init(){
    loadCoords();
}

init();