import React, { Component } from "react";

class UploadPhoto extends Component {
  state = { file: null };

  onFileChange(event) {
    this.setState({ file: event.target.files[0] });
    console.log(event.target.files);
  }

  render() {
    return (
      <div>
        <h5>Add An Image</h5>
        <input
          onChange={this.onFileChange.bind(this)}
          type="file"
          accept="image/*"
        />
      </div>
    );
  }
}

export default UploadPhoto;
