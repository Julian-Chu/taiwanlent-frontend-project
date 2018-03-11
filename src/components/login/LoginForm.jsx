import React, { Component } from 'react';
import {Link} from 'react-router-dom';
class LoginForm extends Component {

  render() {
    return (
      <form id="login-form" name="login-form" className="nobottommargin" action="#" method="post">
        <h3>廠商登入</h3>
        <div className="col_full">
          <label htmlFor="login-form-username">Username:</label>
          <input type="text" id="login-form-username" name="login-form-username" value="" className="form-control" />
        </div>
        <div className="col_full">
          <label htmlFor="login-form-password">Password:</label>
          <input type="password" id="login-form-password" name="login-form-password" value="" className="form-control" />
        </div>
        <div className="col_full ">
          <button className="button button-3d nomargin" id="login-form-submit" name="login-form-submit" value="login">Login</button>
          <a href="#" className="fright">Forgot Password?</a>
        </div>
        <div className="col_full nobottommargin">
          <div>Don't have an Account?</div>
          <Link to="/BusinessUserRegister" className="button button-3d button-black nomargin" id="register-form-submit" name="register-form-submit" value="register" onClick={() => this.clickRegisterBtn()}>Register Now</Link>
        </div>
      </form>
    )
  }
}

export default LoginForm;