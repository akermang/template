import React, { Component } from 'react';
import './App.css';
import GalComponent from './componets/gal.component.jsx';
import HelloWorld from './componets/helloWorld.component.jsx'

class App extends Component {

  render() {
    return (
      <div className="App">
       <HelloWorld name="Gal A"/>
      
       <GalComponent/>
      </div>
    );
  }
}

export default App;
