//^ categories
const categories = [
    '<div class="category category1" data-product-id="1">Work</div>',
    '<div class="category category2" data-product-id="2">Personal</div>',
    '<div class="category category3" data-product-id="3">Shopping</div>',
    '<div class="category category4" data-product-id="4">Health</div>',
    '<div class="category category5" data-product-id="5">Household Chores</div>',
    '<div class="category category6" data-product-id="6">Education</div>',
    '<div class="category category7" data-product-id="7">Travel</div>',
    '<div class="category category8" data-product-id="8">Finance</div>',
    '<div class="category category9" data-product-id="9">Hobbies</div>',
    '<div class="category category10" data-product-id="10">Social</div>',
];

//^ variable required for sorting the categories and variable required to highlight the selected categories
export let currentCategoryIndex = 4;
export let selectedCategory = null;


//^ Function to change the current category index
export function setCurrentCategoryIndex(index) {
    currentCategoryIndex = index;
}

//^ Function to set the selected category
export function setSelectedCategory(category) {
    selectedCategory = category;
}


//^ Function that redraws categories-container
export function updateCategories(startIndex) {
    const categoriesContainer = document.querySelector(".categories-container");
    const newCategories = categories.slice(startIndex, startIndex + 5);
    categoriesContainer.innerHTML = `
        <img src="icons/arrow-left.svg" alt="left" class="left-arrow" />  
        ${newCategories.join("")}
        <img src="icons/arrow-right.svg" alt="right" class="right-arrow" />
    `;
}


//^ Function to highlight the selected category
export function highlightSelectedCategory(isadded) {
    const categoryElements = document.querySelectorAll(".categories-container .category");
    if (isadded === 'active') {
        categoryElements.forEach(function (category) {
            if (selectedCategory && category.dataset.productId == selectedCategory.dataset.productId) {
                category.classList.add("active");
            }
        });
    } else {
        categoryElements.forEach(function (category) {
            category.classList.remove("active");
        });
    }
}
