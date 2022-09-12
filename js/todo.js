const toDoForm = document.getElementById("todo-form");
const toDoInput = document.querySelector("#todo-form input");
const toDoList = document.getElementById("todo-list");

const TODOS_KEY = "toDos"
let toDos = [];

function saveTodos(){
    localStorage.setItem(TODOS_KEY, JSON.stringify(toDos)); //make them array!
}

function deleteTodo(event){
    const li = event.target.parentElement;
    li.remove();
    console.log(li.id);
    toDos = toDos.filter((toDo) => toDo.id !== parseInt(li.id));
    saveTodos();
}


// add new todo to the list
function paintTodo(newTodo){
    const li = document.createElement("li");    //creat <li></li>
    li.id = newTodo.id;
    const span = document.createElement("span");
    span.innerText = newTodo.text; // value between span
    const button = document.createElement("button");
    button.innerText = "❌";
    button.id = newTodo.id;
    button.addEventListener("click", deleteTodo);
    li.appendChild(span);                       //put span in li
    li.appendChild(button);                     // button to list
    toDoList.appendChild(li);                   // add li to html
}

function handleToDoSubmit(event){
    event.preventDefault();
    const newTodo = toDoInput.value;    // save current value
    toDoInput.value = "";  //clear
    const newTodoObj = {
        text: newTodo,
        id: Date.now(),
    }
    toDos.push(newTodoObj);
    paintTodo(newTodoObj);
    saveTodos();             
    
}

toDoForm.addEventListener("submit", handleToDoSubmit);

const saveToDos = localStorage.getItem(TODOS_KEY);

if (saveToDos) {
    const parsedToDos = JSON.parse(saveToDos); //JSON to array
    toDos = parsedToDos;
    parsedToDos.forEach(paintTodo);
}
