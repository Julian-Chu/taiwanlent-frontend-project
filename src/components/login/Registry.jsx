import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class Register extends Component {
  constructor() {
    super();
    this.state = {
      username: sessionStorage.getItem("username"),
      password: sessionStorage.getItem("password"),
      repassword: sessionStorage.getItem("repassword")
    }
  }
  onFormSubmit(event) {
    event.preventDefault();
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
                <input type="text" id="register-form-name" name="register-form-email" value="" className="form-control" />

              </div>
              <div className="col_half col_last">
                <label htmlFor="register-form-phone">連絡電話:</label>
                <input type="text" id="register-form-phone" name="register-form-phone" value="" className="form-control" />
              </div>
              <div className="clear"></div>

              <div className="col_half">
              <label htmlFor="register-form-state">所在邦聯</label>
                <input type="text" id="register-form-state" name="register-form-state" value="" className="form-control" />
              </div>
              <div className="col_half col_last">
              <label htmlFor="register-form-city">居住城市</label>
                <input type="text" id="register-form-city" name="register-form-city" value="" className="form-control" />
              </div>
              <div className="clear"></div>
              <div className="col_half">
              <label htmlFor="register-form-job">職業</label>
              <input type="text" id="register-form-job" name="register-form-job" value="" className="form-control" />
              </div>
              <div className="col_half col_last">
                <label htmlFor="register-form-repassword">在德居住年數</label>
                <input type="text" id="register-form-repassword" name="register-form-repassword" value="" className="form-control" />
              </div>


              <div className="clear"></div>
              <div className="col_half">
              <label htmlFor="register-form-academic">學校</label>
                <input type="text" id="register-form-academic" name="register-form-academic" value="" className="form-control" />
              </div>
              <div className="col_half col_last">
                   <label htmlFor="register-form-subject">科系</label>
                <input type="text" id="register-form-subject" name="register-form-subject" value="" className="form-control" />
              </div>
              <div className="clear"></div>
              <div className="col_half">
              <label htmlFor="register-form-experience1">工作經驗1</label>
                <input type="text" id="register-form-experience1" name="register-form-experience1" value="" className="form-control" />
                <label htmlFor="register-form-experience1">工作經驗2</label>
                <input type="text" id="register-form-experience2" name="register-form-experience2" value="" className="form-control" />
                <label htmlFor="register-form-experience1">工作經驗3</label>
                <input type="text" id="register-form-experience3" name="register-form-experience3" value="" className="form-control" />
              </div>
              
              <div className="col_half col_last">
              <div>
                  <input type="checkbox" id="register-checkbox-german" name="register-checkbox-german" value="" />
                  <label>德語</label>
                  <input type="text" id="register-licence-german" name="register-licence-german" value="" className="form-control" />
                  <input type="checkbox" id="register-checkbox-english" name="register-checkbox-english" value="" />
                  <label>英語</label>
                  <input type="text" id="register-licence-english" name="register-licence-english" value="" className="form-control" />
                  <input type="checkbox" id="register-checkbox-chinese" name="register-checkbox-chinese" value="" />
                  <label>國語</label>
                  <input type="text" id="register-licence-chinese" name="register-licence-chinese" value="" className="form-control" />
                </div>
              </div>
              <div className="clear"></div>
              <div className="col_half">
                <label htmlFor="register-form-languages">簡單自我介紹</label>
                <br />
                <textarea name="" id="" cols="45" rows="10"></textarea>
              </div>
              <div className="col_half col_last">

                <div>
                  <label htmlFor="" id="gender">性別</label><br />
                  <label htmlFor="">
                    <input name="gender" type="radio" />男
                  </label>
                  <label htmlFor="">
                    <input name="gender1" type="radio" />女
                  </label>
                </div>
                <br />
                <div>
                  <label htmlFor="" id="licence">駕照</label><br />
                  <input type="checkbox" name="licence"></input>
                </div>
              </div>


              <div className="clear"></div>
              <div className="col_full nobottommargin">
                <Link to="/register" className="button button-3d button-black nomargin" id="register-form-submit" name="register-form-submit" value="register">Register Now</Link>
                {/* <div className="topmargin center"><Link to="/talents" className="button button-border button-circle t600">進入人才資料庫</Link></div> */}

              </div>
            </form>
          </div>
        </div>
      </div>
    );
  }


}