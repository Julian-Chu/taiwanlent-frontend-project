import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Field, reduxForm } from 'redux-form';
import { signup } from '../../actions/businessuser';

class BusinessUserSignUp extends Component {

  onFormSubmit(values) {
    console.log(values);
    console.log('this.props:', this.props);
    var history = this.props.history;
    console.log('history: ', history);
    this.props.signup(values, history);
  }
  renderField(field) {
    const { meta: { touched, error }, className } = field;
    const divClassName = `form-group ${touched && error ? 'alert-danger' : ''}`;
    const inputClassName = `form-control ${touched && error ? 'alert-danger' : ''} `;
    return (
      <div className={className}>
        <label htmlFor={field.name}>{field.title}:</label>
        <input type={field.type || "text"}
          className={inputClassName}
          {...field.input}
        />
        <div className={`text-help ${divClassName}`}>
          {touched ? error : ''}
        </div>
      </div>
    )
  }
  render() {
    const { handleSubmit } = this.props;
    return (
      <div style={{margin:'5% 10% 5%'}}>
        <h3>商務帳號註冊</h3>
        <form id="register-form" name="register-form" className="nobottommargin" onSubmit={handleSubmit(this.onFormSubmit.bind(this))} >
          <Field
            name="username"
            placeholder=""
            className="col_half"
            title="使用者名稱"
            component={this.renderField}
          />
          <div className="clear"></div>
          <Field
            name="password"
            placeholder=""
            className="col_half"
            title="輸入密碼"
            type="password"
            component={this.renderField}
          />
          <Field
            name="repassword"
            placeholder=""
            className="col_half col_last"
            title="再次輸入密碼"
            type="password"
            component={this.renderField}
          />
          <div className="clear"></div>
          <button type="submit" className="button button-border button-dark button-circle">確認</button>
        </form>
      </div>
    )
  }
}

function validate(values) {
  const errors = {};
  if (!values.username) errors.username = "Please fill your username";
  if (!values.password) errors.password = "Please fill your password";
  if (values.password !== values.repassword) errors.repassword = "Please check password again"

  return errors;
}


export default reduxForm({
  validate,
  form: "BusinessUserSignUpForm"
})(connect(null, { signup })(BusinessUserSignUp));