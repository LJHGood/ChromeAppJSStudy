const form = document.querySelector(".js-form"),
input = form.querySelector("input"),
greeting = document.querySelector(".js-greetings");;

const USER_LS = "currentUser",
    SHOWING_CN = "showing";


function saveName(text){
    localStorage.setItem(USER_LS, text);
}

function handleSubmit(event){
    // endter 동작 기본값으로 설정
    event.preventDefault();
    const currentValue = input.value;
    paintGreeting(currentValue);
    saveName(currentValue);
}

function askForName(){
    form.classList.add(SHOWING_CN);
    form.addEventListener("submit", handleSubmit);
}

function paintGreeting(text){
    greeting.innerHTML = `안녕 ${text}`;
    greeting.classList.add(SHOWING_CN);
    form.classList.remove(SHOWING_CN);
}

function loadNmae(){
    const currentUser = localStorage.getItem(USER_LS);
    console.log(currentUser);

    if(currentUser !== null){
        // 유저가 있는 경우
        paintGreeting(currentUser);

    }else{
        // 유저가 없는경우
        askForName();
    }

}

function init(){
    loadNmae();
}

init();