const gridContainer = document.querySelector(".grid-container");
const changeSizeButton = document.querySelector("#change-grid");
const clearGridButton = document.querySelector("#clear-grid");
const resetButton = document.querySelector("#reset");
const canvasSizeText = document.querySelector("#canvas-dimensions");
const infoButton = document.querySelector("#help");
const backdrop = document.querySelector(".backdrop");
const infoBox = document.querySelector(".info-box");
const closeInfoBox = document.querySelector(".close-info");

function createGrid(size) {
    let boxHeight = gridContainer.offsetHeight;
    let boxWidth = gridContainer.offsetWidth;

    for (let i = 0; i < size; i++) {
        const row = document.createElement("div");
        row.className = "row";
        row.style.height = boxHeight;
        row.style.width = boxWidth;
        gridContainer.appendChild(row);
        
        for (let j = 0; j < size; j++) {
            const box = document.createElement("div");
            box.className = "box";
            box.style.height = `${boxHeight / size}px`;
            box.style.width = `${boxWidth / size}px`;
            box.style.backgroundColor = "rgb(250, 248, 240)";
            box.style.border = "1px dotted rgb(200, 200, 200)";
            box.style.boxSizing = "border-box";
            changeColorOnHover(box);
            row.appendChild(box);
        }
    }
}

function changeColorOnHover(item) {
    item.addEventListener("mouseover", function (e) {
        item.style.backgroundColor = "rgb(25, 25, 25)";
    })
}

function removeGrid() {
    gridContainer.replaceChildren();
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

// Clear grid
clearGridButton.addEventListener("click", function (e) {
    const squares = document.querySelectorAll(".box");
    
    squares.forEach(function (e) {
        e.style.backgroundColor = "rgb(250, 248, 240)";
    })
})

// Toggle info box
infoButton.addEventListener("click", function(e) {
    infoBox.classList.add("show");
    backdrop.classList.add("show");
    infoButton.disabled = true;

    if (infoBox.classList.contains("show")) {
        closeInfoBox.addEventListener("click", function(e) {
            backdrop.classList.remove("show")
            infoBox.classList.remove("show");
            infoButton.disabled = false;
        })
    }
})
