import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {
  state = {
    persons: [
      {
        name: 'Hao',
        age: 24
      }, {
        name: 'Mike',
        age: 21
      }, {
        name: 'John',
        age: 25
      }
    ],
    otherState: 'some other value'
  }
  
  switchNameHandler = (newName) => {
    // console.log('Was clicked!');
    this.setState({
      persons: [
        {
          name: newName,
          age: 24
        }, {
          name: 'Mike',
          age: 21
        }, {
          name: 'John',
          age: 25
        }
      ]
    });
  }
  
  render() {
    return (
      <div className="App">
        <h1>Hi, This is a React App</h1>
        <button onClick={() => this.switchNameHandler('Jesse!')}>Switch Name</button>
        <Person 
          name={this.state.persons[0].name} 
          age={this.state.persons[0].age}
          click={this.switchNameHandler.bind(this, 'Hao!')}
          > My Hobbies: Swimming</Person>
        <Person name={this.state.persons[1].name} age={this.state.persons[1].age}> My Hobbies: Hiking</Person>
      </div>
    );
//    return React.createElement('div', {className: 'App'}, React.createElement('h1', null, 'Hi, This is a React App!'));
  }
}

export default App;
