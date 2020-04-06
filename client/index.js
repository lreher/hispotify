const React = require('react');
const ReactDOM = require('react-dom')

const Header = require('./components/header')
const Content = require('./components/content')

const scrollAssist = require('./utilities/scrollAssit')

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      playlists: [
        {
          name: "Funky Playlist",
          songs: [{
            title: "title",
            album: "album",
            artist:"artist"
          }, 
          {
            title: "title",
            album: "album",
            artist:"artist"
          }]
        }
      ]
    };
  }

  render() {
    return <div>
      <Header></Header>
      <Content playlists={this.state.playlists}></Content>
    </div>
  }
}

document.addEventListener('DOMContentLoaded', function () {
  ReactDOM.render(<App/>, document.getElementById('root'))

  scrollAssist(document.getElementById("playlists"))
})
