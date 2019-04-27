import React, { Component } from 'react'

export class Displayresult extends Component {
  render() {
    return (
      <div>
        <div className="resultDisplay">
            {this.props.result}
        </div>
      </div>
    )
  }
}

export default Displayresult
