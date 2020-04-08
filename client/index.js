const React = require('react');
const ReactDOM = require('react-dom');

const Header = require('./components/header');
const Login = require('./components/spotifyLogin');
const Content = require('./components/content');

const scrollAssist = require('./utils/scrollAssit');

const userID = require('./utils/createID')();

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
      ],
      userID: userID
    };
  }

  render() {
    return <div>
      <Header></Header>
      <Login userID={this.state.userID}></Login>
    </div>
  }
}

document.addEventListener('DOMContentLoaded', function () {
  //document.getElementById('spotifyLogin').submit();

  ReactDOM.render(<App/>, document.getElementById('root'));

  scrollAssist(document.getElementById("playlists"));
})
