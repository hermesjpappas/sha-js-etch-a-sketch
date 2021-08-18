let gridSize = 16;

const container = document.querySelector("#container");

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

//seems to function well up to 44 side size
createGrid(gridSize);

function hovered(item) {
    item.classList.add("hovered");
}

const gridItems = document.querySelectorAll('.grid-item');

gridItems.forEach(gridItem => {
  gridItem.addEventListener('mouseover', event => hovered(gridItem));
});