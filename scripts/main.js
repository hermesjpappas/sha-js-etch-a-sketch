let gridSize = 16;

const container = document.querySelector("#container");

//resets the container HTML and then creates a fresh grid
function createGrid(sideSize) {
    container.innerHTML = "";
    container.style.gridTemplateRows = `repeat(${sideSize}, auto)`;
    container.style.gridTemplateColumns = `repeat(${sideSize}, auto)`;

    for(let i=0; i<sideSize**2; i++) {
        const gridItem = document.createElement("div");
        gridItem.className = "grid-item";
        container.appendChild(gridItem)
    }
}

//create the grid for the first time
createGrid(gridSize);

//changes the pixel color when hovered
function hovered(item) {
    item.classList.add("hovered");
}

//add an event listener to all the grid elements for hovering
const gridItems = document.querySelectorAll('.grid-item');

gridItems.forEach(gridItem => {
  gridItem.addEventListener('mouseover', event => hovered(gridItem));
});