var clickX = 0;
var mouseDown = false;

module.exports = function(scrollElement) {
  scrollElement.addEventListener('mousedown', event => {
    mouseDown = true;
    clickX = event.clientX;
  })

  scrollElement.addEventListener('mousemove', event => {
    if (mouseDown) {
      console.log("hmm")
    }
  })

  scrollElement.addEventListener('mouseup', event => {
    mouseDown = false;
  })
}