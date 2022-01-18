import React from 'react';

import { CardList } from './components/card-list/card-list.component';
import './App.css';

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      monsters: []
    }
  }

  componentDidMount() {
    const monstersRequest = fetch('https://jsonplaceholder.typicode.com/users');

    monstersRequest
      .then(response => response.json())
      .then(data => this.setState({
        monsters: data
      }));
  }

  render() {
    const { monsters } = this.state;

    return (
      <div>
        <CardList monsters={monsters} />
      </div>
    )
  }
}

export default App;
