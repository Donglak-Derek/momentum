const toDoForm = document.getElementById("todo-form");
const toDoInput = document.querySelector("#todo-form input");
const toDoList = document.getElementById("todo-list");

// add new todo to the list
function paintTodo(newTodo){
    const li = document.createElement("li");    //creat <li></li>
    const span = document.createElement("span");
    li.appendChild(span);                       //put span in li
    span.innerText = newTodo;                   // value between span
    toDoList.appendChild(li);                   // add li to html
}

function handleToDoSubmit(event){
    event.preventDefault();
    const newTodo = toDoInput.value;    // save current value of input
    toDoInput.value = "";               //clear input from the window
    paintTodo(newTodo);
    
}

toDoForm.addEventListener("submit", handleToDoSubmit);
