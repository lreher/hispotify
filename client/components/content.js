const React = require('react');

const Playlists = require('./playlists')

module.exports = function(props) {
  return <div class="content">
      <Playlists playlists={props.playlists}></Playlists>
  </div>
}