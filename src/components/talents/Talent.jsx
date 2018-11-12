import PropTypes from "prop-types";
import React, { Component } from "react";
import { connect } from "react-redux";
import "../../styles/talents/talent.css";
import regions from "../common/regions";
import subjects from "../common/subjects";
import { S3PhotoBucket } from "../../globalsetting";

class Talent extends Component {
  addToList() {
    if (this.props.candidates.length < 5) {
      this.props.addCandidate();
    }
  }

  removeFromList() {
    if (this.props.candidates.length > 0) {
      this.props.removeCandidate();
    }
  }

  render() {
    console.log(this.props);
    return (
      <div className="product clearfix pf-dress">
        <div className="product-image ">
          <a href="# ">
            <img
              src={
                this.props.photolink
                  ? `${S3PhotoBucket}${this.props.photolink}`
                  : this.props.gender === "male"
                  ? "images/male.png"
                  : "images/female.png"
              }
              alt={this.props.name}
            />
          </a>
          <div className={this.props.qualified ? "sale-flash" : ""}>
            {" "}
            {this.props.qualified ? "Qualified" : ""}{" "}
          </div>
          <div className={this.props.experienced ? "sale-flash" : ""}>
            {" "}
            {this.props.experienced ? "Experienced" : ""}
          </div>
          <div className="product-overlay ">
            <button
              className="item-quick-view"
              onClick={
                this.props.authenticated
                  ? () => this.props.enableDetail(this.props.id)
                  : alert("Please log in")
              }
            >
              <i className="icon-zoom-in2 " />
              <span> 查看資料</span>
            </button>
          </div>
        </div>
        <div className="product-desc ">
          <div className="product-title ">
            <h3>
              <a href="# ">{this.props.username}</a>
            </h3>
          </div>
          <div className="product-price ">
            <div>
              語言:&nbsp;
              <span>
                {this.props.english ? "英文" : ""}
                {this.props.english && (this.props.german || this.props.chinese)
                  ? "/"
                  : ""}
                {this.props.german ? "德文" : ""}
                {this.props.german && this.props.chinese ? "/" : ""}
                {this.props.chinese ? "中文" : ""}
              </span>
            </div>
            <div>
              專業背景:&nbsp;
              <span>
                {
                  subjects.find(subject => subject.value === this.props.subject)
                    .label
                }
              </span>
            </div>
            <div>
              所在地:&nbsp;
              <span>
                {
                  regions.find(region => region.value === this.props.region)
                    .label
                }
              </span>
            </div>
          </div>
          <div className="product-rating ">
            {!this.props.selected ? (
              <button
                type="button"
                className="button button-3d button-rounded"
                onClick={() => {
                  this.addToList();
                }}
                style={{ backgroundColor: "#0ebb99" }}
              >
                <i className="icon-bookmark2" />
                加入詢問清單
              </button>
            ) : (
              <button
                type="button"
                className="button button-3d button-rounded"
                onClick={() => {
                  this.removeFromList();
                }}
                style={{ backgroundColor: "#7CBAB7" }}
              >
                <i className="icon-bookmark2" />
                移除詢問清單
              </button>
            )}
          </div>
        </div>
      </div>
    );
  }
}

Talent.propTypes = {
  username: PropTypes.string.isRequired,
  subject: PropTypes.string.isRequired,
  region: PropTypes.string.isRequired,
  // qualified: PropTypes.bool.isRequired,
  // experienced: PropTypes.bool.isRequired,
  addCandidate: PropTypes.func.isRequired,
  selected: PropTypes.bool.isRequired,
  removeCandidate: PropTypes.func.isRequired,
  candidates: PropTypes.arrayOf(Object)
};

Talent.defaultProps = {
  candidates: []
};

function mapStateToProps(state) {
  return {
    candidates: state.candidates,
    authenticated: state.authenticated
  };
}

export default connect(mapStateToProps)(Talent);
