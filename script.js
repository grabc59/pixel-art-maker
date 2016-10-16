function populateCanvas() {
  // console.log(canvas);
  for (var i = 0; i < 900; i++) {
    var div = document.createElement('div');
    canvas.appendChild(div);
    div.className = 'pixel';
    div.setAttribute('onClick', 'assignColor(this)');
    div.setAttribute('mousedown', 'assignColor2(this)');
  }
}
populateCanvas();









var currentColor = document.querySelector('#currentColor');
var palette = document.querySelector('#palette');
var canvas = document.querySelector('#canvas');
var savedColor = '';
var colors = ['yellow', 'blue', 'green', 'orange', 'red', 'purple'];

function createColors() {
  for (var i = 0; i < colors.length; i++) {
    var div = document.createElement('div');
    palette.appendChild(div);
    div.className = 'pixel';
    div.style['background-color'] = colors[i];
    div.setAttribute('onClick', 'showColorClicked(this)');
  }
}
createColors();


/////////////////////////////////
///////////// ON CLICK
/////////////////////////////////
function showColorClicked (paletteColor) {
  savedColor = $(paletteColor).css('backgroundColor');
  currentColor.style['background-color'] = savedColor;
}
function assignColor (pixel) {
  pixel.style['background-color'] = savedColor;
  pixel.style['border'] = '1px solid ' + savedColor;
}
function assignColor2 (pixel) {
  canvas.("mouseover" , function(e){
    // if(e.buttons == 1 || e.buttons == 3){

      pixel.style['background-color'] = savedColor;
      pixel.style['border'] = '1px solid ' + savedColor;
    }
}
}
