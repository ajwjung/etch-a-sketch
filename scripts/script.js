const container = document.querySelector(".container");

for (let i = 0; i < 16; i++) {
    const row = document.createElement("div");
    row.className = "row";
    container.appendChild(row);

    for (let j = 0; j < 16; j++) {
        const box = document.createElement("div");
        box.className = "box";
        row.appendChild(box);
    }
}

