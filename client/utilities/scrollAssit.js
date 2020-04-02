var runner;

var clickX = 0;
var mouseX = 0;

var mouseDown = false;

function scroll(scrollElement) {
  scrollElement.scrollLeft += (mouseX - clickX)/100;
}

module.exports = function(scrollElement) {
  scrollElement.addEventListener('mousedown', event => {
    mouseDown = true;
    clickX = event.clientX;
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