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

  clearEverything = () => {
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

  inputType = (e) => {
    this.setState({
      result : e.target.value
    });
  }

  clearFunc = () => {
    this.setState({
      result : this.state.result.slice(0,-1)
    });
  }

  render() {
    return (
      <div className="App">
        <Result result={this.state.result} inputType={this.inputType}/>
        <Keypad  buttonClick={this.buttonClick} clearEverything={this.clearEverything} solve={this.solve} clearFunc={this.clearFunc}/>
      </div>
    )
  }
}

export default App
