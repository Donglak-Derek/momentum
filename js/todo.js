const toDoForm = document.getElementById("todo-form");
const toDoInput = document.querySelector("#todo-form input");
const toDoList = document.getElementById("todo-list");

const TODOS_KEY = "toDos"
let toDos = [];

function saveTodos(){
    localStorage.setItem(TODOS_KEY, JSON.stringify(toDos)); //make them array!
}

function deleteTodo(event){
    const li = event.target.parentElement; //event, console.dir, find parentElement which is li
    li.remove();        //each button has different parent = li
}


// add new todo to the list
function paintTodo(newTodo){
    const li = document.createElement("li");    //creat <li></li>
    const span = document.createElement("span");
    span.innerText = newTodo;                   // value between span
    const button = document.createElement("button");
    button.innerText = "❌";
    button.addEventListener("click", deleteTodo);
    li.appendChild(span);                       //put span in li
    li.appendChild(button);                     // button to list
    toDoList.appendChild(li);                   // add li to html
}

function handleToDoSubmit(event){
    event.preventDefault();
    const newTodo = toDoInput.value;    // save current value
    toDoInput.value = "";  //clear
    toDos.push(newTodo);
    saveTodos();             
    paintTodo(newTodo);
    
}

toDoForm.addEventListener("submit", handleToDoSubmit);

// function sayHello(item){
//     console.log("this is the turn of", item);
// }

const saveToDos = localStorage.getItem(TODOS_KEY);

if (saveToDos) {
    const parsedToDos = JSON.parse(saveToDos); //JSON to array
    toDos = parsedToDos;
    // parsedToDos.forEach(sayHello);
    // parsedToDos.forEach((item) => console.log("This is the turn of", item)); //samething but fancy
    parsedToDos.forEach(paintTodo);
}
