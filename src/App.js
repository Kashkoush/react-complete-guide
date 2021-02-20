import React, { Component, useState } from 'react';
import './App.css';
import Person from './Person/Person';
import Radium, { StyleRoot } from 'radium';

class App extends Component {

  state = {
    persons: [
      { id: 'kash-1', name: 'Kash', age: 27 },
      { id: 'claudia-1', name: 'Claudia', age: 24 },
      { id: 'claudia-2', name: 'Claudia2', age: 25 },
    ],
    otherState: 'some Other Value',
    showPersons: false
  }

  deletePersonHandler = (personIndex) => {
    // slice is to copy the original array and not mutate it
    // const persons = this.state.persons.slice();
    // spread operator is to copy the original array and not mutate it
    const persons = [...this.state.persons];
    persons.splice(personIndex, 1);
    this.setState({
      persons: persons
    })
  }


  nameChangeHandler = (event, id) => {

    const personIndex = this.state.persons.findIndex(person => {
      return person.id == id
    });

    // You can also use object.assign for the same reason
    // const person = Object.assign({}, this.state.persons[personIndex]);
    // Spread operator is to actually copy the object
    const person = { ...this.state.persons[personIndex] };
    person.name = event.target.value;

    const persons = [...this.state.persons];
    persons[personIndex] = person;

    this.setState({ persons: persons });
  }

  togglePersonHandler = () => {
    this.setState({
      showPersons: !this.state.showPersons
    })
  }

  render() {

    const style = {
      backgroundColor: 'green',
      color: 'white',
      font: 'inherit',
      border: '0px',
      padding: '8px',
      cursor: 'pointer',
      ':hover': {
        backgroundColor: 'lightgreen',
        color: 'black'
      }
    }

    let persons = null;

    if (this.state.showPersons) {
      persons = (
        // Same as using React.createElement()
        <div>
          {this.state.persons.map((person, index) => {
            return <Person
              click={this.deletePersonHandler.bind(this, index)}
              changed={(event) => this.nameChangeHandler(event, person.id)}
              name={person.name}
              age={person.age}
              key={person.id} />
          })}
        </div>
      );

      style.backgroundColor = 'red';
      style[':hover'] = {
        backgroundColor: 'salmon',
        color: 'black'
      }

    }

    // we use join to seperate them by a space
    // let classes = ['red', 'bold'].join(' '); // "red bold"

    const classes = [];

    if (this.state.persons.length <= 2) {
      classes.push('red'); // classes = ['red']
    }
    if (this.state.persons.length <= 1) {
      classes.push('bold');
    }

    classes.join(' '); // "red bold"

    return (
      // JSX 
      // StyleRoot Enabled for the entire app
      <StyleRoot>
        <div className="App">
          <h1>Hi, I'm a React APP</h1>
          <p className={classes.join(' ')}>This is really working!</p>
          <button style={style}
            onClick={this.togglePersonHandler}>Toogle Persons</button>
          {persons}
        </div>
      </StyleRoot>
    );
  }
  // return React.createElement('div', {className: 'App'}, React.createElement('h1', null, 'Hi, I\'m a React App!!!'))
}

export default Radium(App);
