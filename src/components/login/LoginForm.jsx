import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Field, reduxForm } from 'redux-form';
import { signin } from '../../actions/businessuser';
import { connect } from 'react-redux';
class LoginForm extends Component {

  renderField(field) {
    const { meta: { touched, error } } = field;
    const divClassName = `form-group ${touched && error ? 'alert-danger' : ''}`;
    return (
      <div className="col_full">
        <label htmlFor={field.name}>{field.title}:</label>
        <input type={field.type} className="form-control" {...field.input} />
        <div className={`text-help ${divClassName}`}>
          {touched ? error : ''}
        </div>
      </div>
    );
  }

  onFormSubmit(values) {
    console.log(values);
    var history = this.props.history;
    console.log(history);
    this.props.signin(values, history);
  }

  render() {
    const { handleSubmit } = this.props;
    return (
      <div>
        <h3>廠商快速登入</h3>
        <div className="col_full">
          <button className="loginBtn loginBtn--facebook">
            Login with Facebook
          </button>
          <button className="loginBtn loginBtn--google">
            Login with Google
          </button>
        </div>
        <form id="login-form" name="login-form" className="nobottommargin" onSubmit={handleSubmit(this.onFormSubmit.bind(this))}>
        <h3>廠商登入</h3>
          <Field
            name="username"
            title="UserName"
            type="text"
            component={this.renderField}
          ></Field>
          <Field
            name="password"
            title="Password"
            type="password"
            component={this.renderField}
          ></Field>

          <div className="col_full ">
            <button className="button button-3d nomargin" id="login-form-submit" name="login-form-submit" value="login">Login</button>
            <a href="/api/forgetpassword" className="fright">Forgot Password?</a>
          </div>
          <div className="col_full nobottommargin">
            <div>Don't have an Account?</div>
            <Link to="/businessUserInitRegister" className="button button-3d button-black nomargin" id="register-form-submit" name="register-form-submit" value="register" >Register Now</Link>
          </div>
        </form>
      </div>
    )
  }
}


function validate(values) {
  // console.log(values);
  const errors = {};
  if (!values.username) errors.username = "Please fill your username";
  if (!values.password) errors.password = "Please fill your password";
  return errors;
}

function mapStateToProps(state) {
  return { authenticated: state.authenticated }
}

export default reduxForm({
  validate,
  form: 'loginForm'
})(connect(mapStateToProps, { signin })(LoginForm));