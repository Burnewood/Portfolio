var oldColor = document.querySelector("#colorPicker");
var newColor = oldColor.value;
oldColor.addEventListener("input", function() {
  newColor = oldColor.value;
  }, false);

document.querySelector('#sizePicker').onsubmit = function() {
  submitClicked();
};
function submitClicked() {
    event.preventDefault();
    var rows = document.querySelector('#inputHeight').value;
    var columns = document.querySelector('#inputWidth').value;
    makeGrid(rows, columns);
}
function addOnClickDrag() {
  var cells = document.getElementsByClassName('cell');
  for (var i = 0; i < cells.length; i++) {
    cells[i].addEventListener("mousemove",  function(event) {
      if (event.buttons == 1){
      var draggedCell = event.target;
      draggedCell.style.backgroundColor = newColor;
      }
    })
    cells[i].addEventListener("click",  function(event) {
      var clickedCell = event.target;
      clickedCell.style.backgroundColor = newColor;
    });;
  }
}
function makeGrid(height, width) {
  var canvas = document.querySelector("#pixelCanvas");
  var grid = '';
  for (var y = 0; y < height; y++){
    grid += '<tr class="row-' + y + '">';
    for (var x = 0; x < width; x++){
      grid += '<td class="cell" id="row-' + y + '_cell-' + x + '"></td>';
    }
    grid += '</tr>';
  }
  canvas.innerHTML = grid;
  addOnClickDrag();
}
makeGrid(10,10);
