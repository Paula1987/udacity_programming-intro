// Select color input
// Select size input
const column = document.getElementById('inputHeigth');
const row = document.getElementById('inputWidth');
const colorPicker = document.getElementById('colorPicker');
const table = document.getElementById('pixelCanvas');
const submit = document.getElementById('submit');

colorPicker.addEventListener("change", watchColorPicker, false);
function watchColorPicker(event) {
    console.log(event.target.value);
  }
var colorValue = watchColorPicker();
  
// When size is submitted by the user, call makeGrid()
submit.addEventListener("click", function(event){
    event.preventDefault;
    makeGrid(row, column);
});
function makeGrid(row, column) {
    for (let x = 0 ; x < row.value; x++) {
        let row = table.insertRow(x);
        for (let y = 0; y < column.value; y++) {
            let cell = row.insertCell(y);
            cell.addEventListener("click", function(event){
                cell.style.backgroundColor = colorValue;
            });
        }
    }
}

// Your code goes here!


