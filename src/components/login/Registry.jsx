import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Select from 'react-select';
import regions from '../common/regions';
import subjects from '../common/subjects';
import axios from 'axios';
import TextInputField from './TextInputField';
import APIServerLocation from '../../APIServerLocation';
import { connect } from 'react-redux';
import { Field, reduxForm, FieldArray } from 'redux-form';
import checkRules from '../../regularExpression/checkRules';


export class Register extends Component {
  constructor(props) {
    super(props);
    this.regionOptions = regions;
    this.subjectOptions = subjects;

    this.state = {
      data: {
        username: sessionStorage.getItem("username"),
        password: sessionStorage.getItem("password"),
        repassword: sessionStorage.getItem("repassword"),
        name: "",
        email: "",
        phone: "",
        photo: "",
        region: "",
        city: "",
        occupation: "",
        livingYearsInGermany: "",
        uni: "",
        subjectCategory: "",
        major: "",
        workingExperiences: ["", "", ""],
        langs: "",
        languages: {
          german: "",
          english: "",
          chinese: ""
        },
        selfIntroduction: "",
        drivingLicence: false,
        willingToRelocate: false,
        qualified: false,
        experienced: false,
        gender: ""
      },
      germanIsChecked: false,
      englishIsChecked: false,
      chineseIsChecked: false,
      selectedRegion: "",
      selectedSubjectCategory: "",
    }

    this.onFormSubmit = this.onFormSubmit.bind(this);
  }

  componentDidMount() {
    console.log(this.props);
    this.props.setHeaderNontransparent();
  }

  onGenderChange(e) {
    var data = Object.assign({}, this.state.data);
    data.gender = e.target.value;
    this.setState({
      data
    })
  }

  onOtherCheckboxChange(e, checkboxName) {
    var data = Object.assign({}, this.state.data);
    switch (checkboxName) {
      case 'drivingLicence':
        data.drivingLicence = !data.drivingLicence;
        break;
      case 'willingToRelocate':
        data.willingToRelocate = !data.willingToRelocate;
        break;
      default:
        break;
    }
    this.setState({
      data
    })
  }

  onFormSubmit(event) {
    event.preventDefault();
    console.log(this.props);
    var history = this.props.history;
    console.log('history: ', history);
    axios.post(`${APIServerLocation}/users`,
      this.state.data)
      .then(function (response) {
        console.log(response);
        history.push("/talents");
      })
      .catch(function (response) {
        console.log(response.state);
        console.log("registry failed");

      });

  }

  onSelectChange(val, nameOfSelect) {
    var data = this.state.data;
    console.log(val);
    switch (nameOfSelect) {
      case "region":
        if (val !== null) {
          data.region = val.label;
        }
        this.setState({
          selectedRegion: val,
          data
        })
        break;
      case "subjectCategory":
        if (val !== null) {
          data.subjectCategory = val.label;
        }
        this.setState({
          selectedSubjectCategory: val,
          data
        })
        break;
      default:
        break;
    }
    console.log("region:", this.state.data.region);
    console.log("subjectCategory", this.state.data.subjectCategory);
  }

  onTextInputChange(e, propertyName) {
    var newData = JSON.parse(JSON.stringify(this.state.data));
    newData[propertyName] = e.target.value;
    // this.state.data[propertyName]=e.target.value;    
    this.setState({ data: newData });
  }

  onExperienceInputChange(e, index) {
    var experiences = this.state.data.workingExperiences;
    experiences[index] = e.target.value;
    this.setState({
      workingExperiences: experiences
    })
  }

