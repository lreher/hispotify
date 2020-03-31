const React = require('react');
const ReactDOM = require('react-dom')

const Header = require('./components/header')

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      username: "Johnny Appleseed",
      age: 27
    };
  }

  render() {
    return <div>
      <Header name={this.state.username} age={this.state.age}></Header>
    </div>
  }
}

document.addEventListener('DOMContentLoaded', function () {
  ReactDOM.render(<App name="hey"/>, document.getElementById('root'))
})
