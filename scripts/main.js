const container = document.querySelector("#container");

for(let i=0; i<256; i++) {
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