const React = require('react');
const ReactDOM = require('react-dom')

const Header = require('./components/header')
const Content = require('./components/content')


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
      <Header></Header>
      <Content name={this.state.username} age={this.state.age}></Content>
    </div>
  }
}

document.addEventListener('DOMContentLoaded', function () {
  ReactDOM.render(<App name="hey"/>, document.getElementById('root'))
})
