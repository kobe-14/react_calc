import React, { Component } from 'react';
// import $ from 'jquery';
import './comp.css';

export class Displayresult extends Component {
    
  render() {


    // $('#input').inputfit();
    return (
      <div className="buttonWrapper">
        <input type="text"  id="input" onChange = {this.props.inputType} onKeyPress={this.props.keyHandler} value={this.props.result} className="resultDisplay"></input>
      </div>
    )
  }
  
}

export default Displayresult
