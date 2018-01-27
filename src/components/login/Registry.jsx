import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Select from 'react-select';
import regions from '../common/regions';
import subjects from '../common/subjects';
import axios from 'axios';
import TextInputField from './TextInputField';

export default class Register extends Component {
  constructor() {
    super();
    this.regionOptions = regions;
    this.subjectOptions = subjects;

    this.state = {
      data: {
        username: sessionStorage.getItem("username"),
        password: sessionStorage.getItem("password"),
        repassword: sessionStorage.getItem("repassword"),
        name: "test",
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
        workingExperiences: ["1", "2", "3"],
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
        experienced: false
      },
      germanIsChecked: false,
      englishIsChecked: false,
      chineseIsChecked: false,
      selectedRegion: "",
      selectedSubjectCategory: "",
    }

    this.onFormSubmit = this.onFormSubmit.bind(this);
  }

  onGenderChange(e) {
    console.log(e.target.value);
  }

  onCheckboxChange(e, checkboxName) {

  }
  onFormSubmit(event) {

    event.preventDefault();

    axios.post('http://localhost:4000/users',
      this.state.data)
      .then(function (response) {
        console.log(response);
      })
      .catch(function (response) {
        console.log(response.state);
      });

  }

  onSelectChange(val, nameOfSelect) {
    var data = this.state.data;
    switch (nameOfSelect) {
      case "region":
      data.region = val.label;
          this.setState({
            selectedRegion: val,
            data
          })
        break;
      case "subjectCategory":
      data.subjectCategory = val.label;
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
    var data  = Object.assign({},this.state.data);
    data.langs = langs;
    console.log(this.state.data.langs);
    console.log(data.langs);    
    this.setState({
        data
    });

  }
  render() {
    return (
      <div className="content-wrap">
        <div className="container clearfix">


          <div className="col_two_third col_last nobottommargin">
            <h3>Please input</h3>
            <form id="register-form" name="register-form" className="nobottommargin" onSubmit={this.onFormSubmit} >
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
              </div>
              <div className="clear"></div>

              <div className="col_half">
                <TextInputField name="name" title="真實姓名" value={this.state.data.name} onChange={e => this.onTextInputChange(e, "name")} />
              </div>
              <div className="col_half col_last">
                <TextInputField name="phone" title="連絡電話" value={this.state.data.phone} onChange={e => this.onTextInputChange(e, "phone")}></TextInputField>
              </div>
              <div className="clear"></div>

              <div className="col_half">
                <label htmlFor="register-form-state">所在邦聯</label>
                {/* <input type="text" id="register-form-state" name="register-form-state" value={this.state.data.state} className="form-control" /> */}
                <Select
                  options={this.regionOptions}
                  onChange={(val) => this.onSelectChange(val, "region")}
                  placeholder="Select regions"
                  closeOnSelect={false}
                  value={this.state.selectedRegion}
                  style={{ maxWidth: '300px' }}
                />
              </div>
              <div className="col_half col_last">
                <TextInputField name="city" title="居住城市" value={this.state.data.city} onChange={e => this.onTextInputChange(e, "city")}></TextInputField>
              </div>
              <div className="clear"></div>
              <div className="col_half">
                <TextInputField name="occupation" title="職業" value={this.state.data.occupation} onChange={e => this.onTextInputChange(e, "occupation")}></TextInputField>
              </div>
              <div className="col_half col_last">
                <TextInputField name="lvingYearsInGermany" title="在德居住年數" value={this.state.data.livingYearsInGermany} onChange={e => this.onTextInputChange(e, "livingYearsInGermany")}></TextInputField>
              </div>

              <div className="clear"></div>
              <div className="col_half">
                <TextInputField name="uni" title="學校" value={this.state.data.uni} onChange={e => this.onTextInputChange(e, "uni")}></TextInputField>

              </div>
              <div className="col_half col_last">
                <label htmlFor="register-form-major">科系</label>
                {/* <input type="text" id="register-form-major" name="register-form-major" value={this.state.data.major} className="form-control" /> */}
                <Select
                  options={this.subjectOptions}
                  style={{ maxWidth: '250px' }}
                  onChange={(val) => this.onSelectChange(val, "subjectCategory")}
                  placeholder="Select subjects"
                  closeOnSelect={false}
                  value={this.state.selectedSubjectCategory}
                />
              </div>
              <div className="clear"></div>
              <div className="col_half">
                {this.state.data.workingExperiences.map((e, index) => {
                  return <TextInputField key={index} name={"experience" + (index + 1)} title={"工作經驗" + (index + 1)} value={e} onChange={event => this.onExperienceInputChange(event, index)} />
                })}
              </div>

              <div className="col_half col_last">
                <div>
                  <input type="checkbox" id="register-checkbox-german" name="register-checkbox-german" checked={this.state.germanIsChecked} onChange={() => this.onLanguageChange("de")} />
                  <label>德語</label>
                  <input type="text" id="register-licence-german" name="register-licence-german" value={this.state.data.languages.german} className="form-control" disabled={!this.state.germanIsChecked} />
                  <input type="checkbox" id="register-checkbox-english" name="register-checkbox-english" checked={this.state.englishIsChecked} onChange={() => this.onLanguageChange("en")} />
                  <label>英語</label>
                  <input type="text" id="register-licence-english" name="register-licence-english" value={this.state.data.languages.english} className="form-control" disabled={!this.state.englishIsChecked} />
                  <input type="checkbox" id="register-checkbox-chinese" name="register-checkbox-chinese" checked={this.state.chineseIsChecked} onChange={() => this.onLanguageChange("ch")} />
                  <label>國語</label>
                  <input type="text" id="register-licence-chinese" name="register-licence-chinese" value={this.state.data.languages.chinese} className="form-control" disabled={!this.state.chineseIsChecked} />
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
                    <input name="gender" type="radio" value="male" />男
                  </label>
                  <label htmlFor="">
                    <input name="gender" type="radio" value="female" />女
                  </label>
                </div>
                <br />
                <div>
                  <input type="checkbox" name="licence" onChange={e => this.onCheckboxChange(e, "licence")}></input>
                  <label htmlFor="" id="licence">駕照</label>
                </div>
                <div>
                  <input type="checkbox" name="relocation" onChange={e => this.onCheckboxChange(e, "relocation")}></input>
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