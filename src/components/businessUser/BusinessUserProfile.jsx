
import React, { Component } from 'react';
import Select from 'react-select';
import regions from '../common/regions';
import subjects from '../common/subjects';
import { connect } from 'react-redux';
import { Field, reduxForm} from 'redux-form';
import checkRules from '../../regularExpression/checkRules';
import {GetBusinessUserData} from '../../actions/businessuser';
import validate from './BusinessUserRegister/validate';
import renderField from './BusinessUserRegister/renderField';
import renderRadio from './BusinessUserRegister/renderRadio';


class BusinessUserProfile extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    // this.props.setHeaderNontransparent();
    this.props.GetBusinessUserData();
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
            <h1>廠商註冊</h1>
            <form id="register-form" name="register-form" className="nobottommargin" onSubmit={handleSubmit(this.onFormSubmit.bind(this))} >
              <Field
                name="username"
                placeholder=""
                className="col_half"
                title="使用者名稱"
                component={renderField}
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
                component={renderField}
              />
              <Field
                name="reemail"
                placeholder=""
                className="col_half col_last"
                title="再次確認Email"
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
              <div className="clear"></div>

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
                name="companyName"
                title="公司名稱/個人委託"
                placeholder=""
                className="col_half "
                component={renderField} />

              <Field
                name="department"
                title="部門"
                placeholder=""
                className="col_half col_last"
                component={renderField} />
              <div className="clear"></div>

              <Field
                name="companyLocation"
                title="公司所在城市"
                placeholder=""
                className="col_half "
                component={renderField} />

              <Field
                name="address"
                title="地址"
                placeholder=""
                className="col_half col_last"
                component={renderField} />
              <div className="clear"></div>

              <Field
                name="industry"
                title="產業類別"
                placeholder=""
                className="col_half"
                component={renderField} />

              <Field
                name="productIntroduction"
                title="產品簡介"
                placeholder=""
                className="col_half col_last"
                component={renderField} />
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

BusinessUserProfile = reduxForm({
  validate,
  form:'BusinessUserRegisterForm',
  enableReinitialize: true
})(BusinessUserProfile);

BusinessUserProfile = connect(
  state=>{
    var initialValues = state.businessUserData;
    return {
      initialValues
    }
  }, {GetBusinessUserData})(BusinessUserProfile)

export default BusinessUserProfile;

// export default reduxForm({
//   validate,
//   form: 'BusinessUserRegisterForm'
// })(connect(null, actions)(BusinessUserProfile));