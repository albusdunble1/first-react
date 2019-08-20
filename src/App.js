import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person'

class App extends Component {
  state = {
    person: [
      {name: 'Juel', age: 21},
      {name: 'Evans', age: 35},
      {name: 'Ng', age: 10}
    ]
  }

  switchNameHandler = () => {
    // console.log('Hello')

    // inherited method from Component which merges whatever that's passed in with state
    this.setState(
      {
        person: [
          {name: 'Juel Evans', age: 100},
          {name: 'Evans', age: 35},
          {name: 'Ng Wei Sheng', age: 21}
        ]
      }
    )
  }

  render() {
    return (
      <div className="App">
        <h1>Juel's React Application</h1>
        <Person name={this.state.person[0].name} age={this.state.person[0].age}/>
        <Person name={this.state.person[1].name} age={this.state.person[1].age}>His first name is Juel, by the way.</Person>
        <Person name={this.state.person[2].name} age={this.state.person[2].age}/>
        <button onClick={this.switchNameHandler}>Switch Names</button>
      </div>
    );
  }
}

export default App;
