
import React from 'react';
import { Field, reduxForm } from 'redux-form';
import validate from './validate';
import renderField from './renderField';
import { connect } from 'react-redux';
import { fillUpUserData} from '../../../actions/businessuser';

const SecondPage = props => {
  const onFormSubmit = (values)=>{
    props.fillUpUserData(values, props.history);
  }
  const { handleSubmit, previousPage, pristine, submitting } = props;
  return (
    <form onSubmit={handleSubmit(onFormSubmit)}>
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
      <button type="button" onClick={previousPage} className="button button-border button-dark button-circle">Previous</button>
        <button type="submit" disabled={pristine || submitting} className="button button-border button-dark button-circle">Submit</button>
    </form>
  )
}
export default reduxForm({
  validate,
  form: 'BusinessUserRegisterForm',
  destroyOnUnmount: false,
  forceUnregisterOnUnmount: true,

})(connect(null, {fillUpUserData})(SecondPage));