import { Component } from 'react';
import CardList from './components/card-list/card-list.component';
import SearchBox from './components/search-box/search-box.component';
import './App.css';

class App extends Component {

  constructor () {
    super();

    this.state = {
      monsters: [],
      searchString: ''
    }
  }

  componentDidMount () {
    fetch('https://jsonplaceholder.typicode.com/users')
    .then( response => response.json())
    .then( users => this.setState( () => {
      return (
        {monsters: users}
      )
    }, () => {
      console.log(this.state)
    }) )
  }

  onSearchChange = ( event ) => {
    console.log(event.target.value)
    let searchString = event.target.value.toLowerCase()
    this.setState( () => {
      return {searchString}
    })
  }
  
  render () {

    let filteredMonsters = this.state.monsters.filter( ( monster ) => {
      return monster.name.toLowerCase().includes(this.state.searchString)
    })
    
    return (
      <div className="App">
        <h1 className='app-title'>Monsters Rolodex</h1>
        <SearchBox 
          className='monsters-search-box'
          placeholder='search monsters'
          onChangeHandler={this.onSearchChange}
        />
        <CardList monsters={filteredMonsters} />
      </div>
    );
  }
}

export default App;
