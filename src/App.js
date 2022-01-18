import React from 'react';

import { CardList } from './components/card-list/card-list.component';
import { SearchBox } from './components/search-box/search-box.component'; 
import './App.css';

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      monsters: [],
      searchField: '',
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
    const { monsters, searchField } = this.state;
    const filtedMonsters = monsters.filter(monster => {
      return monster.name.toLowerCase().includes(searchField.toLowerCase());
    });

    return (
      <div className="app-container">
        <SearchBox
          placeholder="Search monster"
          onSearchBoxChange={e => this.setState({ searchField: e.target.value })}
        />
        <CardList monsters={filtedMonsters} />
      </div>
    )
  }
}

export default App;
