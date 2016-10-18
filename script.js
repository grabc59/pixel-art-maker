'use strict';
var currentColor = document.querySelector('#currentColor');
var palette = document.querySelector('#palette');
var canvas = document.querySelector('#canvas');
var savedColor = '';
var savedBorder = '';
var colors = ['black', 'white', 'grey', 'red', 'orange', 'yellow', 'green', 'blue', 'purple'];
var userColor = '';
var colorWheel = document.getElementById('color-wheel');



function populateCanvas() {
  for (var i = 0; i < 2263; i++) {
    var div = document.createElement('div');
    canvas.appendChild(div);
    div.className = 'pixel';
  }
}
populateCanvas();
//
// //alternative
// function dynamicPopulateCanvas() {
//   //get the current width of the canvas
//   console.log(canvas.offsetWidth);
//   console.log(canvas.offsetHeight);
//   //
// }
// dynamicPopulateCanvas();






///////////////////////////////////////
///////////// Populate the palette with colors
///////////////////////////////////////
function createColors() {
  for (var i = 0; i < colors.length; i++) {
    var div = document.createElement('div');
    palette.insertBefore(div, colorWheel);
    div.className = 'colors';
    div.style['background-color'] = colors[i];
  }
}
createColors();



///////////////////////////////////////
///////////// Color Picker - click on a palette color, save it, and show it as selected. This replaces div.setAttribute('onClick', 'showColorClicked(this)') in the createColors function.
///////////////////////////////////////
document.querySelector('#palette').addEventListener('mousedown', function (event) {
  savedColor = event.target.style['background-color'];
  savedBorder = event.target.style['background-color'];
  currentColor.style['background-color'] = savedColor;
});

///////////////////////////////////////
///////////// Paint a pixel
///////////////////////////////////////
function click (event) {
  event.target.style['background-color'] = savedColor;
  event.target.style.border = '1px solid ' + savedBorder;
  document.querySelector('#canvas').addEventListener('mousemove', drag);
}
function drag (event) {
  event.target.style['background-color'] = savedColor;
  event.target.style.border = '1px solid ' + savedBorder;
}
function stopPainting () {
  document.querySelector('#canvas').removeEventListener('mousemove', drag);
}
document.querySelector('#canvas').addEventListener('mousedown', click);
document.querySelector('#canvas').addEventListener('mouseup', stopPainting);


///////////////////////////////////////
///////////// Add a Color
///////////////////////////////////////
document.querySelector('#add-color').addEventListener('mousedown', function() {
  userColor = document.getElementById('color-wheel').value;
  var div = document.createElement('div');
  palette.insertBefore(div, colorWheel);
  div.className = 'colors';
  div.style['background-color'] = userColor;
});


///////////////////////////////////////
///////////// Erase
///////////////////////////////////////

//listen for click on the erase button
document.querySelector('#erase').addEventListener('mousedown', function (event) {
  savedColor = 'white';

});
//set the current color to white, and the border to black
