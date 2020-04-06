const React = require('react');

const Song = require('./song')

module.exports = function(props) {
  var songs = props.songs.map((song) => {
   return <Song song={song}></Song>
  })

  return <div class="playlist">
    <div class="playlist-title"> 
      <h3>{props.name}</h3>
      <div class="songs">{songs}</div>
    </div>
  </div>
}