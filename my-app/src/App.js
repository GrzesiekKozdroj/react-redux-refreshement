import React, { Component } from 'react';
import Ninjas from './contacts.jsx';
let ninjas = [
  {name: 'Songo', age:'34', sword:'pogo', id: 1},
  {name: 'Rikimaru', age: '420', sword: 'Jade', id: 2},
  {name: "Ayale", age:'14', sword:'sai', id: 3},
]
class App extends Component {
  state = {ninjas: ninjas}
  render() {
    return (
      <div className="App">
        <h1>My another attempt at liking React</h1>
        <p>Wilkomm peeples</p>
        <Ninjas ninjas={this.state.ninjas}/>
      </div>
    );
  }
}

export default App;
