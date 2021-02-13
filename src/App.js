import React, { Component, useState } from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {

  state = {
    persons: [
      { name: 'Kash', age: 27 },
      { name: 'Cladia', age: 24 }
    ],
    otherState: 'some Other Value'
  }

  // console.log(this.state);

  switchNameHandler = (newName) => {
    // console.log('was Clicked');
    // Don't do this personsState[0].name = 'Kashkoush';

    // Merge this state with the old state
    this.setState({
      persons: [
        { name: newName, age: 27 },
        { name: 'Claudia', age: 24 }
      ]
    })
  }

  // event object is passed automatically 
  nameChangeHandler = (event) => {
    this.setState({
      persons: [
        { name: event.target.value, age: 27 },
        { name: 'Claudia', age: 24 }
      ]
    })
  }

  render() {

    const style = {
      backgroundColor: 'white',
      font: 'inherit',
      border: '2px solid blue',
      padding: '8px',
      cursor: 'pointer'
    }

    return (
      // JSX 
      <div className="App">
        <h1>Hi, I'm a React APP</h1>
        <p>This is really working!</p>
        <button style={style} 
        onClick={() => this.switchNameHandler('kashkoushi2')}>Switch Name</button>
        <Person
          name={this.state.persons[0].name}
          age={this.state.persons[0].age}
          click={this.switchNameHandler.bind(this, 'Kashkoushi')}
          changed={this.nameChangeHandler}
        >, <b>My Hobbie:</b> Racing</Person>
        <Person name={this.state.persons[1].name} age={this.state.persons[1].age}></Person>
      </div>
    );
  }
  // return React.createElement('div', {className: 'App'}, React.createElement('h1', null, 'Hi, I\'m a React App!!!'))
}

export default App;
