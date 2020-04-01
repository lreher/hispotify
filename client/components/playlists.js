const React = require('react');

const Playlist = require('./playlist')

module.exports = function(props) {
  var playlists = props.playlists.map((playlist) => {
    console.log(playlist)

    return <Playlist key={playlist.name} name={playlist.name} songs={playlist.songs}></Playlist>
  })


  return <div class="playlists">
    {playlists}
  </div>
}