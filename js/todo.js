const toDoForm = document.getElementById("todo-form");
const toDoInput = document.querySelector("#todo-form input");
const toDoList = document.getElementById("todo-list");


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
    const newTodo = toDoInput.value;    // save current value of input
    toDoInput.value = "";               //clear input from the window
    paintTodo(newTodo);
    
}

toDoForm.addEventListener("submit", handleToDoSubmit);
