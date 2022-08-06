import React, { Component } from 'react'
import loading from "./Spinner-2.gif"

export class spinner extends Component {
  render() {
    return (
      <div>
        <center><img src={loading} alt='loading' ></img></center>
      </div>
    )
  }
}

export default spinner
