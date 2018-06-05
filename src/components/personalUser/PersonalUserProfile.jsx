
import React, { Component } from 'react';
import Select from 'react-select';
import regionOptions from '../common/regions';
import subjectOptions from '../common/subjects';
import { connect } from 'react-redux';
import { Field, reduxForm, FieldArray, reset } from 'redux-form';
import checkRules from '../../regularExpression/checkRules';
import * as actions from '../../actions/personaluser';
import renderField from './PersonalUserRegister/renderField';
import validate from './PersonalUserRegister/validate';
import renderSelect from './PersonalUserRegister/renderSelect';
import renderRadio from './PersonalUserRegister/renderRadio';
import { GetPersonalUserData } from '../../actions/personaluser';


export class PersonalUserProfile extends Component {
  constructor(props) {
    super(props);

    this.state = {
      disabled: false
    }
  }

  componentWillMount(){
    this.props.GetPersonalUserData();
    
  }

  componentDidMount() {
    // this.props.setHeaderNontransparent();
  }


  onFormSubmit(values) {
    console.log(values);
    console.log('this.props:', this.props);
    var history = this.props.history;
    console.log('history: ', history);
    // this.props.registerForBusinessUser(values, history);
  }

  toggleChangeInput(disabled) {
    this.setState({
      disabled: disabled
    })
  }

