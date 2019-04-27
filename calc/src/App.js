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
      try {return {
        result: eval(prevStates.result)  }
      }
      catch (e){
        alert("Please Enter Only Numbers")
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

  handleKeyDown = (e) => {
    let code = e.keyCode || e.which;
    if (code === 13) {
      this.solve();
    }
  }

  // a = () => {
  //   document.querySelector(window).addEventListner("keypress", () => {
  //     this.solve();
  //   });
  // }

  render() {
    return (
      <div className="App">
        <Result result={this.state.result} inputType={this.inputType} keyHandler = {this.handleKeyDown}/>
        <Keypad  buttonClick={this.buttonClick} clearEverything={this.clearEverything} solve={this.solve} clearFunc={this.clearFunc} />
      </div>
    )
  }
}

export default App
