const itemsArray = document.querySelectorAll(".item")
const arrayItemstLength = itemsArray.length;

const numberOfCategoriesss = `Number of categories: ${arrayItemstLength} `;
console.log(numberOfCategoriesss);

for( let i = 0; i < arrayItemstLength; i++){
    const categoryName =  itemsArray[i].firstElementChild.textContent;
    const categoryElementsAmount = itemsArray[i].lastElementChild.children.length;
     
    const category = `Category: ${categoryName}`;
    console.log(category)
    const elements = `Elements: ${categoryElementsAmount}`;
    console.log(elements)
}