  render() {
    const { handleSubmit } = this.props;
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
                component={renderField}
                disabled={this.state.disabled}
              />
              <Field
                name="email"
                placeholder=""
                className="col_half col_last"
                title="Email"
                component={renderField}
                disabled={this.state.disabled}
              />
              <div className="clear"></div>
              <Field
                name="password"
                placeholder=""
                className="col_half"
                title="輸入密碼"
                type="password"
                component={renderField}
                disabled={this.state.disabled}
              />
              <Field
                name="repassword"
                placeholder=""
                className="col_half col_last"
                title="再次輸入密碼"
                type="password"
                component={renderField}
                disabled={this.state.disabled}
              />
              <Field
                name="name"
                placeholder=""
                className="col_half"
                title="真實姓名"
                component={renderField}
                disabled={this.state.disabled}
              />
              <Field
                name="phone"
                placeholder=""
                className="col_half col_last"
                title="連絡電話"
                component={renderField}
                disabled={this.state.disabled}
              />
              <div className="clear"></div>
              <Field
                name="region"
                options={regionOptions}
                placeholder="Select region"
                className="col_half"
                title="所在邦聯"
                style={{ maxWidth: '300px' }}
                component={renderSelect}
                disabled={this.state.disabled}
              />

              <Field
                name="city"
                title="居住城市"
                placeholder=""
                className="col_half col_last"
                disabled={this.state.disabled}
                component={renderField} />
              <div className="clear"></div>

              <Field
                name="occupation"
                title="職業"
                placeholder=""
                className="col_half"
                disabled={this.state.disabled}
                component={renderField} />

              <Field
                name="livingYearsInGermany"
                title="在德居住年數"
                placeholder=""
                className="col_half col_last"
                disabled={this.state.disabled}
                component={renderField} />
              <div className="clear"></div>

              <Field
                name="school"
                title="學校"
                placeholder=""
                className="col_half"
                disabled={this.state.disabled}
                component={renderField} />

              <Field
                name="subject"
                title="科系"
                placeholder=""
                className="col_half col_last"
                options={subjectOptions}
                component={renderSelect}
                disabled={this.state.disabled}
                style={{ maxWidth: '250px' }} />

              <div className="clear"></div>
              <div className="col_half">
                <Field
                  placeholder="工作經驗1"
                  name="workexperience_1"
                  component={(field) => (<div>
                    <label >工作經驗1:</label>
                    <input
                      type="text"
                      className="form-control"
                      placeholder="工作經驗1"
                      {...field.input}
                      disabled={this.state.disabled}

                    />  </div>)}
                />
                <Field
                  placeholder="工作經驗2"
                  name="workexperience_2"
                  component={(field) => (<div>
                    <label >工作經驗:</label>
                    <input
                      type="text"
                      className="form-control"
                      placeholder="工作經驗2"
                      {...field.input}
                      disabled={this.state.disabled}

                    />  </div>)}
                />
                <Field
                  name="workexperience_3"
                  component={(field) => (<div>
                    <label >工作經驗3:</label>
                    <input
                      type="text"
                      className="form-control"
                      placeholder="工作經驗3"
                      {...field.input}
                      disabled={this.state.disabled}

                    />  </div>)}
                /></div>

              <div className="col_half col_last">
                <Field
                  disabled={this.state.disabled}
                  name="german"
                  type="checkbox"
                  component="input"
                  onClick={(event) => {
                    if (this.props.german) {
                      this.props.change('PersonalUserRegisterForm', "german_certificate", null);
                    }
                  }}
                />
                <label>German</label>
                <Field
                  name="german_certificate"
                  type="text"
                  className="form-control"
                  component="input"
                  disabled={!this.props.german}
                />
                <Field
                  disabled={this.state.disabled}
                  name="english"
                  type="checkbox"
                  component="input"
                  onClick={(event) => {
                    if (this.props.english) {
                      this.props.change('PersonalUserRegisterForm', "english_certificate", null);
                    }
                  }}
                />
                <label>English</label>
                <Field
                  name="english_certificate"
                  type="text"
                  className="form-control"
                  component="input"
                  disabled={!this.props.english}
                />
                <Field
                  disabled={this.state.disabled}
                  name="chinese"
                  type="checkbox"
                  component="input"
                  onClick={(event) => {
                    if (this.props.chinese) {
                      this.props.change('PersonalUserRegisterForm', "chinese_certificate", null);
                    }
                  }}
                />
                <label>Chinese</label>
                <Field
                  name="chinese_certificate"
                  type="text"
                  className="form-control"
                  component="input"
                  disabled={!this.props.chinese}
                />
              </div>


              <div className="col_half">
                <label htmlFor="register-form-languages">簡單自我介紹</label>
                <Field name="selfIntroduction" cols="40" rows="10" component="textarea"
                  disabled={this.state.disabled}
                ></Field>
              </div>
              <div id="gender">
                <label>性別</label>
                <div>
                  <Field
                    name="gender"
                    required={true}
                    options={[
                      { title: '男', value: 'male' },
                      { title: '女', value: 'female' }
                    ]}
                    component={renderRadio}
                    disabled={this.state.disabled}
                  ></Field>
                </div>
              </div>

              <div className="col_half col_last">

                <br />
                <div>
                  <Field type="checkbox" id="licence" name="licence" component="input"

                    disabled={this.state.disabled}
                  ></Field>
                  <label htmlFor="licence">駕照</label>
                </div>
                <div>
                  <Field type="checkbox" id="relocation" name="relocation" component="input"
                    disabled={this.state.disabled}
                  ></Field>
                  <label htmlFor="relocation" >可搬家</label>
                </div>
              </div>

              <div className="clear"></div>
              <div className="col_full nobottommargin">
                <button type="button" className="button button-3d nomargin" id="register-form-submit" name="register-form-submit" value="register" onClick={() => this.toggleChangeInput(true)}>修改資料</button>
                <button type="button" className="button button-3d nomargin" onClick={() => this.props.reset('PersonalUserRegisterForm')}>Cancel</button>

              </div>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

PersonalUserProfile = reduxForm({
  form: 'PersonalUserRegisterForm',
  enableReinitialize: true,
})(PersonalUserProfile);

PersonalUserProfile = connect(
  state => {
    var initialValues = state.personalUserData;
    return {
      initialValues
    }
  }, { GetPersonalUserData, reset }
)(PersonalUserProfile);

export default PersonalUserProfile;