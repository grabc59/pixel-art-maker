'use strict;'
var currentColor = document.querySelector('#currentColor');
var palette = document.querySelector('#palette');
var canvas = document.querySelector('#canvas');
var savedColor = '';
var colors = ['white', 'yellow', 'blue', 'green', 'orange', 'red', 'purple'];



function populateCanvas() {
  console.log(canvas);
  for (var i = 0; i < 924; i++) {
    var div = document.createElement('div');
    canvas.appendChild(div);
    div.className = 'pixel';
    // div.setAttribute('onClick', 'assignColor(this)');
    // div.setAttribute('mousedown', 'assignColor2(this)');
  }
}
populateCanvas();






///////////////////////////////////////
///////////// Populate the palette with colors
///////////////////////////////////////
function createColors() {
  for (var i = 0; i < colors.length; i++) {
    var div = document.createElement('div');
    palette.appendChild(div);
    div.className = 'colors';
    div.style['background-color'] = colors[i];
    // div.setAttribute('onClick', 'showColorClicked(this)');
  }
}
createColors();



///////////////////////////////////////
///////////// Color Picker - click on a palette color, save it, and show it as selected. This replaces div.setAttribute('onClick', 'showColorClicked(this)') in the createColors function.
///////////////////////////////////////
document.querySelector('#palette').addEventListener('mousedown', function (event) {
  savedColor = event.target.style['background-color'];
  currentColor.style['background-color'] = savedColor;
});
// JQuery way
// function showColorClicked (paletteColor) {
//   savedColor = $(paletteColor).css('backgroundColor');
//   currentColor.style['background-color'] = savedColor;
// }



///////////////////////////////////////
///////////// Matt's Heroes Example
///////////////////////////////////////
// document.querySelector('#heroes').addEventListener('click',function (event) {
//   var heroName = event.target.innerText;
//   var greetingDiv = document.querySelector('#greeting');
//   if (!greetingDiv.innerText) {
//     greetingDiv.innerText = 'Hello ' + heroName;
//   } else {
//     greetingDiv.innerText += ', ' + heroName;
//   }
// });

///////////////////////////////////////
///////////// Paint a pixel
///////////////////////////////////////
//This listener will replace the assignColor function
// document.querySelector('#canvas').addEventListener('mousedown', function (event) {
//   this.style['background-color'] = savedColor;
//   this.style.border = '1px solid ' + savedColor;
//
//   document.querySelector('#canvas').addEventListener('mouseover', function (event) {
//     event.target.style['background-color'] = savedColor;
//     event.target.style['border'] = '1px solid ' + savedColor;
//   });
// });
// // document.querySelector('#canvas').addEventListener('mouseup', function(event) {
// //   document.querySelector('#canvas').removeEventListener('mouseover');
// // });
////////////////////////////////////////////////////////////
function click () {
  event.target.style['background-color'] = savedColor;
  event.target.style.border = '1px solid ' + savedColor;
  document.querySelector('#canvas').addEventListener('mousemove', drag);
}

function drag () {
  event.target.style['background-color'] = savedColor;
  event.target.style.border = '1px solid ' + savedColor;

}
function stopPainting () {
  document.querySelector('#canvas').removeEventListener('mousemove', drag);
}
document.querySelector('#canvas').addEventListener('mousedown', click);
document.querySelector('#canvas').addEventListener('mouseup', stopPainting);

////////////////////////////////////////////////////////////
//Attempt to separate functions and listeners, so that I can properly remove the listeners(removing the mouseover/down listener requires a function name).
// var mouseIsDown = 0;
// function watchMouse() {
//   document.querySelector('#canvas').addEventListener('mousedown', function () {
//     mouseIsDown = 1;
//     areWePainting(mouseIsDown);
// // console.log(mouseIsDown);
//   });
//   document.querySelector('#canvas').addEventListener('mouseup', function () {
//     mouseIsDown = 0;
//     areWePainting(mouseIsDown);
//   });
// }
// watchMouse();
//
// function areWePainting(mouseIsDown) {
//   if (mouseIsDown === 1) {
//     console.log('mouse is down');
//     paintAPixel();
//   }
// }
// // areWePainting(mouseIsDown);
// function paintAPixel (event) {
//   console.log(event.target);
//   event.target.style['background-color'] = savedColor;
//   event.target.style.border = '1px solid ' + savedColor;
// }


// var mouseDown = 0;
// document.querySelector('#canvas').onmousedown = function() {
//   ++mouseDown;
//   console.log(mouseDown);
// }
// document.querySelector('#canvas').onmouseup = function() {
//   --mouseDown;
//   console.log(mouseDown);
// }
// if (mouseDown !== 0) {
//   document.querySelector('#canvas').addEventListener('mouseover', paintAPixel);
// } else {
//   document.querySelector('#canvas').removeEventListener('mouseover', paintAPixel);
// }


// document.querySelector('#canvas').addEventListener('mouseup', function(event) {
//   document.querySelector('#canvas').removeEventListener('mousedown', paintAPixel);
// })

////////////////////////////////////////////////////////////
// This was in use for setAttribute in populateCanvas, since been replaced
// function assignColor (pixel) {
//   pixel.style['background-color'] = savedColor;
//   pixel.style['border'] = '1px solid ' + savedColor;
// }




// Broken mouseover drag and paint attempt
// function assignColor2 (pixel) {
//   canvas.eventListener("mouseover" , function(e){
//     // if(e.buttons == 1 || e.buttons == 3){
//       pixel.style['background-color'] = savedColor;
//       pixel.style['border'] = '1px solid ' + savedColor;
//     })
// }
