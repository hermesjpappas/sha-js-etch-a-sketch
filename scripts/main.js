const container = document.querySelector("#container");

for(let i=0; i<256; i++) {
    const gridItem = document.createElement("div");
    gridItem.className = "grid-item";
    container.appendChild(gridItem)
}