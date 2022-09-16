const container = document.querySelector(".container");

function createGrid() {
    for (let i = 0; i < 16; i++) {
        const row = document.createElement("div");
        row.className = "row";
        container.appendChild(row);
    
        for (let j = 0; j < 16; j++) {
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

createGrid();