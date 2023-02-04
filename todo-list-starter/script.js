let todoTasksText = ["Feed Coco", "Make lunch", "Water plants", "Eat"]; 
let todoTasksStatus = [false,true,false,false];
let todoList = document.getElementById("todo-list");
updateTodoList();
  
function createNewTodoTaskElement(task, index) {
    let newTodoTaskTextElement = document.createElement("p");
    newTodoTaskTextElement.innerText = task;

    if (todoTasksStatus[index] == true) {
        console.log(todoTasksStatus[index]);
        newTodoTaskTextElement.classList.add("complete");
    }

    let newTodoTaskElement = document.createElement("li");
    newTodoTaskElement.appendChild(newTodoTaskTextElement);

    let completeButtonElement = document.createElement("input");
    completeButtonElement.type = "button";
    completeButtonElement.value = "Mark as complete";
    completeButtonElement.onclick = function () {
        toggleComplete(index);
    };
    newTodoTaskElement.appendChild(completeButtonElement);

    todoList.appendChild(newTodoTaskElement);
    return newTodoTaskElement;
}

function addTask() {
    let newTask = document.getElementById("new-task-text");
    if (newTask.value) {
        todoTasksText.push(newTask.value);
        todoTasksStatus.push(false);
        newTask.value = "";
        console.log(todoTasksText);
        updateTodoList ();
    }
}

function updateTodoList() {
    todoList.innerHTML = '';

    todoTasksText.forEach((task, index) => {
        let newTodoTaskElement = createNewTodoTaskElement(task, index);
        todoList.appendChild(newTodoTaskElement);
        })
}

function createNewTodoItemElement(todoItem, index) {}

function toggleComplete(index) {
    if (todoTasksStatus[index] == false) {
        todoTasksStatus[index] = true;
        console.log("inside toggleComplete incomplete task")
    } else {
        todoTasksStatus[index] = false;
        console.log("inside toggleComplete complete task")
    }
console.log(todoTasksStatus);
updateTodoList();
}