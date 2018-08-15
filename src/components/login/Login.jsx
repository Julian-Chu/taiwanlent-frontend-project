import React, { Component } from "react";
import "../../styles/loginButton.css";
import BusinessUserLoginForm from "./BusinessUserLoginForm";
import TalentLoginForm from "./TalentLoginForm";
import { connect } from "react-redux";
import { google_signin } from "../../actions/sign";
import * as qs from "query-string";
class Login extends Component {
  componentDidMount() {
    window.scrollTo(0, 0);
    this.props.setHeaderNontransparent();

    let params = qs.parse(this.props.location.search);
    console.log(this.props.location.search);
    console.log(params);
    let token = params.token;
    let role = params.role;
    if (token) {
      var history = this.props.history;
      this.props.google_signin(token, role, history);
    }
  }

  renderUnauthenticated() {
    return (
      <div className="container clearfix">
        <div className="col_half nobottommargin">
          <div className="well well-lg nobottommargin">
            <BusinessUserLoginForm {...this.props} />
          </div>
        </div>

        <div className="col_half col_last nobottommargin">
          <div className="well well-lg nobottommargin">
            <TalentLoginForm {...this.props} />
          </div>
        </div>
      </div>
    );
  }

  renderAuthenticated() {
    return (
      <div className="center page-section">
        <h1>Welcome!</h1>
        @Taiwanlent
      </div>
    );
  }

  render() {
    console.log("auth:", this.props.authenticated);
    return (
      <div className="content-wrap">
        {this.props.authenticated
          ? this.renderAuthenticated()
          : this.renderUnauthenticated()}
      </div>
    );
  }
}

export default connect(
  state => {
    return {
      authenticated: state.authenticated
    };
  },
  { google_signin }
)(Login);
