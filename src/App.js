import React from 'react'
import Person from './Person'
import './style.css'

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <div className="container">
        <Person />
        </div>
      </div>
    );
  }
}

export default App;




