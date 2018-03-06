import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import '../../styles/loginButton.css';


export default class Login extends Component {

  constructor() {
    super();
    this.state = {
      username: "",
      password: "",
      repassword: "",
    }
  }

  componentDidMount() {
    window.scrollTo(0, 0);
    this.props.setHeaderNontransparent();
  }

  onUsernameChange(e) {
    console.log(e.target.value);
    this.setState({
      username: e.target.value
    })
  }

  onPasswordChange(event, field) {
    if (field === "pw") {
      this.setState({
        password: event.target.value
      })
    } else {
      this.setState({
        repassword: event.target.value
      })
    }
  }

  clickRegisterBtn() {
    console.log("clicked");
    sessionStorage.setItem("username", this.state.username);
    sessionStorage.setItem("password", this.state.password);
    sessionStorage.setItem("repassword", this.state.repassword);

  }


  render() {
    return (
      <div className="content-wrap">
        <div className="container clearfix">
          <div className="col_one_third nobottommargin">
            <div className="well well-lg nobottommargin">
              <form id="login-form" name="login-form" className="nobottommargin" action="#" method="post">
                <h3>Login to your Account</h3>
                <div className="col_full">
                  <label htmlFor="login-form-username">Username:</label>
                  <input type="text" id="login-form-username" name="login-form-username" value="" className="form-control" />
                </div>
                <div className="col_full">
                  <label htmlFor="login-form-password">Password:</label>
                  <input type="password" id="login-form-password" name="login-form-password" value="" className="form-control" />
                </div>
                <div className="col_full nobottommargin">
                  <button className="button button-3d nomargin" id="login-form-submit" name="login-form-submit" value="login">Login</button>
                  <a href="#" className="fright">Forgot Password?</a>
                </div>
              </form>
            </div>
          </div>

          <div className="col_two_third col_last nobottommargin">
            <h3>Don't have an Account? Register Now.</h3>
            <form id="register-form" name="register-form" className="nobottommargin" action="#" method="post">
              <div className="clear"></div>
              <div className="col_half">
                <label htmlFor="register-form-username">使用者名稱:</label>
                <input type="text" id="register-form-username" name="register-form-username" value={this.state.username} className="form-control" onChange={e => this.onUsernameChange(e)} />
              </div>

              <div className="clear"></div>
              <div className="col_half">
                <label htmlFor="register-form-password">輸入密碼:</label>
                <input type="password" id="register-form-password" name="register-form-password" value={this.state.password} className="form-control" onChange={e => this.onPasswordChange(e, "pw")} />
              </div>
              <div className="clear"></div>
              <div className="col_half">
                <label htmlFor="register-form-repassword">再次輸入密碼:</label>
                <input type="password" id="register-form-repassword" name="register-form-repassword" value={this.state.repassword} className="form-control" onChange={e => this.onPasswordChange(e, "pw_confirm")} />
              </div>

              <div className="clear"></div>
              <div className="col_full nobottommargin">
                <Link to="/register" className="button button-3d button-black nomargin" id="register-form-submit" name="register-form-submit" value="register" onClick={() => this.clickRegisterBtn()}>Register Now</Link>
                <button className="loginBtn loginBtn--facebook">
                  Login with Facebook
                </button>
                <button className="loginBtn loginBtn--google">
                  Login with Google
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    );
  }
}