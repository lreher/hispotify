const React = require('react');

module.exports = function(props) {
  console.log(props)
  return <div class="playlist">
    <div class="playlist-title">
      <h3>{props.name}</h3>
    </div>
  </div>
}