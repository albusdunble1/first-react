import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person'
import UserInput from './UserInput/UserInput'
import UserOutput from './UserOutput/UserOutput'

class App extends Component {
  state = {
    person: [
      {name: 'Juel', age: 21},
      {name: 'Evans', age: 35},
      {name: 'Ng', age: 10}
    ],
    usernames:['albusdunble1', 'weisheng_rules@hotmail.com'],
    showPerson: false
  }

  switchNameHandler = (newName) => {
    // console.log('Hello')

    // inherited method from Component which merges whatever that's passed in with state
    this.setState(
      {
        person: [
          {name: newName, age: 100},
          {name: 'Evans', age: 35},
          {name: 'Ng Wei Sheng', age: 21}
        ]
      }
    )
  }

  nameChangedHandler = (event) => {
    this.setState(
      {
        person: [
          {name: 'Juel', age: 100},
          {name: 'Evans', age: 35},
          {name: event.target.value, age: 21}
        ]
      }
    )
  }

  username1ChangedHandler = (event) => {
    this.setState(
      {
        usernames:[
          event.target.value,
          'weisheng_rules@hotmail.com'
        ]
      }
    )
  }
  username2ChangedHandler = (event) => {
    this.setState(
      {
        usernames:[
          'albusdunble1',
          event.target.value
        ]
      }
    )
  }

  // my ingenious way of show/hide

  // showPersonHandler = () => {
  //   if (this.state.showPerson === false){
  //     this.setState(
  //       {
  //         showPerson: true,
  //         showHide: {
  //           display: 'block'
  //         }
  //       }
  //     )
  //   }else{
  //     this.setState(
  //       {
  //         showPerson: false,
  //         showHide: {
  //           display: 'none'
  //         }
  //       }
  //     )
  //   }
  // }

  showPersonHandler = () => {
    this.setState({showPerson: !this.state.showPerson})
  }

  deletePersonHandler = (pIndex) => {
    const persons = [...this.state.person]
    persons.splice(pIndex, 1)
    this.setState({person: persons})
  }

  render() {
    const style = {
      backgroundColor: 'lime',
      padding: '8px',
      fontSize: '25px',
      fontWeight: 'bold',
      color: 'white',
      cursor: 'pointer',
      borderRadius: '5px'
    }

    let persons = null;

    if (this.state.showPerson){
      persons = (
        <div>
          {this.state.person.map((p, pIndex) => {
            return <Person name={p.name} age={p.age} click={() => this.deletePersonHandler(pIndex)}/>
          })}
          {/* <Person name={this.state.person[0].name} age={this.state.person[0].age}/>
          <Person name={this.state.person[1].name} age={this.state.person[1].age} click={() => this.switchNameHandler('Juel')}>His first name is Juel, by the way.</Person>
          <Person name={this.state.person[2].name} age={this.state.person[2].age} click={this.switchNameHandler.bind(this, 'Michael')} changed={this.nameChangedHandler}/> */}
        </div>
      )
    }

    return (
      <div className="App">
        <h1>Juel's React Application</h1>
        {persons}
        {/* <button style={style} onClick={this.switchNameHandler.bind(this, 'Lolzers')}>Switch Names</button> */}
        <button style={style} onClick={this.showPersonHandler}>Show/Hide</button>
        <UserInput usernames={this.state.usernames} changed1={this.username1ChangedHandler} changed2={this.username2ChangedHandler}/>
        <UserOutput usernames={this.state.usernames}/>
        <UserOutput usernames={this.state.usernames}/>
        <UserOutput usernames={this.state.usernames}/>
        <UserOutput usernames={['dummy name 1', 'dummy name 2']}/>
        
      </div>
    );
  }
}

export default App;


// State in functional components through useState Hook (NEW and not the conventional way)

// import React, { useState } from 'react';
// import './App.css';
// import Person from './Person/Person'

// const App = (props) => {
//   const [personState, setPersonState] = useState({
//     person: [
//       {name: 'Juel', age: 21},
//       {name: 'Evans', age: 35},
//       {name: 'Ng', age: 10}
//     ]
//   })

//   doesn't merge so splitting states into different "useState" is required 
//   const [otherState, setOtherState] = useState('the other unused state')

//   console.log(personState)
//   console.log(otherState)
  
//   const switchNameHandler = () => {
//     // console.log('Hello')

//     setPersonState(
//       {
//         person: [
//           {name: 'Juel Evans', age: 100},
//           {name: 'Evans', age: 35},
//           {name: 'Ng Wei Sheng', age: 21}
//         ]
//       }
//     )
//   }

//     return (
//       <div className="App">
//         <h1>Juel's React Application</h1>
//         <Person name={personState.person[0].name} age={personState.person[0].age}/>
//         <Person name={personState.person[1].name} age={personState.person[1].age}>His first name is Juel, by the way.</Person>
//         <Person name={personState.person[2].name} age={personState.person[2].age}/>
//         <button onClick={switchNameHandler}>Switch Names</button>
//       </div>
//     );
//   }


// export default App;

