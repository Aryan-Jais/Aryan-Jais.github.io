// Selector
const todoInput = document.querySelector(".todo-input");
const todoButton = document.querySelector(".todo-button");
const todoList = document.querySelector(".todo-list");
const filterOpton = document.querySelector(".filter-todo");

//Event Listner

todoButton.addEventListener('click', addTodo);
todoList.addEventListener('click', deleteCheck);
filterOpton.addEventListener('click', filterTodo);



//Function 1) addTodo

function addTodo(event) {

    //Prevent form from submitting

    event.preventDefault();

    //Todo DIV

    const todoDIV = document.createElement("div");
    todoDIV.classList.add("todo");

    //Create Li

    const newTodo = document.createElement("li");
    newTodo.innerText = todoInput.value;
    newTodo.classList.add("todo-item");
    todoDIV.appendChild(newTodo);

    //CHECK MARK BUTTON

    const completedButton = document.createElement("button");
    completedButton.innerHTML = '<i class="fas fa-check"></i>';
    completedButton.classList.add("complete-btn");
    todoDIV.appendChild(completedButton);


    //CHECK TRASH BUTTON

    const trashButton = document.createElement("button");
    trashButton.innerHTML = '<i class="fas fa-trash"></i>';
    trashButton.classList.add("trash-btn");
    todoDIV.appendChild(trashButton);

    //APPEND TO LIST

    todoList.appendChild(todoDIV);

    //CLEAR TODO INPUT

    todoInput.value = "";
};

//FUNCTION 2) deleteCheck

function deleteCheck(e) {
    const item = e.target;
    console.log(item);
    //DELETE TODO
    if (item.classList[0] === 'trash-btn') {
        const todo = item.parentElement;

        //ANIMATION
        todo.classList.add("fall");

        todo.addEventListener('transitionend', function() {
            todo.remove();
        })
    }

    //CHECK MARK
    if (item.classList[0] === 'complete-btn') {
        const todo = item.parentElement;
        todo.classList.toggle("completed");
    }

};

//FUNCTION 3) filterTodo

async function filterTodo(e) {
    const todos = todoList.childNodes;
    todos.forEach(function(todo) {

        switch (e.target.value) {
            case "all":
                console.log(todo.classList);
                todo.style = "display : flex";
                break;
            case "completed":
                if (todo.classList.contains("completed")) {
                    todo.style = "display : flex";
                } else {
                    todo.style = "display : none";
                }
                break;
            case "uncompleted":
                if (!todo.classList.contains("completed")) {
                    todo.style = "display : flex";
                } else {
                    todo.style = "display : none";
                }
                break;
        }
    });
}