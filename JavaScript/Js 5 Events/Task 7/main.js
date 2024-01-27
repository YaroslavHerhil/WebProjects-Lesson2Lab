let my_cell = document.getElementById("my-cell");

my_cell.onmouseover = () => {my_cell.style.backgroundColor = "Orange";}
my_cell.onmouseleave = () => {my_cell.style.backgroundColor = "White";}
let cells = document.getElementsByTagName("td");

Array.prototype.forEach.call (cells, function (cell) {
    cell.onmouseover = () => {cell.style.backgroundColor = "Orange";}
    cell.onmouseleave = () => {cell.style.backgroundColor = "White";}
} );