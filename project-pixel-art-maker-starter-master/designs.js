//First variable that need to be store to start working.
const colorPicker = document.getElementById('colorPicker');
const table = document.getElementById('pixelCanvas');
const sizePicker = document.getElementById('sizePicker');
//Initializing with black if the user doesn't pick a color.
var colorValue = "#000000";
/*addEventListener that starts the function watchColorPicker
  whenever a color is picked, so that 
  the value get strore in the variable colorValue.*/
colorPicker.addEventListener("change", watchColorPicker, false);
function watchColorPicker(event) {
    colorValue = event.target.value;
  }
  
// When size is submitted by the user, call makeGrid()
sizePicker.addEventListener("submit", makeGrid, true);
//This is the function that resets and creates the table.
function makeGrid(event) {
    event.preventDefault();
    /*These are constant because they are reborn
    every time the function is called.*/
    const width = event.target.elements.inputWidth.value;
    const height = event.target.elements.inputHeight.value;
    //Reset table to create another one.
    table.innerHTML = "";
    //Table creation beggins.
    for (let x = 0 ; x < width; x++) {
        const row = table.insertRow(x);
        for (let y = 0; y < height; y++) {
            const cell = row.insertCell(y);
            /*This addEventListener is the one that
            colored the cells whenever the user clicks them.*/
            cell.addEventListener("click", function(event){
                cell.style.backgroundColor = colorValue;
            });
        }
    }
}
