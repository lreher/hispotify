const React = require('react');
const ReactDOM = require('react-dom')

const App = require('./components/app')

document.addEventListener('DOMContentLoaded', function () {
  ReactDOM.render(<App />, document.getElementById('root'))
})
