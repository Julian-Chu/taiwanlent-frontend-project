import React, { Component } from "react";
import { connect } from "react-redux";
import { writeMessageToCandidates } from "../../actions/index";

class WriteMessageToCandidates extends Component {
  render() {
    const candidates = this.props.candidates || [];
    console.log(candidates);
    return (
      <div>
        <h5>寄件者:{localStorage.getItem("username")}</h5>
        <h5>Mail To:</h5>
        <ol>
          {candidates.map((candidate, index) => (
            <li key={index}>{candidate ? candidate.name : ""}</li>
          ))}
        </ol>
        <label>Topic:</label>
        <br />
        <input type="text" />
        <br />
        <label>Message:</label>
        <br />
        <textarea />
        <br />
        <button
          className="button  button-border button-circle button-dark"
          onClick={() => this.props.writeMessageToCandidates()}
        >
          Submit
        </button>

        <button
          className="button  button-border button-circle button-dark"
          onClick={() => this.props.toggleMessageWin(false)}
        >
          Back
        </button>
      </div>
    );
  }
}

export default connect(
  state => ({ candidates: state.candidates }),
  { writeMessageToCandidates }
)(WriteMessageToCandidates);
