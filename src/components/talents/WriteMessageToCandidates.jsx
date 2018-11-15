import React, { Component } from "react";
import { connect } from "react-redux";
import { writeMessageToCandidates } from "../../actions/index";
import { GetBusinessUserData } from "../../actions/businessuser";
import { bindActionCreators } from "redux";

export class WriteMessageToCandidates extends Component {
  constructor(props) {
    super(props);
    this.state = {
      subject: "",
      message: ""
    };
  }
  componentDidMount() {
    this.props.GetBusinessUserData(this.props.history);
  }

  handleMessageChange(event) {
    this.setState({ message: event.target.value });
  }

  handleSubjectChange(event) {
    this.setState({ subject: event.target.value });
  }

  handleSubmit() {
    this.props.writeMessageToCandidates(
      {
        businessUser: this.props.businessUserData,
        subject: this.state.subject,
        message: this.state.message,
        candidates: this.props.candidates
      },
      e => this.props.toggleMessageWin(e)
    );
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
        <label>Subject:</label>
        <br />
        <input
          type="text"
          value={this.state.subject}
          onChange={e => this.handleSubjectChange(e)}
        />
        <br />
        <label>Message:</label>
        <br />
        <textarea
          value={this.state.message}
          onChange={e => this.handleMessageChange(e)}
        />

        <br />
        <button
          id="submit"
          className="button  button-border button-circle button-dark"
          onClick={() => this.handleSubmit()}
        >
          Submit
        </button>

        <button
          id="back"
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
