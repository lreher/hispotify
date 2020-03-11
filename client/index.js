const React = require('react');
const ReactDOM = require('react-dom')

// const element = React.createElement(
//   'div',
//   {className: 'greeting'},
//   'Hello, world!'
// );

// BUT WHAT IF
const element = <h1>Hey Buddy</h1>;


document.addEventListener('DOMContentLoaded', function () {
  ReactDOM.render(element, document.getElementById('root'))
})
