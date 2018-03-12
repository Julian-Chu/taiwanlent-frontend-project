import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Select from 'react-select';
import regions from '../common/regions';
import subjects from '../common/subjects';
import axios from 'axios';
import APIServerLocation from '../../APIServerLocation';
import { connect } from 'react-redux';
import { Field, reduxForm, FieldArray } from 'redux-form';
import checkRules from '../../regularExpression/checkRules';
import * as actions from '../../actions/sign';


class BusinessUserRegister extends Component {
  constructor(props) {
    super(props);
    this.regionOptions = regions;
    this.subjectOptions = subjects;

    this.state = {
      languagesIsChecked: [
        { language: 'german', isChecked: false },
        { language: 'english', isChecked: false },
        { language: 'chinese', isChecked: false }
      ]
    }
  }

  componentDidMount() {
    this.props.setHeaderNontransparent();
  }


  onFormSubmit(values) {
    console.log(values);
    console.log('this.props:', this.props);
    var history = this.props.history;
    console.log('history: ', history);
    this.props.registerForBusinessUser(values, history);
  }

  renderField(field) {
    const { meta: { touched, error }, className } = field;
    const divClassName = `form-group ${touched && error ? 'alert-danger' : ''}`;
    const styles = touched && error ? { borderColor: 'red' } : {};
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

  renderSelect(field) {
    console.log(field);
    const { className, title } = field;
    return (
      <div className={className} >
        <label htmlFor={field.name} style={{ display: 'block' }}>{title}</label>
        <Select
          options={field.options}
          placeholder="Select regions"
          closeOnSelect={true}
          style={{ maxWidth: '340px' }}
          value={field.input.value}
          onChange={value => field.input.onChange(value)}
          onBlur={() => field.input.onBlur(field.input.value)}
          {...field.meta}
        />
      </div>
    );
  }


  render() {
    const { handleSubmit } = this.props;
    return (
      <div className="content-wrap">
        <div className="container clearfix">
          <div className="col_two_third col_last nobottommargin">
            <h1>廠商註冊</h1>
            <form id="register-form" name="register-form" className="nobottommargin" onSubmit={handleSubmit(this.onFormSubmit.bind(this))} >
              <Field
                name="username"
                placeholder=""
                className="col_half"
                title="使用者名稱"
                component={this.renderField}
              />
              <div id="gender">
                <label>性別</label>
                <div>
                  <label><Field name="gender" component="input" type="radio" value="male"></Field>男</label>
                  <label><Field name="gender" component="input" type="radio" value="female"></Field>女</label>
                </div>
              </div>
              <div className="clear"></div>

              <Field
                name="email"
                placeholder=""
                className="col_half"
                title="Email"
                component={this.renderField}
              />
              <Field
                name="reemail"
                placeholder=""
                className="col_half col_last"
                title="再次確認Email"
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

              <Field
                name="name"
                placeholder=""
                className="col_half"
                title="真實姓名"
                component={this.renderField}
              />
              <Field
                name="phone"
                placeholder=""
                className="col_half col_last"
                title="連絡電話"
                component={this.renderField}
              />
              <div className="clear"></div>
              <Field
                name="companyName"
                title="公司名稱/個人委託"
                placeholder=""
                className="col_half "
                component={this.renderField} />

              <Field
                name="department"
                title="部門"
                placeholder=""
                className="col_half col_last"
                component={this.renderField} />
              <div className="clear"></div>

              <Field
                name="companyLocation"
                title="公司所在城市"
                placeholder=""
                className="col_half "
                component={this.renderField} />

              <Field
                name="address"
                title="地址"
                placeholder=""
                className="col_half col_last"
                component={this.renderField} />
              <div className="clear"></div>

              <Field
                name="industry"
                title="產業類別"
                placeholder=""
                className="col_half"
                component={this.renderField} />

              <Field
                name="productIntroduction"
                title="產品簡介"
                placeholder=""
                className="col_half col_last"
                component={this.renderField} />
              <div className="clear"></div>
              <div className="col_half col_last">
                <br />
              </div>

              <div className="clear"></div>
              <div className="col_full nobottommargin">
                <button className="button button-3d button-black nomargin" id="register-form-submit" name="register-form-submit" value="register">確認</button>

              </div>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

function validate(values) {
  const errors = {};
  // console.log('values:', values);
  if (!values.username) errors.username = "Please fill your username";
  if (!values.name) errors.name = "Please fill your name";
  if (!values.gender) errors.gender = "Please fill gender";
  if (!values.companyLocation) errors.companyLocation = "Please fill";
  if (!values.email) errors.email = "Please fill your email";
  if (!values.phone) errors.phone = "Please fill your phone";
  if (!values.industry) errors.industry ="Please fill";
  if (!values.productIntroduction) errors.productIntroduction = "Please fill";
  if (!values.password) errors.password = "Please fill your password";

  if (!checkRules.Email(values.email)) errors.email = "Invalid Email";
  if (!values.email !== values.reemail) errors.reemail = "please check email";

  if (!values.password !== values.repassword) errors.repassword = "Please check password again"
  if (!checkRules.Phone(values.phone)) errors.phone = "Format: +XX-XXXXXXXXXX"
    return errors;
}

export default reduxForm({
  validate,
  form: 'BusinessUserRegisterForm'
})(connect(null, actions)(BusinessUserRegister));