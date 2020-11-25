const body = document.querySelector("body");

const IMG_NUMBER = 3;

// function handleImageLoad(){
//     console.log("asdf");
// }

function paintImage(imgNumber){
    const image = new Image();
    image.src = `/images/${imgNumber + 1}.jpg`
    // body.appendChild(image);
    // image.addEventListener("loaden", handleImageLoad);
    image.classList.add("bgImage");
    // body.appendChild(image);    
    body.prepend(image);
}
function genRandom(){
    const number = Math.floor(Math.random() * IMG_NUMBER);
    return number;
}

function init(){
    const randomNumber = genRandom();
    console.log(randomNumber);
    paintImage(randomNumber);

}

init();