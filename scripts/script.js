const container = document.querySelector(".container");
const changeSizeButton = document.querySelector("#change-grid");
const resetButton = document.querySelector("#reset");

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
createGrid(16, 16);

// Change grid size
changeSizeButton.addEventListener("click", function (e) { 
    let size = parseInt(prompt("How many squares?"));
    if (size <= 100) {
        removeGrid();
        createGrid(size);
    } else {
        alert("ERROR: Maximum squares allowed is 100.");
    }
})

// Reset to default grid
resetButton.addEventListener("click", function (e) {
    removeGrid();
    createGrid(16, 16);
})