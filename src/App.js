import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {
  state = {
    persons: [
      { name: 'Hao', age: 24 }, 
      { name: 'Mike', age: 21 }, 
      { name: 'John', age: 25 }
    ],
    otherState: 'some other value',
    showPersons: false
  }
  
  switchNameHandler = (newName) => {
    // console.log('Was clicked!');
    this.setState({
      persons: [
        { name: newName, age: 24}, 
        { name: 'Mike', age: 21 }, 
        { name: 'John', age: 25 }
      ]
    });
  }
  
  nameChangedHandler = (event) => {
    this.setState({
      persons: [
        { name: 'Hao', age: 24}, 
        { name: event.target.value, age: 21 }, 
        { name: 'John', age: 25 }
      ]
    });
  }
  
  togglePersonsHandler = () => {
    const doesShow = this.state.showPersons;
    this.setState({showPersons: !doesShow});
  }
  
  render() {
    const style = {
      backgroundColor: 'white',
      font: 'inherit',
      border: '1px solid blue',
      padding: '8px',
      cursor: 'pointer'
    };
    
    return (
      <div className="App">
        <h1>Hi, This is a React App</h1>
        <button style={style} onClick={this.togglePersonsHandler}>Toggle Persons</button>
        {
          this.state.showPersons ?
            <div>
              <Person 
                name={this.state.persons[0].name} 
                age={this.state.persons[0].age}
                click={this.switchNameHandler.bind(this, 'Hao!')}
                changed={this.nameChangedHandler}
                > My Hobbies: Swimming</Person>
              <Person 
                name={this.state.persons[1].name} 
                age={this.state.persons[1].age}
                changed={this.nameChangedHandler}
                > My Hobbies: Hiking</Person>
            </div> : null
        }
      </div>
    );
//    return React.createElement('div', {className: 'App'}, React.createElement('h1', null, 'Hi, This is a React App!'));
  }
}

export default App;
