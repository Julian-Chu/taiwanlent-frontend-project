import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Select from 'react-select';
import regions from '../common/regions';
import subjects from '../common/subjects';
import axios from 'axios';

export default class Register extends Component {
  constructor() {
    super();
    this.regionOptions = regions;
    this.subjectOptions = subjects;

    this.state = {
      username: sessionStorage.getItem("username"),
      password: sessionStorage.getItem("password"),
      repassword: sessionStorage.getItem("repassword"),
      name: "",
      email: "",
      phone: "",
      region: "",
      city: "",
      occupation: "",
      living_years_in_Germany: "",
      uni: "",
      major: "",
      working_experiences: {
        first: "",
        second: "",
        third: ""
      },
      languages: {
        german: "",
        english: "",
        chinese: ""
      },
      self_introduction: "",
      driving_licence: false,
      willingness_relocation: false,
    }

    this.onFormSubmit = this.onFormSubmit.bind(this);
  }

  onGenderChange(e) {
    console.log(e.target.value);
  }

  onCheckboxChange(e, checkboxName) {

  }
  onFormSubmit(event) {
    // console.log(JSON.stringify(this.state));
    event.preventDefault();

    axios.post('http://localhost:4000/users',
     this.state);

  }

  SelectChange(val, nameOfSelect) {
    switch (nameOfSelect) {
      case "region":
        this.setState({
          region: val,
        });
        break;
      case "subject":
        this.setState({
          subject: val,
        })
    }
    console.log(val);
  }
  render() {
    return (
      <div className="content-wrap">
        <div className="container clearfix">


          <div className="col_two_third col_last nobottommargin">
            <h3>Please input</h3>
            <form id="register-form" name="register-form" className="nobottommargin" onSubmit={this.onFormSubmit} >
              <div className="col_half">
                <label htmlFor="register-form-username">使用者名稱:</label>
                <input type="text" id="register-form-username" name="register-form-username" value={this.state.username} className="form-control" />
              </div>
              <div className="col_half col_last">
                <label htmlFor="register-form-email">Email:</label>
                <input type="text" id="register-form-email" name="register-form-email" value="" className="form-control" />
              </div>
              <div className="clear"></div>
              <div className="col_half">
                <label htmlFor="register-form-password">輸入密碼:</label>
                <input type="password" id="register-form-password" name="register-form-password" value={this.state.password} className="form-control" />
              </div>
              <div className="col_half col_last">
                <label htmlFor="register-form-repassword">再次輸入密碼:</label>
                <input type="password" id="register-form-repassword" name="register-form-repassword" value={this.state.repassword} className="form-control" />
              </div>
              <div className="clear"></div>

              <div className="col_half">
                <label htmlFor="register-form-name">真實姓名:</label>
                <input type="text" id="register-form-name" name="register-form-email" value={this.state.name} className="form-control" />

              </div>
              <div className="col_half col_last">
                <label htmlFor="register-form-phone">連絡電話:</label>
                <input type="text" id="register-form-phone" name="register-form-phone" value={this.state.phone} className="form-control" />
              </div>
              <div className="clear"></div>

              <div className="col_half">
                <label htmlFor="register-form-state">所在邦聯</label>
                {/* <input type="text" id="register-form-state" name="register-form-state" value={this.state.state} className="form-control" /> */}
                <Select
                  options={this.regionOptions}
                  onChange={(val) => this.SelectChange(val, "region")}
                  placeholder="Select regions"
                  closeOnSelect={false}
                  value={this.state.region}
                  style={{ maxWidth: '300px' }}
                />
              </div>
              <div className="col_half col_last">
                <label htmlFor="register-form-city">居住城市</label>
                <input type="text" id="register-form-city" name="register-form-city" value={this.state.city} className="form-control" />
              </div>
              <div className="clear"></div>
              <div className="col_half">
                <label htmlFor="register-form-occupation">職業</label>
                <input type="text" id="register-form-occupation" name="register-form-occupation" value={this.state.occupation} className="form-control" />
              </div>
              <div className="col_half col_last">
                <label htmlFor="register-form-repassword">在德居住年數</label>
                <input type="text" id="register-form-repassword" name="register-form-repassword" value={this.state.living_years_in_Germany} className="form-control" />
              </div>


              <div className="clear"></div>
              <div className="col_half">
                <label htmlFor="register-form-academic">學校</label>
                <input type="text" id="register-form-academic" name="register-form-academic" value={this.state.uni} className="form-control" />
              </div>
              <div className="col_half col_last">
                <label htmlFor="register-form-major">科系</label>
                {/* <input type="text" id="register-form-major" name="register-form-major" value={this.state.major} className="form-control" /> */}
                <Select
                  options={this.subjectOptions}
                  style={{ maxWidth: '250px' }}
                  onChange={(val) => this.SelectChange(val, "subject")}
                  placeholder="Select subjects"
                  closeOnSelect={false}
                  value={this.state.subject}
                />
              </div>
              <div className="clear"></div>
              <div className="col_half">
                <label htmlFor="register-form-experience1">工作經驗1</label>
                <input type="text" id="register-form-experience1" name="register-form-experience1" value={this.state.working_experiences.first} className="form-control" />
                <label htmlFor="register-form-experience1">工作經驗2</label>
                <input type="text" id="register-form-experience2" name="register-form-experience2" value={this.state.working_experiences.second} className="form-control" />
                <label htmlFor="register-form-experience1">工作經驗3</label>
                <input type="text" id="register-form-experience3" name="register-form-experience3" value={this.state.working_experiences.third} className="form-control" />
              </div>

              <div className="col_half col_last">
                <div>
                  <input type="checkbox" id="register-checkbox-german" name="register-checkbox-german" checked={this.state.germanIsChecked} />
                  <label>德語</label>
                  <input type="text" id="register-licence-german" name="register-licence-german" value={this.state.languages.german} className="form-control" />
                  <input type="checkbox" id="register-checkbox-english" name="register-checkbox-english" checked={this.state.englishIsChecked} />
                  <label>英語</label>
                  <input type="text" id="register-licence-english" name="register-licence-english" value={this.state.languages.english} className="form-control" />
                  <input type="checkbox" id="register-checkbox-chinese" name="register-checkbox-chinese" value={this.state.chineseIsChecked} />
                  <label>國語</label>
                  <input type="text" id="register-licence-chinese" name="register-licence-chinese" value={this.state.languages.chinese} className="form-control" />
                </div>
              </div>
              <div className="clear"></div>
              <div className="col_half">
                <label htmlFor="register-form-languages">簡單自我介紹</label>
                <br />
                <textarea name="" id="" cols="45" rows="10" value={this.state.self_introduction}></textarea>
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