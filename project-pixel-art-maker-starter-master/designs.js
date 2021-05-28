// Select color input
// Select size input
const colorPicker = document.getElementById('colorPicker');
const table = document.getElementById('pixelCanvas');
const sizePicker = document.getElementById('sizePicker');
var colorValue;

colorPicker.addEventListener("change", watchColorPicker, false);
function watchColorPicker(event) {
    colorValue = event.target.value;
  }
  
// When size is submitted by the user, call makeGrid()
sizePicker.addEventListener("submit", makeGrid, true);

function makeGrid(event) {
    event.preventDefault();
    let width = event.target.elements.inputWidth.value;
    let height = event.target.elements.inputHeight.value;
    table.innerHTML = "";
    for (let x = 0 ; x < width; x++) {
        let row = table.insertRow(x);
        for (let y = 0; y < height; y++) {
            let cell = row.insertCell(y);
            cell.addEventListener("click", function(event){
                cell.style.backgroundColor = colorValue;
            });
        }
    }
}

// Your code goes here!


