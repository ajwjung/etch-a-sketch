const container = document.querySelector(".grid-container");
const changeSizeButton = document.querySelector("#change-grid");
const resetButton = document.querySelector("#reset");
const canvasSizeText = document.querySelector("#canvas-dimensions");

function createGrid(size) {
    let boxHeight = container.offsetHeight;
    let boxWidth = container.offsetWidth;

    for (let i = 0; i < size; i++) {
        const row = document.createElement("div");
        row.className = "row";
        row.style.height = boxHeight;
        row.style.width = boxWidth;
        container.appendChild(row);
        
        for (let j = 0; j < size; j++) {
            const box = document.createElement("div");
            box.className = "box";
            box.style.height = `${boxHeight / size}px`;
            box.style.width = `${boxWidth / size}px`;
            box.style.border = "1px dotted gray";
            box.style.boxSizing = "border-box";
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
createGrid(16);
canvasSizeText.textContent = "16 x 16";

// Change grid size
changeSizeButton.addEventListener("click", function (e) { 
    let userInput = prompt("Please enter a number between 1 and 100.");
    let size = parseInt(userInput);

    if (userInput === null) {
        return;
    } else if (size <= 100 && size > 0) {
        removeGrid();
        createGrid(size);
        canvasSizeText.textContent = `${size} x ${size}`;
    } else {
        alert("ERROR: You must enter a number between 1 and 100.");
    }
})

// Reset to default grid
resetButton.addEventListener("click", function (e) {
    removeGrid();
    createGrid(16);
})