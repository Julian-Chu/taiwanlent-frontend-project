import React from 'react';
import { Field, reduxForm } from 'redux-form';
import validate from './validate';
import renderField from './renderField';

const FirstPage = props => {
  const { handleSubmit } = props;
  return (
    <form onSubmit={handleSubmit}>
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
      <button type="submit">Next</button>
      </form>
  )
}
export default reduxForm({
  validate,
  form: 'BusinessUserRegisterForm',
  destroyOnUnmount: false,
  forceUnregisterOnUnmount: true,

})(FirstPage);
// export default FirstPage;