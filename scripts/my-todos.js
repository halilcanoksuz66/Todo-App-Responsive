//^ The arrays where I collect the todos
let todos = localStorage.getItem("todos") ? JSON.parse(localStorage.getItem("todos")) : [];
let productTimer = 0;

//^ We showing the todo in the container
export function addTodoToContainer(todo) {
    const myTodosContainer = document.querySelector(".my-todos-container");
    myTodosContainer.appendChild(todo);
}

//^ We creating the new todo element
export function createTodoElement(categoryHTML, todoHTML) {
    productTimer += 1;
    const jsTodo = document.createElement("div");
    jsTodo.classList.add("js-todo");
    jsTodo.innerHTML = `${categoryHTML} --> ${todoHTML}`;

    const img = document.createElement("img");
    img.src = "icons/garbage.png";
    img.classList.add("js-todo-img");

    const todoContainer = document.createElement("div");
    todoContainer.classList.add("todo-container");
    todoContainer.dataset.id = productTimer;
    todoContainer.appendChild(jsTodo);
    todoContainer.appendChild(img);
    console.log(todoContainer);
    return todoContainer;
}

//^ We saving the todo to the local storage
export function saveStorageTodo(todo) {
    const todoData = {
        innerHTML: todo.innerHTML,
        classList: Array.from(todo.classList),
        dataset: {
            ...todo.dataset
        }
    }
    todos.push(todoData);
    localStorage.setItem("todos", JSON.stringify(todos));
}

//^ We showing the todos in the arrays where todos
export function listTodos() {
    const myTodosContainer = document.querySelector(".my-todos-container");
    todos.forEach((todoData) => {
        const todo = document.createElement("div");
        todo.classList.add(...todoData.classList);
        todo.dataset.id = todoData.dataset.id;
        todo.innerHTML = todoData.innerHTML;
        myTodosContainer.appendChild(todo);
    });
}

//^ We removing the todo everywhere
export function removeTodo(event) {
    const todoContainer = event.target.closest(".todo-container");
    todoContainer.remove();
    todos.forEach((todoData, index) => {
        if (todoData.dataset.id == todoContainer.dataset.id) {
            todos.splice(index, 1);
        }
    })
    localStorage.setItem("todos", JSON.stringify(todos));
}