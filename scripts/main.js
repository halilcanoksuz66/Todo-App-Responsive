import { updateCategories } from "./categories.js";
import { handleAddNewTodoClick, handleCategoryContainerClick, handleDoneButtonClick, keyPressinInput } from "./eventHandlers.js";
import { listTodos, removeTodo } from "./my-todos.js";
import { adjustMyTodosContainerHeight } from "../utils/utils.js";
const categoriesContainer = document.querySelector(".categories-container");
const addNewTodoButton = document.querySelector(".add-new-todo-container button");
const doneButton = document.querySelector(".new-todo img");
const input = document.querySelector(".js-input");

//^ When the page loads, we make the initial settings
document.addEventListener("DOMContentLoaded", function () {
    updateCategories(0);
    listTodos();
    addEventListeners();
});

//^ Functions that add event listeners to the elements
function addEventListeners() {
    window.addEventListener('load', adjustMyTodosContainerHeight);
    window.addEventListener('resize', adjustMyTodosContainerHeight);
    addNewTodoButton.addEventListener("click", handleAddNewTodoClick);
    categoriesContainer.addEventListener("click", handleCategoryContainerClick);
    doneButton.addEventListener("click", handleDoneButtonClick);
    input.addEventListener("keydown", keyPressinInput);

    if (localStorage.getItem("todos")) {
        const trashes = document.querySelectorAll(".js-todo-img");
        trashes.forEach((trash) => {
            trash.addEventListener("click", removeTodo);
        })
    }
}