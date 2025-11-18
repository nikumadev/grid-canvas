const grid = document.querySelector('#grid');
const btn = document.querySelector('#generate');
const reset = document.querySelector('#reset');
const totalCells = 40;

const imagePaths = [
    "././assets/1.jpg",
    "././assets/2.jpg",
    "././assets/3.jpg",
    "././assets/4.jpg",
    "././assets/5.jpg",
    "././assets/6.jpg",
    "././assets/7.jpg",
    "././assets/8.jpg",
    "././assets/9.jpg",
    "././assets/10.jpg",
    "././assets/11.jpg",
    "././assets/12.jpg",
    "././assets/13.jpg",
    "././assets/14.jpg",
    "././assets/15.jpg",
    "././assets/16.jpg",
    "././assets/17.jpg",
    "././assets/18.jpg",
    "././assets/19.jpg",
    "././assets/20.jpg",
    "././assets/21.jpg",
    "././assets/22.jpg",
    "././assets/23.jpg",
    "././assets/24.jpg",
    "././assets/25.jpg",
    "././assets/26.jpg",
    "././assets/27.jpg",
    "././assets/28.jpg",
    "././assets/29.jpg",
    "././assets/30.jpg",
    "././assets/31.jpg",
    "././assets/32.jpg",
    "././assets/33.jpg",
    "././assets/34.jpg",
    "././assets/35.jpg",
    "././assets/36.jpg",
    "././assets/37.jpg",
    "././assets/38.jpg",
    "././assets/39.jpg",
    "././assets/40.jpg"
];

for (let i = 0; i < totalCells; i++) {
    const cell = document.createElement("div");
    cell.classList.add('cell');
    grid.appendChild(cell);
}

btn.addEventListener("click", () => {
    let emptyCells = [];
    const allCells = document.querySelectorAll(".cell")

    for (let i = 0; i < allCells.length; i++) {
        if (allCells[i].children.length === 0) {
            emptyCells.push(allCells[i]);
        }
    }

    if (emptyCells.length === 0) {
        alert("There are no spaces left. Grid is full.");
        return;
    }

    const randomCell = emptyCells[Math.floor(Math.random() * emptyCells.length)];
    const randomImage = imagePaths[Math.floor(Math.random() * imagePaths.length)]

    const img = document.createElement("img");
    img.src = randomImage;

    randomCell.appendChild(img);
});


// reset 
reset.addEventListener("click", () => {
    const allCells = document.querySelectorAll(".cell");

    allCells.forEach(cell => {
        cell.innerHTML = "";
    });

});
