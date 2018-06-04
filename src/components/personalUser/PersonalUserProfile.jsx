
import React, { Component } from 'react';
import Select from 'react-select';
import regionOptions from '../common/regions';
import subjectOptions from '../common/subjects';
import { connect } from 'react-redux';
import { Field, reduxForm, FieldArray } from 'redux-form';
import checkRules from '../../regularExpression/checkRules';
import * as actions from '../../actions/personaluser';
import renderField from './PersonalUserRegister/renderField';
import validate from './PersonalUserRegister/validate';
import renderSelect from './PersonalUserRegister/renderSelect';
import renderRadio from './PersonalUserRegister/renderRadio';


export class PersonalUserRegister extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    // this.props.setHeaderNontransparent();
  }


  onFormSubmit(values) {
    console.log(values);
    console.log('this.props:', this.props);
    var history = this.props.history;
    console.log('history: ', history);
    this.props.registerForBusinessUser(values, history);
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
              />
              <Field
                name="email"
                placeholder=""
                className="col_half col_last"
                title="Email"
                component={renderField}
              />
              <div className="clear"></div>
              <Field
                name="password"
                placeholder=""
                className="col_half"
                title="輸入密碼"
                type="password"
                component={renderField}
              />
              <Field
                name="repassword"
                placeholder=""
                className="col_half col_last"
                title="再次輸入密碼"
                type="password"
                component={renderField}
              />
              <Field
                name="name"
                placeholder=""
                className="col_half"
                title="真實姓名"
                component={renderField}
              />
              <Field
                name="phone"
                placeholder=""
                className="col_half col_last"
                title="連絡電話"
                component={renderField}
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
              />

              <Field
                name="city"
                title="居住城市"
                placeholder=""
                className="col_half col_last"
                component={renderField} />
              <div className="clear"></div>
             
              <Field
                name="occupation"
                title="職業"
                placeholder=""
                className="col_half"
                component={renderField} />

              <Field
                name="livingYearsInGermany"
                title="在德居住年數"
                placeholder=""
                className="col_half col_last"
                component={renderField} />
              <div className="clear"></div>

              <Field
                name="school"
                title="學校"
                placeholder=""
                className="col_half"
                component={renderField} />

              <Field
                name="subject"
                title="科系"
                placeholder=""
                className="col_half col_last"
                options={subjectOptions}
                component={renderSelect}
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

                  />  </div>)}
              />
              <Field
                placeholder="工作經驗3"
                name="workexperience_3"
                component={(field) => (<div>
                  <label >工作經驗3:</label>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="工作經驗3"
                    {...field.input}

                  />  </div>)}
              /></div>

              <div className="col_half col_last">
                <Field
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
                <Field name="selfIntroduction" cols="40" rows="10" component="textarea"></Field>
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
                  ></Field>
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


export default reduxForm({
  validate,
  form: 'PersoalUserRegisterForm',
  initialValues: {
  }
})(connect(null, actions)(PersonalUserRegister));