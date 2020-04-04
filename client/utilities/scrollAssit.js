var runner;

var clickX = 0;
var clickScrollX = 0;

var mouseX = 0;
var mouseDown = false;

function scroll(scrollElement) {
  var distance = Math.sqrt((clickX-mouseX) * (clickX-mouseX));

  if (mouseX > clickX) {
    distance *= -1;
  }

  scrollElement.scrollLeft += distance/50;
}

module.exports = function(scrollElement) {
  scrollElement.addEventListener('mousedown', event => {
    mouseDown = true;

    clickX = event.clientX;
    clickScrollX = scrollElement.scrollLeft;

    runner = setInterval(scroll, 10, scrollElement);
  })

  scrollElement.addEventListener('mousemove', event => {
    if (mouseDown) {
      mouseX = event.clientX;
    }
  })

  scrollElement.addEventListener('mouseup', event => {
    mouseDown = false;

    clearInterval(runner);
  })
}