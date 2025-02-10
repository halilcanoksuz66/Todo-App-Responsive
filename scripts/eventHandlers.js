import { setCurrentCategoryIndex, setSelectedCategory, currentCategoryIndex, selectedCategory, updateCategories, highlightSelectedCategory } from "./categories.js";
import { createTodoElement, addTodoToContainer, saveStorageTodo } from "./my-todos.js";
//^ add-new-todo-container button click
export function handleAddNewTodoClick() {
    const categoriesContainer = document.querySelector(".categories-container");
    const newTodo = document.querySelector(".new-todo");
    newTodo.classList.toggle('visible');
    categoriesContainer.classList.toggle('visible');
}

//^ Click anywhere categories-container
export function handleCategoryContainerClick(event) {
    if (event.target.classList.contains("left-arrow")) {
        handleLeftArrowClick();
    } else if (event.target.classList.contains("right-arrow")) {
        handleRightArrowClick();
    } else if (event.target.classList.contains("category")) {
        handleCategoryClick(event.target);
    }
}

//^ Done button click
export function handleDoneButtonClick() {
    const input = document.querySelector(".new-todo input");
    if (selectedCategory) {
        if (input.value) {
            createAndSaveTodo(selectedCategory.innerHTML, input.value);
            input.value = "";
        }
    } else {
        alert("Please select a category");
    }
}

//^ Key press in input
export function keyPressinInput(event) {
    if (event.key === "Enter") {
        handleDoneButtonClick();
    }
}

//^ Left arrow click
function handleLeftArrowClick() {
    if (currentCategoryIndex == 9) {
        updateCategories(0);
        highlightSelectedCategory('active');
        setCurrentCategoryIndex(4);
    }
}

//^ Right arrow click
function handleRightArrowClick() {
    if (currentCategoryIndex == 4) {
        updateCategories(5);
        highlightSelectedCategory('active');
        setCurrentCategoryIndex(9);
    }
}

//^ click anywhere category
function handleCategoryClick(targetCategory) {
    const { productId } = targetCategory.dataset;
    if (selectedCategory) {
        const selectedCategoryProductId = selectedCategory.dataset.productId;
        if (productId === selectedCategoryProductId) {
            selectedCategory.classList.remove("active");
            highlightSelectedCategory('delete');
            setSelectedCategory(null);
        } else {
            selectedCategory.classList.remove("active");
            highlightSelectedCategory('delete');
            setSelectedCategory(targetCategory);
            targetCategory.classList.add("active");
        }
    } else {
        setSelectedCategory(targetCategory);
        highlightSelectedCategory('active');
    }
}

//^ create and save todo
function createAndSaveTodo(categoryHTML, todoHTML) {
    const todo = createTodoElement(categoryHTML, todoHTML);
    addTodoToContainer(todo);
    saveStorageTodo(todo);
}

