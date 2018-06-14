
import React, { Component } from 'react';
// import regions from '../common/regions';
import { connect } from 'react-redux';
import { Field, reduxForm, reset } from 'redux-form';
// import checkRules from '../../regularExpression/checkRules';
import { GetBusinessUserData, UpdateBusinessUserData } from '../../actions/businessuser';
import validate from './BusinessUserRegisterPages/validate';
import renderField from '../renderComponents/renderField';
import renderRadio from '../renderComponents/renderRadio';
import '../../styles/ReduxForm.css';


export class BusinessUserProfile extends Component {
  constructor(props) {
    super(props);
    this.state = {
      disabled: true
    };

    this.onFormSubmit = this.onFormSubmit.bind(this);
  }

  componentDidMount() {
    // this.props.setHeaderNontransparent();
    this.props.GetBusinessUserData();
  }

  onFormSubmit(values) {
    // console.log(values);
    // console.log('this.props:', this.props);
    // var history = this.props.history;
    // console.log('history: ', history);
    this.props.UpdateBusinessUserData(values, ()=>this.toggleChangeInput(true));
  }

  toggleChangeInput(disabled) {
    this.setState({
      disabled: disabled
    })
  }

  renderButtons(handleSubmit, pristine, submitting) {
    if (this.state.disabled) {
      return (
        <div>
          <button type="button" className="button button-border button-dark button-circle" onClick={() => this.toggleChangeInput(false)}>修改資料</button>
        </div>
      )
    } else {
      return (
        <div>
          {
            !(pristine || submitting) &&
            <button type="button" className="button button-border button-dark button-circle" onClick={handleSubmit(this.onFormSubmit)}>confirm</button>
          }
          <button type="button" className="button button-border button-dark button-circle" onClick={() => {
            this.props.reset('BusinessUserProfileForm');
            this.toggleChangeInput(true);
          }

          }>Cancel</button>

        </div>
      )
    }
  }



  render() {
    const { handleSubmit, pristine, submitting } = this.props;
    return (
      <div className="content-wrap">
        <div className="container clearfix">
          <div className="col_two_third col_last nobottommargin">
            <h1>廠商註冊</h1>
            <form id="register-form" name="register-form" className="nobottommargin" onSubmit={handleSubmit(this.onFormSubmit.bind(this))} disabled="true">
              {/* <Field
                name="username"
                placeholder=""
                className="col_half"
                title="使用者名稱"
                component={renderField}
                disabled="true"
              /> */}
              <div className="col_half">
                <label htmlFor="">使用者名稱</label>
                <div>{this.props.initialValues.username}</div>
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
              <div className="clear"></div>

              <Field
                name="email"
                placeholder=""
                className="col_half"
                title="Email"
                component={renderField}
                disabled={this.state.disabled}
              />
              {/* <Field
                name="reemail"
                placeholder=""
                className="col_half col_last"
                title="再次確認Email"
                component={renderField}
                disabled={this.state.disabled}
              /> */}
              <div className="clear"></div>
              {/* <Field
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
              <div className="clear"></div> */}

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
                name="companyName"
                title="公司名稱/個人委託"
                placeholder=""
                className="col_half "
                disabled={this.state.disabled}
                component={renderField} />

              <Field
                name="department"
                title="部門"
                placeholder=""
                className="col_half col_last"
                disabled={this.state.disabled}
                component={renderField} />
              <div className="clear"></div>

              <Field
                name="companyLocation"
                title="公司所在城市"
                placeholder=""
                className="col_half "
                disabled={this.state.disabled}
                component={renderField} />

              <Field
                name="address"
                title="地址"
                placeholder=""
                className="col_half col_last"
                disabled={this.state.disabled}
                component={renderField} />
              <div className="clear"></div>

              <Field
                name="industry"
                title="產業類別"
                placeholder=""
                className="col_half"
                disabled={this.state.disabled}
                component={renderField} />

              <Field
                name="productIntroduction"
                title="產品簡介"
                placeholder=""
                className="col_half col_last"
                disabled={this.state.disabled}
                component={renderField} />
              <div className="clear"></div>
              <div className="col_half col_last">
                <br />
              </div>

              <div className="clear"></div>
              <div className="col_full nobottommargin">
                {this.renderButtons(handleSubmit, pristine, submitting)}
              </div>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

BusinessUserProfile = reduxForm({
  validate,
  form: 'BusinessUserProfileForm',
  enableReinitialize: true
})(BusinessUserProfile);

const ConnectedBusinessUserProfile = connect(
  state => {
    var initialValues = state.businessUserData;
    return {
      initialValues
    }
  }, { GetBusinessUserData, UpdateBusinessUserData, reset })(BusinessUserProfile)


export default ConnectedBusinessUserProfile;

// export default reduxForm({
//   validate,
//   form: 'BusinessUserRegisterForm'
// })(connect(null, actions)(BusinessUserProfile));