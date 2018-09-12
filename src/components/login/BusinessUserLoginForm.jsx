import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Field, reduxForm } from "redux-form";
import { signin } from "../../actions/businessuser";
import { connect } from "react-redux";
import { APIServer } from "../../globalsetting";
class LoginForm extends Component {
  renderField(field) {
    const {
      meta: { touched, error }
    } = field;
    const divClassName = `form-group ${touched && error ? "alert-danger" : ""}`;
    return (
      <div className="col_full">
        <label htmlFor={field.name}>{field.title}:</label>
        <input type={field.type} className="form-control" {...field.input} />
        <div className={`text-help ${divClassName}`}>
          {touched ? error : ""}
        </div>
      </div>
    );
  }

  onFormSubmit(values) {
    var history = this.props.history;
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
          <a href={`${APIServer}/auth/google/business`}>
            <button
              className="loginBtn loginBtn--google"
              href={`${APIServer}/auth/google/business`}
            >
              Login with Google
            </button>
          </a>
        </div>
        <form
          id="login-form"
          name="login-form"
          className="nobottommargin"
          onSubmit={handleSubmit(this.onFormSubmit.bind(this))}
        >
          <h3>廠商登入</h3>
          <Field
            name="username"
            title="UserName"
            type="text"
            component={this.renderField}
          />
          <Field
            name="password"
            title="Password"
            type="password"
            component={this.renderField}
          />

          <div className="col_full ">
            <button
              className="button button-3d nomargin"
              id="login-form-submit"
              name="login-form-submit"
              value="login"
            >
              Login
            </button>
            <a href={`${APIServer}/api/forgetpassword`} className="fright">
              Forgot Password?
            </a>
          </div>
          <div className="col_full nobottommargin">
            <div>Don't have an Account?</div>
            <Link
              to="/businessUserSignUp"
              className="button button-3d button-black nomargin"
              id="register-form-submit"
              name="register-form-submit"
              value="register"
            >
              Register Now
            </Link>
          </div>
        </form>
      </div>
    );
  }
}

function validate(values) {
  const errors = {};
  if (!values.username) errors.username = "Please fill your username";
  if (!values.password) errors.password = "Please fill your password";
  return errors;
}

function mapStateToProps(state) {
  return { authenticated: state.authenticated };
}

export default reduxForm({
  validate,
  form: "loginForm"
})(
  connect(
    mapStateToProps,
    { signin }
  )(LoginForm)
);
