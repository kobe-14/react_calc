import React, { Component } from 'react';
import './comp.css';

export class Keypad extends Component {

  render() {
    const clearStyle ={
        width: '155px'
    }
    return (
      <div className="buttonWrapper">
        <div>
            <button name="1" onClick={e => this.props.buttonClick(e.target.name)} className="buttonStyle">1</button>
            <button name="2" onClick={e => this.props.buttonClick(e.target.name)} className="buttonStyle">2</button>
            <button name="3" onClick={e => this.props.buttonClick(e.target.name)} className="buttonStyle">3</button>
            <button name="+" onClick={e => this.props.buttonClick(e.target.name)} className="buttonStyle">+</button>
        </div>
        <div>
            <button name="4" onClick={e => this.props.buttonClick(e.target.name)} className="buttonStyle">4</button>
            <button name="5" onClick={e => this.props.buttonClick(e.target.name)} className="buttonStyle">5</button>
            <button name="6" onClick={e => this.props.buttonClick(e.target.name)} className="buttonStyle">6</button>
            <button name="-" onClick={e => this.props.buttonClick(e.target.name)} className="buttonStyle">-</button>
        </div>
        <div>
            <button name="7" onClick={e => this.props.buttonClick(e.target.name)} className="buttonStyle">7</button>
            <button name="8" onClick={e => this.props.buttonClick(e.target.name)} className="buttonStyle">8</button>
            <button name="9" onClick={e => this.props.buttonClick(e.target.name)} className="buttonStyle">9</button>
            <button name="*" onClick={e => this.props.buttonClick(e.target.name)} className="buttonStyle">*</button>
        </div>
        <div>
            <button name="c" onClick={this.props.clearFunc} className="buttonStyle">c</button>
            <button name="ce" onClick={this.props.clearEverything} className="buttonStyle">ce</button>
            <button name="0" onClick={e => this.props.buttonClick(e.target.name)} className="buttonStyle">0</button>
            <button name="/" onClick={e => this.props.buttonClick(e.target.name)} className="buttonStyle">/</button>
        </div>
        <div>
            <button name="." onClick={e => this.props.buttonClick(e.target.name)} className="buttonStyle">.</button>
            <button name="=" onClick={this.props.solve} className="buttonStyle" style={clearStyle}>=</button>
        </div>
      </div>
    )
  }
}

export default Keypad
