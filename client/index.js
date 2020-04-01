const React = require('react');
const ReactDOM = require('react-dom')

const Header = require('./components/header')
const Content = require('./components/content')

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      playlists: [
        {
          name: "Funky Playlist",
          songs: ["song1", "song2"]
        },
        {
          name: "Best Stuff",
          songs: ["song3", "song4"]
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
})
