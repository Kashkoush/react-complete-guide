import React, { Component, useState } from 'react';
import classes from './App.module.css';
import Persons from '../components/Persons/Persons';
import Cockpit from '../components/Cockpit/Cockpit';

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

    let persons = null;

    if (this.state.showPersons) {
      persons = <Persons
        persons={this.state.persons}
        clicked={this.deletePersonHandler}
        changed={this.nameChangeHandler} />
    }

    return (
      // JSX 
      <div className={classes.App}>
        <Cockpit
          showPersons={this.state.showPersons}
          persons={this.state.persons} 
          clicked={this.togglePersonHandler}/>
        {persons}
      </div>
    );
  }
  // return React.createElement('div', {className: 'App'}, React.createElement('h1', null, 'Hi, I\'m a React App!!!'))
}

export default App;
