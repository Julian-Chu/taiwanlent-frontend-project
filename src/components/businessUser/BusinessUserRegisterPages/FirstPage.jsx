import React from 'react';
import { Field, reduxForm } from 'redux-form';
import validate from './validate';
import renderField from '../../renderComponents/renderField';
import { connect } from 'react-redux';
import renderRadio from '../../renderComponents/renderRadio';
import '../../../styles/ReduxForm.css';
const FirstPage = props => {
  console.log(props.initialValues);
  const { handleSubmit } = props;
  return (
    <form onSubmit={handleSubmit} >
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
      <div id="gender">
        <label>性別</label>
        <div>
          <Field 
            name="gender" 
            required={true}
            options = {[
              {title:'男', value:'male'},
              {title:'女', value: 'female'}
            ]}
            component={renderRadio}
          ></Field>
        </div>
      </div>
      <div className="clear"></div>

      <button type="submit" className="button button-border button-dark button-circle">Next</button>
    </form>
  )
}
export default reduxForm({
  validate,
  form: 'BusinessUserRegisterForm',
  destroyOnUnmount: false,
  forceUnregisterOnUnmount: true,
  initialValues: {
    gender:"male"
  }
  

})(connect(state=>({initialValues:state.businessUserData}),null)(FirstPage));
