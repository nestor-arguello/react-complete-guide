import React, { Component } from 'react';
import './App.css';
import Radium, {StyleRoot} from 'radium';
import Person from './Person/Person'

class App extends Component {
  state = {
    persons: [
      { id: '1', name: 'Max', age:28 },
      { id: '2', name: 'Manu', age:29 },
      { id: '3', name: 'Stephanie', age:26 }
    ],
    otherState: 'some other value',
    showPersons: false
  }
  
  handleChangeName = personId => event => {
    const { value: newName } = event.target;
    const changeName = person => {
      if (person.id === personId) {
        person.name = newName;
        return person;
      } else {
        return person;
      }
    }
    const newPersons = this.state.persons.map(changeName);

    this.setState({ persons: newPersons });
  }
  
  handleTogglePersons = () => {
    const doesShow = this.state.showPersons;
    this.setState({ showPersons: !doesShow });
  }

  handleDeletePerson = clickedId => () => {
    const { persons } = this.state;
    const newPersons =
      persons.filter((person) => {
        return person.id !== clickedId;
      });

    this.setState({ persons: newPersons });
  }

  render() {
    const style = {
      backgroundColor: 'green',
      color: 'white',
      font: 'inherit',
      border: '1px solid blue',
      padding: '8px',
      cursor: 'pointer',
      ':hover': {
        backgroundColor: 'lightgreen' ,
        color: 'black'
      }
    };
    
    let persons = null;
    
    if (this.state.showPersons) {
      persons = (
        <div>
          {
            this.state.persons.map((person) => {
              const { id, name, age } = person;

              return (
                <Person
                  key={id}
                  name={name}
                  age={age}
                  handleDeletePerson={
                    this.handleDeletePerson(id)
                  }
                  handleChangeName={this.handleChangeName(id)}
                />
              );
            })
          }  
        </div>
      );

      style.backgroundColor= 'red';
      style[':hover'] = {
        backgroundColor: 'lightcoral',
        color: 'black'
      }
    }

    const classes = [];
    if (this.state.persons.length <= 2) {
      classes.push('red');
    }
    if (this.state.persons.length <= 1) {
      classes.push('bold');
    }

    return (
      <StyleRoot>
        <div className="App">
          <h1>Hi I'm a React App</h1>
          <p className={classes.join(' ')}>This is really working!</p>
          <button
            style={style}
            onClick={this.handleTogglePersons}
          >
            Toggle Persons
        </button>
          {persons}
        </div>
      </StyleRoot>
    );
  }
}

export default Radium(App);
