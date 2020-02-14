import React, { Component } from 'react';
import Ninjas from './contacts.jsx';
import AddNinja from './addNinja.jsx';

class App extends Component {
  state = {
    ninjas: [
      {name: 'Songo', age:'34', sword:'pogo', id: 1},
      {name: 'Rikimaru', age: '420', sword: 'Jade', id: 2},
      {name: "Ayale", age:'14', sword:'sai', id: 3},
    ]
  }
  addNinja = ninja => {
    ninja.id = Math.random()
    console.log(ninja)
    this.setState({
      ninjas:[...this.state.ninjas, ninja]
    })
  }
  deleteNinja = id => {
     let ninjas = this.state.ninjas.filter(el=> el.id !== id)
     this.setState({ninjas:ninjas})
  }
  componentDidMount(){
    console.log('mounted')
  }
  componentDidUpdate(prevProps, prevState){
    console.log('update')
    console.log(prevProps)
    console.log(prevState)
  }
  render() {
    return (
      <div className="App">
        <h1>My another attempt at liking React</h1>
        <p>Wilkomm peeples</p>
        <Ninjas ninjas={this.state.ninjas} deleteNinja={this.deleteNinja}/>
        <AddNinja addNinja={this.addNinja}/>
      </div>
    );
  }
}

export default App;
