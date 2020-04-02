const React = require('react');

const Playlists = require('./playlists')

module.exports = function(props) {
  return <div class="content">
      <h2>Playlists</h2>
      <Playlists playlists={props.playlists}></Playlists>
  </div>
}