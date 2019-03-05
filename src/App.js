import React, { Component } from 'react';
import './App.css';
import MyComponent from './componets/My.component.jsx';
import HelloWorld from './componets/helloWorld.component.jsx'

class App extends Component {

  render() {
    return (
      <div className="App">
       <HelloWorld name="Gal A"/>
       <MyComponent/>
      </div>
    );
  }
}

export default App;
