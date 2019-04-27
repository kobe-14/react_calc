import React, { Component } from 'react';
import './App.css';
import Keypad from './components/Keypad';
import Result from './components/Displayresult'

export class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      result : ""
    }
  }
  // state = {
  //   result: ""
  // }

  clearFunc = () => {
    this.setState({
      result: ""
    });
  }  

  buttonClick = (buttonValue) => {
    // this.setState({
    //   result : this.state.result + buttonValue
    // });
    this.setState((prevStates) => {
      return {
        result: prevStates.result + buttonValue
      }
    })
  }

  solve = () => {
    // this.setState({
    //   result: eval(this.state.result)
    // });
    this.setState((prevStates) => {
      return {
        result: eval(prevStates.result)
      }
    })
  }

  render() {
    return (
      <div>
        <Result result={this.state.result}/>
        <Keypad  buttonClick={this.buttonClick} clearFunc={this.clearFunc} solve={this.solve}/>
      </div>
    )
  }
}

export default App
