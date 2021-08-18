let gridSize = 16;

const container = document.querySelector("#container");
container.style.gridTemplateRows = `repeat(${gridSize}, auto)`;
container.style.gridTemplateColumns = `repeat(${gridSize}, auto)`;

for(let i=0; i<gridSize**2; i++) {
    const gridItem = document.createElement("div");
    gridItem.className = "grid-item";
    container.appendChild(gridItem)
}

function hovered(item) {
    item.classList.add("hovered");
}

const gridItems = document.querySelectorAll('.grid-item');

gridItems.forEach(gridItem => {
  gridItem.addEventListener('mouseover', event => hovered(gridItem));
});