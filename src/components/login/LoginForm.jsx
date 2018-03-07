import React, { Component } from 'react';

class LoginForm extends Component {

  render() {
    return (
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
    )
  }
}

export default LoginForm;