import React, { Component } from 'react';
import { CardList } from './components/card-list/card-list.component';
import { SearchBox } from './components/searchbox/searchbox.component'
import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

class App extends Component {
  constructor() {
    super();

    this.state = {
      fruits: [],
      searchText: ''
    }
  }

  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then(users => this.setState({ fruits: users }))
  }

  render() {
    const {fruits, searchText} = this.state;
    const filteredFruits = fruits.filter(fruit => {
      return fruit.name.toLowerCase().includes(searchText.toLowerCase())
    });
    return (
      <div className="App">
        <SearchBox placeholder="Search" handleChange={
          e => this.setState({searchText: e.target.value})
        } />
        <CardList cards={filteredFruits} />
      </div>
    );
  }

}

export default App;
