export function adjustMyTodosContainerHeight() {
    const addNewTodoContainer = document.querySelector('.add-new-todo-container');
    const categoriesContainer = document.querySelector('.categories-container');
    const myTodosContainer = document.querySelector('.my-todos-container');

    const addNewTodoHeight = addNewTodoContainer.offsetHeight;
    const categoriesHeight = categoriesContainer.offsetHeight;
    const windowHeight = window.innerHeight;

    const myTodosHeight = windowHeight - addNewTodoHeight - categoriesHeight;

    myTodosContainer.style.height = `${myTodosHeight}px`;
}