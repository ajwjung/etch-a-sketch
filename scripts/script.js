const container = document.querySelector(".container");
const changeSizeButton = document.querySelector("#change-grid");
const resetButton = document.querySelector("#reset");

function createGrid(rows, cols) {   
    for (let i = 0; i < rows; i++) {
        const row = document.createElement("div");
        row.className = "row";
        container.appendChild(row);
        
        for (let j = 0; j < cols; j++) {
            const box = document.createElement("div");
            box.className = "box";
            changeColorOnHover(box);
            row.appendChild(box);
        }
    }
}

function changeColorOnHover(item) {
    item.addEventListener("mouseover", function (e) {
        item.style.backgroundColor = "rgb(25, 50, 100)";
    })
    item.addEventListener("mouseout", function (e) {
        item.style.backgroundColor = "transparent";
    })
}

function removeGrid() {
    container.replaceChildren();
}

// Default grid size: 16x16
createGrid(16, 16);

// Change grid size
changeSizeButton.addEventListener("click", function (e) { 
    let size = parseInt(prompt("How many squares?"))
    
    removeGrid();
    createGrid(size, size);
    })

resetButton.addEventListener("click", function (e) {
    removeGrid();
    createGrid(16, 16);
})