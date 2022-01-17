import React from 'react';
import './App.css';

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      text: 'Hello world'
    }
  }

  buttonHandler = () => {
    this.setState({
      text: 'Different !!!'
    });
  }

  render() {
    const { text } = this.state;

    return (
      <React.Fragment>
        <p>{text}</p>
        <button onClick={this.buttonHandler}>click</button>
      </React.Fragment>
    )
  }
}

export default App;
