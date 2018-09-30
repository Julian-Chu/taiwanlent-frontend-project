import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import require_Auth from "../require_authentication";
import { UploadProfilePhoto } from "../../actions/personaluser";
import { Field, reduxForm, reset, formValueSelector, change } from "redux-form";
import { S3PhotoBucket } from "../../globalsetting";
import {
  GetPersonalUserData,
  UpdatePersonalUserData
} from "../../actions/personaluser";
import "../../styles/UploadPhoto.css";

class UploadPhoto extends Component {
  constructor(props) {
    super(props);
    this.onFormSubmit = this.onFormSubmit.bind(this);
    this.state = { file: null };
  }

  componentWillMount() {
    console.log(this.props);
    if (
      Object.keys(this.props.initialValues).length === 0 &&
      this.props.initialValues.constructor === Object
    ) {
      this.props.GetPersonalUserData(this.props.history);
      console.log(this.props.initialValues);
    }
  }
  onFileChange(event) {
    this.setState({ file: event.target.files[0] });
    console.log(this.props);
    console.log(event.target.files);
  }

  onFormSubmit(event) {
    this.props.UploadProfilePhoto(this.props.initialValues, this.state.file);
    event.preventDefault();
  }

  render() {
    const { handleSubmit, pristine, submitting } = this.props;
    return (
      <form onSubmit={this.onFormSubmit}>
        <div className="product clearfix pf-dress">
          <div className="product-image ">
            <div>
              <img
                src={
                  this.props.initialValues.photolink
                    ? `${S3PhotoBucket}${this.props.initialValues.photolink}`
                    : this.props.gender === "male"
                      ? "images/male.png"
                      : "images/female.png"
                }
                alt={this.props.name}
              />

              <label>Upload New Photo</label>
              <input
                onChange={this.onFileChange.bind(this)}
                type="file"
                accept="image/*"
              />

              {this.state.file && (
                <button
                  type="submit"
                  className="button button-border button-dark button-circle"
                >
                  submit
                </button>
              )}
            </div>
          </div>
        </div>
      </form>
    );
  }
}

let reduxFormUploadPhoto = UploadPhoto;

function mapDispatchToProps(dispatch) {
  return bindActionCreators(
    {
      GetPersonalUserData,
      UploadProfilePhoto
    },
    dispatch
  );
}

let ConnectedUploadPhoto = connect(
  state => {
    console.log("state:", state.personalUserData);
    return {
      initialValues: state.personalUserData
    };
  },
  mapDispatchToProps
)(reduxFormUploadPhoto);

export default require_Auth(ConnectedUploadPhoto);
