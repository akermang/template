import React, { Component } from 'react';
import './App.css';
import MyComponent from './componets/My.component.jsx';
import HeaderComponent from './componets/Header.component.jsx'

class App extends Component {

  render() {
    return (
      <div className="App">
       <HeaderComponent name="Gal A"/>
       <MyComponent/>
      </div>
    );
  }
}

export default App;
