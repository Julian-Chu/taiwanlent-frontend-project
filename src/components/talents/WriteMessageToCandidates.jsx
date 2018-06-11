import React, { Component } from 'react';
import { connect } from 'react-redux';

class WriteMessageToCandidates extends Component {
  render() {
    const candidates = this.props.candidates || [];
    return (
      <div>
        <h5>寄件者:{localStorage.getItem("username")}</h5>
        <h5>Mail To</h5>
        <ol>
          {candidates.map(
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

        <button onClick={()=>this.props.toggleMessageWin(false)}>back to Talents</button>
      </div>
    )
  }
}

export default connect(state =>({candidates: state.candidates})
, null)(WriteMessageToCandidates);