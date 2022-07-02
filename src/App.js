import logo from './logo.svg';
import './App.css';
import { Component } from 'react'

class App extends Component {

  constructor(){
    super();

    this.state = {
      name : {firstName : 'Vikash', lastName: 'Anand'}
    }
  }

  render(){
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Hi {this.state.name.firstName} {this.state.name.lastName} !
          </p>
          <button onClick={() => {
            this.setState((state, props) => {
              return {name : {firstName: 'Sradha', lastName: 'Jena'}}
            }, ()=> {
              console.log(this.state); // Runs After UpdateState
            })
            console.log(this.state); // Synchronous Call, Runs Before UpdateState
          }}> Change Name </button>
        </header>
      </div>
    )
  }
}

export default App;
