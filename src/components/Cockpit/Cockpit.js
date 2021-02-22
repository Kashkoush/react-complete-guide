import React from 'react';
import classes from './Cockpit.module.css'

const cockpit = (props) => {

    // Props should give persons, showperson

    const assignedClasses = [];

    let btnClass = '';

    if (props.showPersons) {
        btnClass = classes.Red;
    }

    if (props.persons.length <= 2) {
        assignedClasses.push(classes.red); // classes = ['red']
        // Was assignedClasses.push( 'red' );
    }
    if (props.persons.length <= 1) {
        assignedClasses.push(classes.bold);
        // Was assignedClasses.push( 'bold' );
    }



    return (
        <div className={classes.Cockpit}>
            <h1>Hi, I'm a React APP</h1>
            <p className={assignedClasses.join(' ')}>This is really working!</p>
            <button className={btnClass}
                onClick={props.clicked}>Toogle Persons</button>
        </div>
    );
}

export default cockpit;