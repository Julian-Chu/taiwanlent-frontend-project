import React, { Component } from 'react';
import { connect } from 'react-redux';

class WriteMessageToTalents extends Component {
  render() {
    return (
      <div>
        <h5>寄件者:{localStorage.getItem("username")}</h5>
        <h5>Mail To</h5>
        <ol>
          {this.props.candidates.map(
            (candidate, index) => <li key={index}>{candidate.name}</li>
          )}
        </ol>
        <label>Topic:</label>
        <br></br>
        <input type="text"></input>
        <br></br>
        <label>Message:</label>
        <br></br>
        <textarea></textarea>
        <br></br>
        <button>Submit</button>

        <a href="/">back to home</a>
      </div>
    )
  }
}

export default connect()(WriteMessageToTalents);