  onLanguageChange(lang) {
    var germanIsChecked = this.state.germanIsChecked;
    var englishIsChecked = this.state.englishIsChecked;
    var chineseIsChecked = this.state.chineseIsChecked;

    if (lang === "de") {
      germanIsChecked = !germanIsChecked;
      this.setState({
        germanIsChecked
      })
    }
    else if (lang === "en") {
      englishIsChecked = !englishIsChecked;
      this.setState({
        englishIsChecked
      })
    }
    else {
      chineseIsChecked = !chineseIsChecked;
      this.setState({
        chineseIsChecked
      })
    }
    var langsArray = [];
    if (germanIsChecked) langsArray.push("德文");
    if (englishIsChecked) langsArray.push("英文");
    if (chineseIsChecked) langsArray.push("中文");

    var langs = langsArray.join("/");
    console.log(langs);
    var data = Object.assign({}, this.state.data);
    data.langs = langs;
    console.log(this.state.data.langs);
    console.log(data.langs);
    this.setState({
      data
    });
  }

  onLanguageCertChange(e, lang) {
    var data = Object.assign({}, this.state.data);
    switch (lang) {
      case "de":
        data.languages.german = e.target.value;
        break;
      case "en":
        data.languages.english = e.target.value;
        break;
      case "ch":
        data.languages.chinese = e.target.value;
        break;
      default:
        break;
    }
    this.setState({
      data
    })
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
    return (
      <div className="content-wrap">
        <div className="container clearfix">
          <div className="col_two_third col_last nobottommargin">
            <h3>Please input</h3>
            <form id="register-form" name="register-form" className="nobottommargin" onSubmit={this.onFormSubmit} >
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
                          component={(field)=>(
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
                          onClick={()=>{
                            if(!fields.getAll()[index].canSpeak)
                              fields.getAll()[index].certificate = "";
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


              {/* 
              <div className="col_half">
                <TextInputField name="username" title="使用者名稱" value={this.state.data.username} onChange={(e) => this.onTextInputChange(e, "username")} />
              </div>
              <div className="col_half col_last">
                <TextInputField name="email" title="Email" value={this.state.data.email} onChange={(e) => this.onTextInputChange(e, "email")} />
              </div>
              <div className="clear"></div>
              <div className="col_half">
                <label htmlFor="register-form-password">輸入密碼:</label>
                <input type="password" id="register-form-password" name="register-form-password" value={this.state.data.password} className="form-control" onChange={(e) => this.onTextInputChange(e, "password")} />
              </div>
              <div className="col_half col_last">
                <label htmlFor="register-form-repassword">再次輸入密碼:</label>
                <input type="password" id="register-form-repassword" name="register-form-repassword" value={this.state.data.repassword} className="form-control" onChange={(e) => this.onTextInputChange(e, "repassword")} />
              </div> */}
              {/* <div className="clear"></div>

              <div className="col_half">
                <TextInputField name="name" title="真實姓名" value={this.state.data.name} onChange={e => this.onTextInputChange(e, "name")} />
              </div>
              <div className="col_half col_last">
                <TextInputField name="phone" title="連絡電話" value={this.state.data.phone} onChange={e => this.onTextInputChange(e, "phone")}></TextInputField>
              </div>
              <div className="clear"></div> */}

              {/* <div className="col_half">
                <label htmlFor="register-form-state">所在邦聯</label>
                <Select
                  options={this.regionOptions}
                  onChange={(val) => this.onSelectChange(val, "region")}
                  placeholder="Select regions"
                  closeOnSelect={false}
                  value={this.state.selectedRegion}
                  style={{ maxWidth: '300px' }}
                />
              </div> */}
              {/* <div className="col_half col_last">
                <TextInputField name="city" title="居住城市" value={this.state.data.city} onChange={e => this.onTextInputChange(e, "city")}></TextInputField>
              </div>
              <div className="clear"></div>
              <div className="col_half">
                <TextInputField name="occupation" title="職業" value={this.state.data.occupation} onChange={e => this.onTextInputChange(e, "occupation")}></TextInputField>
              </div>
              <div className="col_half col_last">
                <TextInputField name="lvingYearsInGermany" title="在德居住年數" value={this.state.data.livingYearsInGermany} onChange={e => this.onTextInputChange(e, "livingYearsInGermany")}></TextInputField>
              </div>

              <div className="clear"></div> */}
              {/* <div className="col_half">
                <TextInputField name="uni" title="學校" value={this.state.data.uni} onChange={e => this.onTextInputChange(e, "uni")}></TextInputField>

              </div>
              <div className="col_half col_last">
                <label htmlFor="register-form-major">科系</label>
                <Select
                  options={this.subjectOptions}
                  style={{ maxWidth: '250px' }}
                  onChange={(val) => this.onSelectChange(val, "subjectCategory")}
                  placeholder="Select subjects"
                  closeOnSelect={false}
                  value={this.state.selectedSubjectCategory}
                />
              </div>
              <div className="clear"></div> */}
              {/* <div className="col_half">
                {this.state.data.workingExperiences.map((e, index) => {
                  return <TextInputField key={index} name={"experience" + (index + 1)} title={"工作經驗" + (index + 1)} value={e} onChange={event => this.onExperienceInputChange(event, index)} />
                })}
              </div> */}

              <div className="col_half col_last">
                <div>
                  <input type="checkbox" id="register-checkbox-german" name="register-checkbox-german" checked={this.state.germanIsChecked} onChange={() => this.onLanguageChange("de")} />
                  <label>德語</label>
                  <input type="text" id="register-licence-german" name="register-licence-german" value={this.state.data.languages.german} className="form-control" disabled={!this.state.germanIsChecked} onChange={(e) => this.onLanguageCertChange(e, "de")} />
                  <input type="checkbox" id="register-checkbox-english" name="register-checkbox-english" checked={this.state.englishIsChecked} onChange={() => this.onLanguageChange("en")} />
                  <label>英語</label>
                  <input type="text" id="register-licence-english" name="register-licence-english" value={this.state.data.languages.english} className="form-control" disabled={!this.state.englishIsChecked} onChange={(e) => this.onLanguageCertChange(e, "en")} />
                  <input type="checkbox" id="register-checkbox-chinese" name="register-checkbox-chinese" checked={this.state.chineseIsChecked} onChange={() => this.onLanguageChange("ch")} />
                  <label>國語</label>
                  <input type="text" id="register-licence-chinese" name="register-licence-chinese" value={this.state.data.languages.chinese} className="form-control" disabled={!this.state.chineseIsChecked} onChange={(e) => this.onLanguageCertChange(e, "ch")} />
                </div>
              </div>
              <div className="clear"></div>
              <div className="col_half">
                <label htmlFor="register-form-languages">簡單自我介紹</label>
                <br />
                <textarea name="" id="" cols="45" rows="10" value={this.state.data.selfIntroduction} onChange={e => this.onTextInputChange(e, "selfIntroduction")}></textarea>
              </div>
              <div className="col_half col_last">

                <div id="gender" onChange={e => this.onGenderChange(e)}>
                  <label>性別</label><br />
                  <label htmlFor="">
                    <input name="gender" type="radio" value="male" checked={this.state.data.gender === "male"} />男
                  </label>
                  <label htmlFor="">
                    <input name="gender" type="radio" value="female" checked={this.state.data.gender === "female"} />女
                  </label>
                </div>
                <br />
                <div>
                  <input type="checkbox" name="licence" onChange={e => this.onOtherCheckboxChange(e, "drivingLicence")} checked={this.state.data.drivingLicence}></input>
                  <label htmlFor="" id="licence">駕照</label>
                </div>
                <div>
                  <input type="checkbox" name="relocation" onChange={e => this.onOtherCheckboxChange(e, "willingToRelocate")} checked={this.state.data.willingToRelocate}></input>
                  <label htmlFor="" id="relocation">可搬家</label>
                </div>
              </div>


              <div className="clear"></div>
              <div className="col_full nobottommargin">
                <button className="button button-3d button-black nomargin" id="register-form-submit" name="register-form-submit" value="register">Register Now</button>

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
  console.log('values:', values);
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
        display:"德語",
        language: "germany",
        canSpeak: true,
        certificate: "c1"
      },
      {
        display:"英語",        
        language: "english",
        canSpeak: false,
        certificate: "c2"
      },
      {
        display:"國語",        
        language: "chinese",
        canSpeak: false,
        certificate:"c3"
      }
    ],
    username: "test"
  }
})(connect(null, null)(Register));