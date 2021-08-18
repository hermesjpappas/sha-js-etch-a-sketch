let gridSize = 16;

const container = document.querySelector("#container");

//changes the pixel color when hovered
function hovered(item) {
    item.classList.add("hovered");
}

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

    //add an event listener to all the grid elements for hovering
    const gridItems = document.querySelectorAll('.grid-item');

    gridItems.forEach(gridItem => {
        gridItem.addEventListener('mouseover', event => hovered(gridItem));
    });
}

//create the grid for the first time
createGrid(gridSize);

const reset = document.querySelector('#reset');
reset.addEventListener('click', event => createGrid(gridSize));


function resizeGrid() {
    let validInput = false;

    while(!validInput) {
        let size = prompt("How many squares on each side? (16-80)");
        if(size >= 16 && size <= 80) {
            gridSize = size;
            createGrid(size);
            validInput = true;
        }
        else if(size === null || size === "") {
            createGrid(gridSize);
            validInput = true;
        }
    }
}

const resize = document.querySelector('#resize');
resize.addEventListener('click', event => resizeGrid());