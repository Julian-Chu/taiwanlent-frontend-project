import React, { Component } from "react";
import { connect } from "react-redux";
import { writeMessageToCandidates } from "../../actions/index";
import { GetBusinessUserData } from "../../actions/businessuser";
import { bindActionCreators } from "redux";

export class WriteMessageToCandidates extends Component {
  componentDidMount() {
    this.props.GetBusinessUserData(this.props.history);
  }
  render() {
    const candidates = this.props.candidates || [];
    return (
      <div>
        <h5 id="sender">寄件者:{this.props.businessUserData.email}</h5>
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

function mapDispatchToProps(dispatch) {
  return bindActionCreators(
    {
      GetBusinessUserData,
      writeMessageToCandidates
    },
    dispatch
  );
}
export default connect(
  state => ({
    candidates: state.candidates,
    businessUserData: state.businessUserData
  }),
  mapDispatchToProps
)(WriteMessageToCandidates);
