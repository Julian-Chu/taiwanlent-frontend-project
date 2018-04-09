import React, { Component } from 'react';
import Select from 'react-select';
import regions from './common/regions';
import subjects from './common/subjects';
import { connect } from 'react-redux';
import { Field, reduxForm, FieldArray } from 'redux-form';
import checkRules from '../regularExpression/checkRules';
import * as actions from '../actions/sign';


export class User  extends Component {
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
    console.log('this.props:',this.props);
    var history = this.props.history;
    console.log('history: ', history);
    this.props.registerForBusinessUser(values, history);
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
    const { handleSubmit}= this.props;
    return (
      <div className="content-wrap">
        <div className="container clearfix">
          <div className="col_two_third col_last nobottommargin">
            <h3>Please input</h3>
            <form id="register-form" name="register-form" className="nobottommargin" onSubmit={handleSubmit(this.onFormSubmit.bind(this))} >
              <Field
                name="username"
                placeholder=""
                className="col_half"
                title="使用者名稱"
                component={this.renderField}
              />
              <Field
                name="email"
                placeholder=""
                className="col_half col_last"
                title="Email"
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
                name="region"
                options={this.regionOptions}
                placeholder="Select region"
                className="col_half"
                title="所在邦聯"
                style={{ maxWidth: '300px' }}
                component={this.renderSelect}
              />

              <Field
                name="city"
                title="居住城市"
                placeholder=""
                className="col_half col_last"
                component={this.renderField} />
              <div className="clear"></div>


              <Field
                name="occupation"
                title="職業"
                placeholder=""
                className="col_half"
                component={this.renderField} />

              <Field
                name="livingYearsInGermany"
                title="在德居住年數"
                placeholder=""
                className="col_half col_last"
                component={this.renderField} />
              <div className="clear"></div>

              <Field
                name="uni"
                title="學校"
                placeholder=""
                className="col_half"
                component={this.renderField} />

              <Field
                name="subject"
                title="科系"
                placeholder=""
                className="col_half col_last"
                options={this.subjectOptions}
                component={this.renderSelect}
                style={{ maxWidth: '250px' }} />

              <div className="clear"></div>
              <FieldArray
                name="workingExperiences"
                component={({ fields, meta: { error, submitFailed } }) => (
                  <div className="col_half">
                    {
                      fields.map((exp, index) => (
                        <Field
                          key={index}
                          placeholder=""
                          name={exp}
                          component={(field) => (
                            <div>
                              <label >{"工作經驗" + (index + 1)}:</label>
                              <input
                                type="text"
                                className="form-control"
                                {...field.input}

                              />
                            </div>)}
                        />
                      ))
                    }
                  </div>
                )} />

              <FieldArray
                name="languages"
                component={({ fields, meta: { error, submitFailed } }) => (
                  <div className="col_half col_last">

                    {fields.map((lang, index) => (
                      <div key={index}>
                        <Field
                          name={`${lang}.canSpeak`}
                          type="checkbox"
                          component="input"
                          value={this.state.languagesIsChecked[index].isChecked}
                          onClick={() => {
                            if (!this.state.languagesIsChecked[index].isChecked) {
                              fields.getAll()[index].certificate = "";
                              this.setState(this.state.languagesIsChecked);
                            }
                          }}
                        />
                        <label>{fields.getAll()[index].display}</label>
                        <Field
                          name={`${lang}.certificate`}
                          type="text"
                          className="form-control"
                          component="input"
                          disabled={!fields.getAll()[index].canSpeak}

                        />
                      </div>

                    ))}
                  </div>
                )} />

              <div className="col_half">
                <label htmlFor="register-form-languages">簡單自我介紹</label>
                <Field name="selfIntroduction" cols="40" rows="10" component="textarea"></Field>
              </div>
              <div id="gender">
                <label>性別</label>
                <div>
                  <label><Field name="gender" component="input" type="radio" value="male"></Field>男</label>
                  <label><Field name="gender" component="input" type="radio" value="female"></Field>女</label>
                </div>
              </div>
             
              <div className="col_half col_last">
               
                <br />
                <div>
                  <Field type="checkbox" id="licence" name="licence" component="input"></Field>
                  <label htmlFor="licence">駕照</label>                  
                </div>
                <div>
                  <Field type="checkbox" id="relocation" name="relocation" component="input"></Field>
                  <label htmlFor="relocation" >可搬家</label>                  
                </div>
              </div>

              <div className="clear"></div>
              <div className="col_full nobottommargin">
                <button className="button button-3d nomargin" id="register-form-submit" name="register-form-submit" value="register">Register Now</button>

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
  if (!values.username) errors.username = "Please fill you username";

  if (!checkRules.Email(values.email)) errors.email = "Invalid Email";
  if (!values.email) errors.email = "Please fill you email";
  return errors;
}

export default reduxForm({
  validate,
  form: 'RegisterForm',
  initialValues: {
    workingExperiences: ["", "", ""],
    languages: [
      {
        display: "德語",
        language: "germany",
        canSpeak: false,
        certificate: ""
      },
      {
        display: "英語",
        language: "english",
        canSpeak: false,
        certificate: ""
      },
      {
        display: "國語",
        language: "chinese",
        canSpeak: false,
        certificate: ""
      }
    ],
    username: "test"
  }
})(connect(null, actions)(User));