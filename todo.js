const toDoForm = document.querySelector(".js-toDoForm"),
    toDoInput = toDoForm.querySelector("input"),
    toDoList = document.querySelector(".js-toDoList");

const TODOS_LS = "toDos";
let toDos = [];


// function filterFn(toDo){
//     return toDo.id === 1;
// }

function deleteToDo(event){
    const btn = event.target;
    const li = btn.parentNode;

    toDoList.removeChild(li);

    // 이렇게 함수 인수 적용 가능.
    // const cleanToDos = toDos.filter(filterFn);

    const cleanToDos = toDos.filter(function(toDo){
        // 문자를 숫자로 형 변환 : 1. parseInt, 2. Number
        return toDo.id !== Number(li.id);
    });
    
    toDos = cleanToDos;
    saveToDos();
}

function saveToDos(){
    localStorage.setItem(TODOS_LS, JSON.stringify(toDos));
}

function paintToDo(text){
    const li = document.createElement("li");
    const deleteBtn = document.createElement("button");
    const span = document.createElement("span");
    const newId = toDos.length + 1;

    deleteBtn.innerText = "X";
    deleteBtn.addEventListener("click", deleteToDo);

    span.innerText = text;
    li.appendChild(deleteBtn);
    li.appendChild(span);
    li.id = newId;
    toDoList.appendChild(li);
    const toDoObj = {
        text: text,
        id: newId
    };
    toDos.push(toDoObj);
    saveToDos();
}

function handleSubmit(event){
    event.preventDefault();
    const currentValue = toDoInput.value;
    paintToDo(currentValue);
    toDoInput.value = ""
}

function someThing(toDo) {
    console.log("toDo.text");
}

function loadToDos(){
    const loadedToDos = localStorage.getItem(TODOS_LS);

    if (loadedToDos !== null){
        const parsedToDos = JSON.parse(loadedToDos);
        // // 이와 같이 익명함수 만들어서 사용 할 수 도 있고,
        // parsedToDos.forEach(function (toDo) {
        //     console.log(toDo.text);
        // });

        // // 이와 같이 함수를 따로 만들어 사용 할 수도 있다.
        // parsedToDos.forEach(someThing);

        // // 이와같이 for + 람다식 조합도 가능
        parsedToDos.forEach(element => {
            paintToDo(element.text);
        });
    }
}

function init(){
    loadToDos();
    toDoForm.addEventListener("submit", handleSubmit);
}

init();