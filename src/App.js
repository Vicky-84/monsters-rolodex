import './App.css';
import { Component } from 'react'

class App extends Component {

  constructor(){
    super();

    this.state = {
      monsters: [
        {name : 'Linda'},
        {name : 'Frank'},
        {name : 'Jacky'},
        {name : 'Devil'}
      ]
    }
  }

  render(){
    return (
      <div className="App">
        {
          this.state.monsters.map((monster, index)=> {
            return <h1 key={index}>{monster.name}</h1>
          })
        }
      </div>
    )
  }
}

export default App;
